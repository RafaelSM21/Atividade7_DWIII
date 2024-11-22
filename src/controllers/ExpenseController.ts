import { Request, Response, NextFunction } from "express";
import Expense from "../models/Expense";

class ExpenseController {
    // Create
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { description, amount, date } = req.body;
        try {
            const document = new Expense({ description, amount, date });
            const response = await document.save();
            res.json(response);
        } catch (error: any) {
            next(error); // Passa o erro para o middleware de tratamento de erros
        }
    }

    // List
    public async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const objects = await Expense.find().sort({ date: -1 });
            res.json(objects);
        } catch (error: any) {
            next(error);
        }
    }

    // Delete
    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id: _id } = req.body;
        try {
            const object = await Expense.findByIdAndDelete(_id);
            if (object) {
                res.json({ message: "Despesa excluída com sucesso!" });
            } else {
                res.status(404).json({ message: "Registro inexistente!" });
            }
        } catch (error: any) {
            next(error);
        }
    }

    // Update
    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id, description, amount, date } = req.body;
        try {
            const document = await Expense.findById(id);
            if (!document) {
                res.status(404).json({ message: "Registro inexistente!" });
                return;
            }
            document.description = description;
            document.amount = amount;
            document.date = date;
            const response = await document.save();
            res.json(response);
        } catch (error: any) {
            next(error);
        }
    }

    // Get Total Expenses
    public async getTotal(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const total = await Expense.aggregate([
                { $group: { _id: null, total: { $sum: "$amount" } } },
            ]);
            res.json({ total: total[0]?.total || 0 });
        } catch (error: any) {
            next(error);
        }
    }
}

export default new ExpenseController();

