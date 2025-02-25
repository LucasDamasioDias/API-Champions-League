import { PlayerModel } from "../models/player-model";
import * as repository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () =>{
    const data = await repository.findAllPlayers();
    let response = null;
    if(data){
     response = await httpResponse.ok(data);
    }else{
     response = await httpResponse.noContent();   
    }
    return response;
}

export const getPlayerByIdService = async (id: number) =>{
    const data = await repository.findPlayerById(id);
    let response = null;
    if(data){
     response = await httpResponse.ok(data);
    }else{
     response = await httpResponse.noContent();   
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel) =>{
    let response = null;
    if(Object.keys(player).length !== 0){
        await repository.insertPlayer(player);
        response = await httpResponse.created();
      }else{
        response = await httpResponse.badRequest();   
    }
    return response;
}

export const deletePlayerService = async (id: number) =>{
    let response = null;   
    const isDeleted = await repository.deletePlayer(id);  
    if(isDeleted){
        response = await httpResponse.ok({message: "Deleted successful!"});
    }else{
        response = await httpResponse.badRequest();
    }   
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) =>{
    const data = await repository.updatePlayer(id, statistics);   
    let response = null;
    if(Object.keys(data).length === 0){
        response = await httpResponse.badRequest(); 
    }else{
        response = await httpResponse.ok(data);     
    }      
    return response;
}