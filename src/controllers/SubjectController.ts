import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController { 
  async create(req: Request, res: Response) {
    // Criar disciplina
    const { name } = req.body;

    if (!name) 
      return res.status(400).json({ message : "O nome é obrigatório!" })
    
    try {
      const newSubject = SubjectRepository.create({ name });
      await SubjectRepository.save(newSubject);
      
      return res.status(201).json(newSubject);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error!" });
    }
  }
}