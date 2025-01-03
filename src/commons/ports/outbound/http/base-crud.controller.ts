import { Request, Response } from "express"

export interface BaseController{
    save(req: Request, res: Response): void
    findAll(req: Request, res: Response): void
    findById(req: Request, res: Response): void
    update(req: Request, res: Response): void
    delete(req: Request, res: Response): void
}