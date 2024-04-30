import {Router} from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/usersControllers.js";

const userRoutes = Router();

// GET
//
userRoutes.get('/users', getUsers);

userRoutes.get('/users/:id', getUser);

// POST
//
userRoutes.post('/users', createUser);

// PUT
//
userRoutes.put('/users/:id', updateUser);

// DELETE
//
userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;