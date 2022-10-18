



export default function Featured(featured,count){
    return `
        <div class="showcase__left flex center" style="background-Image: url(${featured[count].imageURL || "../asset/God_of_War_4.jpeg"}); background-position: center; background-repeat: no-repeat; background-size: cover">
            <div class="showcase__left__content flex">
                <div class="showcase__left__content__text">
                    <p class="showcase__header__title"># Featured</p>
                    <h1 class="showcase__text">Showcase a collection of new, upcoming and popular Game you are interested in.</h1>
                </div>
                <a href="" class="btn showcase__btn"> Add to collection</a>
            </div>
        </div>
    `
}