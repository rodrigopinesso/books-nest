import statusTask from "../schemas/status.task.enum"

export interface taskType {
    idTask: Number, 
    titleTask: String, 
    descriptionTask: String,
    dateCreationTask: Date, 
    dateEndTask: Date, 
    typeTask: String,
    statusTask: statusTask,
    idUser: Number
}