import Container from "typedi";
import { UserController } from "../controllers/user.controller";
import { Request, Response } from "express";

const express = require('express')
const userRoutes = express.Router();

const userController = Container.get(UserController);

userRoutes.use(express.json());

userRoutes.post('/', (req: Request, res: Response) => {
    userController.save(req, res);
});

userRoutes.get('/', (req: Request, res: Response) => {
    userController.findAll(req, res);
});

userRoutes.get('/:userId', (req: Request, res: Response) => {
    userController.findById(req, res);
});

userRoutes.put('/:userId', (req: Request, res: Response) => {
    userController.update(req, res);
});

userRoutes.delete('/:userId', (req: Request, res: Response) => {
    userController.delete(req, res);
});

export default userRoutes;