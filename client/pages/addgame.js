import view from "../UTILS/view.js";
import displayError from "../UTILS/notification.js";


export default async function AddGame(){
    view.innerHTML =` 
    <div class="container">
        <div class="flex">
            <div>
                <form class="register__form addGame__form flex">
                    <label for="gamename">Game Name</label>
                    <input type="text" id="gamename" name="gamename">
                    <label for="genre">Genres</label>
                    <input type="text" id="genre" name="genre">
                    <label for="image">Image</label>
                    <input type="text" id="imageURL" name="image">
                    <label for="rating">Rating</label>
                    <input type="text" id="rating" name="rating">
                    <label for="releaseDate">Release Date</label>
                    <input type="text" id="releaseDate" name="releaseDate">
                    <label for="collectionname">Collection</label>
                    <select>
                        <option value="">--Choose a collection--</option>
                        <option value="gameoftheyear">game of the year</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <button type="submit" class="btn register__form__btn">Sign up</button>
                </form>
                <div class="error__container"></div>
            </div>

            <div>
                <img src="../client/asset/God_of_War_4.jpeg" />
            </div>
        </div>
    </div>
    `

    document.querySelector('.addGame__form').addEventListener('submit', handleSubmit);
};

const errorNotification = document.querySelector('.error__container');

async function handleSubmit (e){
    e.preventDefault();
    const path = e.target

    const userInput = {
        name : path[0].value,
        genre : path[1].value.split(','),
        imageURL : path[2].value,
        rating: path[3].value,
        release_date: path[4].value,
        _collection: path[5].value
    }
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/v1/games/static', userInput);
        displayError(data.msg, errorNotification);
    } catch (error) {
        console.log(error);
        displayError(error, errorNotification);
    }
};