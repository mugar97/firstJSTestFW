import { Data } from "../consulta/getData.js";

describe('Create a new list and add it to a board', function () {
    it('Add lists in a board', async () => {
        const data = new Data();
        let newBoard = await data.getAlgo();
        let idBoard = await newBoard.json();
        console.log("Board id: " + idBoard.result.fiid);
        expect(newBoard.ok).toBe(true);
    });
});