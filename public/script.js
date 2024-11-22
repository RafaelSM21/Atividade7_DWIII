const API_URL = "http://localhost:3000/expense";

const form = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const tableBody = document.getElementById("expenses-table").querySelector("tbody");
const totalExpenses = document.getElementById("total-expenses");

// Função para buscar e exibir todas as despesas
async function fetchExpenses() {
    try {
        const response = await fetch(API_URL);
        const expenses = await response.json();
        renderExpenses(expenses);
        await fetchTotalExpenses();
    } catch (error) {
        console.error("Erro ao buscar despesas:", error);
    }
}

// Função para exibir as despesas na tabela
function renderExpenses(expenses) {
    tableBody.innerHTML = ""; // Limpa a tabela
    expenses.forEach(expense => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.description}</td>
            <td>R$ ${expense.amount.toFixed(2)}</td>
            <td>${new Date(expense.date).toLocaleDateString()}</td>
            <td class="actions">
                <button onclick="editExpense('${expense._id}')">Editar</button>
                <button onclick="deleteExpense('${expense._id}')">Excluir</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Função para buscar e exibir o total das despesas
async function fetchTotalExpenses() {
    try {
        const response = await fetch(`${API_URL}/total`);
        const { total } = await response.json();
        totalExpenses.textContent = `Total: R$ ${total.toFixed(2)}`;
    } catch (error) {
        console.error("Erro ao buscar total de despesas:", error);
    }
}

// Função para adicionar uma nova despesa
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description, amount, date }),
        });
        form.reset();
        await fetchExpenses();
    } catch (error) {
        console.error("Erro ao adicionar despesa:", error);
    }
});

// Função para excluir uma despesa
async function deleteExpense(id) {
    try {
        await fetch(API_URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        await fetchExpenses();
    } catch (error) {
        console.error("Erro ao excluir despesa:", error);
    }
}

// Função para editar uma despesa
async function editExpense(id) {
    const description = prompt("Nova descrição:");
    const amount = parseFloat(prompt("Novo valor:"));
    const date = prompt("Nova data (yyyy-mm-dd):");

    if (!description || isNaN(amount) || !date) return;

    try {
        await fetch(API_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, description, amount, date }),
        });
        await fetchExpenses();
    } catch (error) {
        console.error("Erro ao editar despesa:", error);
    }
}

// Inicializa a tabela
fetchExpenses();
