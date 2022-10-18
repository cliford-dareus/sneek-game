



export default function Card (result, title){
    console.log(result)
    return `
    ${result.length > 0 ?
        `<div class="collection__card">
            ${ result.slice(0,4).map((card, index) => {
                return `<div class="collection__card-item-${index}">
                    <img src=${card.imageURL} />
                </div>`
            }).join('')} 
            <div class=collection__card__card-item-5>
                <h3>${title}</h3>
            </div>
        </div> ` : ''}`
};




// createdAt
// : 
// "2022-09-18T18:49:30.274Z"
// featured
// : 
// false
// genre
// : 
// (2) ['action', ' adventure']
// imageURL
// : 
// "https://www.nme.com/wp-content/uploads/2021/09/God-of-War-Ragnarok-2-1392x884.jpg"
// name
// : 
// "God of War: Ragnarok"
// rating
// : 
// 5
// release_date
// : 
// "2022-11-09T05:00:00.000Z"
// __v
// : 
// 0
// _collection
// : 
// "gameoftheyear"
// _id
// : 
// "6327691d17c85578cf4e84b3"
