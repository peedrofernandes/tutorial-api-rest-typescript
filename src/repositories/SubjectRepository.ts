import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

export const SubjectRepository = AppDataSource.getRepository(Subject);