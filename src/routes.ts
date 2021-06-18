import { Router } from "express";
import StudentController from "./app/controllers/StudentController";

const routes: Router = Router();

// Rotas exemplo
routes.post('/create_students', StudentController.create);
routes.get('/students', StudentController.find);
routes.get('/students/:id', StudentController.findOne);
routes.put('/students/:id', StudentController.updateOne);
routes.delete('/del_students/:id', StudentController.deleteOne);

export default routes;