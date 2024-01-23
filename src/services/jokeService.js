import axios from 'axios';

const htpp = axios.create({
    baseURL: 'https://icanhazdadjoke.com/'
});


let header = {
    headers: {
        'Accept': 'text/plain'
    }
};

export default {
    getRandomJoke(){
        return htpp.get('', header);
    }
}