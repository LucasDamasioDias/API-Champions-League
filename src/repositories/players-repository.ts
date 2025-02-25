import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
    {id: 1, name: "Messi", club: "Paris Saint German", nationality: "Argentina", position: "Forward", statistics:{
        Overall: 93,
        Pace: 85,
        Shooting: 94,
        Passing: 91,
        Dribbling: 95,
        Defending: 38,
        Physical: 65
    }},
    {id: 2, name: "Pelé", club: "Santos", nationality: "Brazil", position: "Forward", statistics:{
        Overall: 99,
        Pace: 99,
        Shooting: 99,
        Passing: 99,
        Dribbling: 99,
        Defending: 99,
        Physical: 99
    }},
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
}

export const deletePlayer = async (id: number) => {
    const index = dataBase.findIndex(p => p.id === id);
    if(index !== -1){
        dataBase.splice(index, 1);
        return true;
    }   
    return false;
}

export const updatePlayer = async (id: number, statistics: StatisticsModel):Promise<PlayerModel> => {
    const index = dataBase.findIndex(p => p.id === id);
    if(index !== -1){
        dataBase[index].statistics = statistics; 
    }   
    return dataBase[index];
}