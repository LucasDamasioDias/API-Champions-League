export interface PlayerModel{
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics:{
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number,
        Overall: number,
    }
}