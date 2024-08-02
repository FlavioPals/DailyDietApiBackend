
import { Router } from "express";
import {knex} from '../Database/setupKnex'
import { z } from "zod";
import { CreateUserUseCase } from "./UseCases/UsersUseCases/CreateUserUseCase";
import { GetAllUsersUseCase } from "./UseCases/UsersUseCases/GetAllUsersUseCase";
import { GetSpecificUserUseCase } from "./UseCases/UsersUseCases/GetSpecificUserUseCase";

const userRoutes = Router();
const createUserController = new CreateUserUseCase()
const getAllUsersController = new GetAllUsersUseCase()
const getspecificUserController = new GetSpecificUserUseCase()



userRoutes.get('/', getAllUsersController.handle)

userRoutes.post('/', createUserController.handle)

userRoutes.get('/:id', getspecificUserController.handle)



export { userRoutes }