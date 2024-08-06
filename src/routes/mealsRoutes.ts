import {Router} from 'express'
import { CreateMealUseCase } from './UseCases/MealsUseCases/CreateMealUseCase'
import { GetAllMealsUseCase } from './UseCases/MealsUseCases/GetAllMealsUseCase'
import { GetSpecificMealUseCase } from './UseCases/MealsUseCases/GetSpecificMealUseCase'
import { EditMealUseCase } from './UseCases/MealsUseCases/EditMealUseCase'
import { DeleteMealUseCase } from './UseCases/MealsUseCases/DeleteMealUseCase'

const mealsRoutes = Router()
const createMealController = new CreateMealUseCase()
const getAllMealsController = new GetAllMealsUseCase()
const getSpecificMealController = new GetSpecificMealUseCase()
const editMealController = new EditMealUseCase()
const deleteMealController = new DeleteMealUseCase()

mealsRoutes.post('/:id', createMealController.handle)
mealsRoutes.get('/', getAllMealsController.handle)
mealsRoutes.get('/:id', getSpecificMealController.handle)
mealsRoutes.patch('/:id', editMealController.handle)
mealsRoutes.delete('/:id', deleteMealController.handle)





export {mealsRoutes}
