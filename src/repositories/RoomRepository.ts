import { AppDataSource } from "../data-source";
import { Room } from "../entities/Room";

export const RoomRepository = AppDataSource.getRepository(Room);