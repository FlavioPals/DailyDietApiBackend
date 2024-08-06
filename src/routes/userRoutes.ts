
import { Router } from "express";
import { CreateUserUseCase } from "./UseCases/UsersUseCases/CreateUserUseCase";
import { GetAllUsersUseCase } from "./UseCases/UsersUseCases/GetAllUsersUseCase";
import { GetSpecificUserUseCase } from "./UseCases/UsersUseCases/GetSpecificUserUseCase";
import { EditUserUseCase } from "./UseCases/UsersUseCases/EditUserUseCase";
import { deleteUserUseCase } from "./UseCases/UsersUseCases/DeleteUserUseCase";

const userRoutes = Router();
const createUserController = new CreateUserUseCase()
const getAllUsersController = new GetAllUsersUseCase()
const getspecificUserController = new GetSpecificUserUseCase()
const editUserController = new EditUserUseCase()
const deleteUserController = new deleteUserUseCase()

userRoutes.get('/', getAllUsersController.handle)
userRoutes.post('/', createUserController.handle)
userRoutes.get('/:id', getspecificUserController.handle)
userRoutes.patch('/:id', editUserController.handle)
userRoutes.delete('/:id', deleteUserController.handle)


export { userRoutes }