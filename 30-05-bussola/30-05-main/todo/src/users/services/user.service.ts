import userModel from '../schemas/user.schemas'
import { userType } from "../types/user.type";

class userService {
    async create(user: userType){
        const createdUser = await userModel.create(user)
        return createdUser
       } 
    
       async findAll() {
          const foundUsers = await userModel.find()
          return foundUsers
        }

       async findById(id: string) {
          const foundUser = await userModel.findById(id)
          return foundUser
        }

        async update(id: string, user: userType) {
          const updatedUser = await userModel.findByIdAndUpdate(id, {
             nameUser: user.nameUser,
             pesoUser: user.pesoUser,
             senhaUser: user.senhaUser,
             emailUser: user.emailUser
          }, {new: true} )
      
          return updatedUser
        }
    
        async delete(id: string) {
          try {
                await userModel.findByIdAndDelete(id)
                return "Usuário removido"
         
              } catch (error) {
              throw new Error(`Erro ao remover o usuário: ${error}`)    
         } 
        }
}

export default new userService()

