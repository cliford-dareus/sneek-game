import Featured from "../components/featured.js";
import Popular from "../components/Popular.js";
import view from "../UTILS/view.js";

let count = 0;
let featuredLength = 0;

export default async function Home (path) {
    const result = await getFeatured();
    let featured = []
    let popular = []

    if(result){
        featured = result.filter(game => game.featured === false);
        popular = result.filter(game => game.rating === 5);
        featuredLength = featured.length;
    }
    
    view.innerHTML = `
    <div class="container">
    <div class="main__content">
        <div class="showcase__content flex">

            ${ Featured(featured, count)}
            ${ Popular(popular) }

        </div>

        <div class="upcoming__content flex">
            <div class="content__card card__one">
                <p class="upcoming__card__title">Upcoming Games</p>
            </div>
            <div class="content__card">
                <p class="content__card__title">PlayStatipn</p>
                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>

                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>

                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
            <div class="content__card">
                <p class="content__card__title">X-box</p>
                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    `
};

async function getFeatured(){
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/games/static`);
        return data.game
    } catch (error) {
        console.log(error);
    }
};

