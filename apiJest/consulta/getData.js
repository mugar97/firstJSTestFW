import fetch from 'node-fetch';

class Data {
    async getAlgo() {
        const responseNewPost = await fetch("https://qa.buzznonprod.com/fi/buzzfi2", {
            method: 'GET'
        });
        return await responseNewPost;
    }
}
export { Data };