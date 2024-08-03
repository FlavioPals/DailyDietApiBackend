
import{Request, Response} from 'express'
import { knex } from '../../../Database/setupKnex'

class EditUserUseCase{

    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const { name, email, password } = request.body
        if(!name && !email && !password){
            return response.status(400).json({message:'No data to update'})
        }
    
        try{
            const updatedUser = await knex('users').where('id', id).update({
                name:name,
                email:email,
                password:password,
                updated_at: knex.fn.now()
            })
            return response.json({message:'User updated', updatedUser})
    
        }catch(error){
            throw error
        }
    }
}

export {EditUserUseCase}



 
  


