import { Request, Response } from "express";
import Student from "../models/Student";

class StudentController {
  // método static para criação do produto
  static async create(req: Request, res: Response) {
    try {
      // cria o aluno
      const created = await Student.create(req.body);

      // retorna OK caso o aluno seja criado
      return res.status(200).json(created);
    } catch (err) {
      // retorna Bad Request caso o ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para atualização do produto
  static async updateOne(req: Request, res: Response) {
    // atualiza
  }

  // método static para remoção do produto
  static async deleteOne(req: Request, res: Response) {
    // deleta
  }

  // método static para listar todos os produtos
  static async find(req: Request, res: Response) {
    // busca todos os itens
  }

  // método static para mostrar um produto
  static async findOne(req: Request, res: Response) {
    // busca um item
  }
}

export default StudentController;