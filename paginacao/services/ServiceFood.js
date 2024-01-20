const Food = require('../models/Food')

function save(name,price,url,availability){
    var food = Food.create({
        name:name,
        price:price,
        url:url,
        availability:availability
    })
    return food;
}

function getAll(){
    var foods = Food.findAll();
    return foods;
}
function getFoodPage(page,limit){
    var foods = Food.findAll({
        offset: (page-1) * limit,
        limit:limit
    })
    return foods
}

module.exports = {save,getAll,getFoodPage}

