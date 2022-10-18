import Home from '../pages/Home.js';
import Register from '../pages/Register.js';
import Collection from '../pages/collection.js';
import AddGame from '../pages/addgame.js';
import { Login } from '../pages/login.js';

const router = new Navigo(null, true, '#');
console.log(router)

export default class RouterHandler {
    constructor(){
        this.createRoute();
    }

    createRoute(){
        const routes = [
            { path: '/', page: Home },
            { path: '/register', page: Register},
            { path: '/login', page: Login},
            { path: '/collection', page: Collection },
            { path: '/addgame', page: AddGame},
        ]

        routes.forEach(({ path , page }) => {
            router.on(path, () => {
                page(path);
            }).resolve();
        })
    }
}
