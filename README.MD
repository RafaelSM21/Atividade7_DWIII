# Controle de Despesas 💰

Este projeto é uma aplicação para gerenciar despesas pessoais, permitindo que os usuários registrem, editem, excluam e visualizem suas despesas, além de calcular automaticamente o total.

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - TypeScript
  - MongoDB com Mongoose

- **Ferramentas:**
  - MongoDB Compass (para visualização do banco de dados)

## ⚙️ Funcionalidades

### Backend
- CRUD (Create, Read, Update, Delete) completo para gerenciar despesas.
- Endpoint adicional para calcular o total das despesas no banco de dados.
- Validação de entradas para evitar valores inválidos, como campos vazios ou valores negativos.

### Frontend
- Formulário para cadastrar despesas, com os campos:
  - **Descrição**
  - **Valor** (formato monetário: R$)
  - **Data** (formato dd/mm/aaaa)
- Lista de despesas com:
  - Botões de ação para "Alterar" (em azul) e "Excluir" (em vermelho).
  - Exibição do total das despesas atualizado em tempo real.
- Interface amigável, limpa e intuitiva.
