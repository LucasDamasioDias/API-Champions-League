import { getClubService } from "../services/clubs-services";
import {Request, Response} from "express";

export const getClubs = async (req: Request, res:Response) =>{
    const httpResponse = await getClubService();    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}