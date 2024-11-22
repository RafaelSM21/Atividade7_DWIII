import { Router, Request, Response } from "express";
import expenseRoutes from './expenseRoutes';

const routes = Router();

// Rotas de despesas
routes.use("/expense", expenseRoutes);

// Middleware para rotas desconhecidas
routes.use("*", (_: Request, res: Response) => {
    res.status(404).json({ error: "Requisição desconhecida" });
});

export default routes;
