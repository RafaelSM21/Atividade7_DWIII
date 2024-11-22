import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Descrição é obrigatória."],
    maxlength: [100, "Descrição deve ter no máximo 100 caracteres."],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "Valor é obrigatório."],
    min: [0, "O valor não pode ser negativo."],
  },
  date: {
    type: Date,
    default: Date.now, // Data atual como valor padrão
  },
});

const Expense = mongoose.model("Expense", ExpenseSchema);
export default Expense;
