import view from '../UTILS/view.js';
import Card from '../components/Card.js';
import { isLogin } from './login.js';
// import { Login } from './login.js';

export default async function Collection (path){
    const result = await getGames();
    const gameOfTheYear = result.filter(item => item._collection === 'gameoftheyear');
    const upcoming = result.filter(item => item._collection === 'upcoming');

    view.innerHTML = !isLogin? window.location.replace('#/login'):
    `<div class="container">
        <div class="collection__container">
            <div class="collection__header flex center">
                <h2>Popular Collections</h2>
                <a href="#/addgame" >Add Game</a>
            </div>
            
            <div class="collection__card__container flex">
                ${Card(gameOfTheYear, 'Game of The Year')}
                ${Card(upcoming, 'Game of The Year')}
            </div>

            <div class="collection__header">
                <h2>Your Collections</h2>
            </div>

            <div class="collection__card__container flex">

            </div>
        </div>
    </div>
    `
};

async function getGames() {
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/games/static`)
        return data.game
    } catch (error) {
        console.log(error)
    }
}
