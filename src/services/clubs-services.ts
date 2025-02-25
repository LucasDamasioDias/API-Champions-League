import * as repository from "../repositories/clubs-repository";
import * as httpResponse from "../utils/http-helper";

export const getClubService = async () =>{
    const data = await repository.getClubs();
    const response = httpResponse.ok(data);
    return response;
}