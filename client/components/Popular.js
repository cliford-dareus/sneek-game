



export default function Popular(popular){

    return `  
        <div class="showcase__rigth">
            <p class="showcase__header__title">Popular Games</p>

            ${ popular.map(( game => {
                return`
                    <div class="showcase__rigth__content">
                        <div class="content__item">
                            <p>${game.name}</p>
                            <p>${game.genre[0]}, ${game.genre[1]}</p>
                            <p>${game.rating}</p>
                        </div>
                     </div>
                `
            })).join('')}
        </div>
    `
}