import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video";

export const VideoRepository = AppDataSource.getRepository(Video);