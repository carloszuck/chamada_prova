import { Router } from "express";
import StudentController from "./app/controllers/StudentController";

const routes: Router = Router();

// Rotas exemplo
routes.post('/students', StudentController.create);
//routes.get('/products', ExampleController.find);
//routes.get('/products/:id', ExampleController.findOne);
routes.put('/students/:id', StudentController.updateOne);
routes.delete('/students/:id', StudentController.deleteOne);

export default routes;