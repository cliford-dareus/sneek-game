const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../error/index');
const Game =require('../models/games')



const createGame = async ( req, res ) => {
    const game = await Game.create({ ...req.body});

    res.status(StatusCodes.CREATED).json({ game, msg: `Game has been added`})
};

const getAllGame = async ( req, res ) => {
    const game = await Game.find({});

    if(!game){
        throw NotFoundError('No Game Found');
    }

    res.status(StatusCodes.OK).json({ game });
};

const getGame = async ( req, res ) => {
    const { genre, featured, name, ratingFilter, release_date, sort, _collection } = req.query;

    const newObject = {};

    if(name){
        newObject.name = { $regex: name, $options : 'i' };
    }

    if(_collection){
        newObject._collection = {$regex: _collection, $options: 'i'};
    }

    if(featured){
        newObject.featured = featured === 'true'? true : false;
    };

    if(genre){
        newObject.genre = genre;
    };

    if(ratingFilter){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        
        const regEx = /\b(<|=<|=|>=|>)\/b/g;

        let filters = ratingFilter.replace(regEx, (match) => ` -${operatorMap[match]}- `);

        console.log(filters)

        const options = [ 'rating', 'price' ];
        

        filters = filters.split(',').forEach(item => {
            const [field, operator, value ] = item.split('-');
            

            if(options.includes(field)){
                newObject[field] = { [ operator ] : Number(value)}
            }
        });
    }
    let result = Game.find(newObject);

    if(release_date){
        newObject
    }

    if(sort){
        const sortList = sort.split(',').join( );
        result = result.sort(sortList);
    }else{
        result = result.sort('createdAt');
    }

    const game = await result
    res.status(StatusCodes.OK).json({ game });
};


module.exports = {
    createGame,
    getAllGame,
    getGame
};