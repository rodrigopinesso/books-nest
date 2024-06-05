import express from "express";
import mongoose from "mongoose";
import { categoryRoutes } from "./categoryRoutes";
import { taskRoutes } from "./taskRoutes";
import { userRoutes } from "./userRoutes";
 
class App {
    public express: express.Application

    constructor () {
        this.express = express()
        this.middleware()
        this.database()
    }

    public middleware () {
        this.express.use(express.json)
    }

    public async database () {
        try {
           await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
           console.log ("Conectado a base de dados")
        } catch (error) {
            console.error ("Erro ao conectar")
        }
    }

    public userRoutes () {
        this.express.use (userRoutes)
    }

    public taskRoutes () {
        this.express.use (taskRoutes)
    }

    public categoryRoutes() {
        this.express.use (categoryRoutes)
    }
}

export default new App().express

