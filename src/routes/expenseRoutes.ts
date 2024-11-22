import { Router } from "express";
import controller from "../controllers/ExpenseController";

const routes = Router();

routes.post("/", controller.create.bind(controller));    // Criar uma despesa
routes.get("/", controller.list.bind(controller));      // Listar todas as despesas
routes.put("/", controller.update.bind(controller));    // Atualizar uma despesa
routes.delete("/", controller.delete.bind(controller)); // Excluir uma despesa
routes.get("/total", controller.getTotal.bind(controller)); // Obter o total das despesas

export default routes;
