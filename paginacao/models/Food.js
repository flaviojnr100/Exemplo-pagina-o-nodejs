const sequelize = require('../config/config');
const {DataTypes} = require('sequelize')


const Food = sequelize.define('food',{
    id:{
        primaryKey:true,
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.DOUBLE
    },
    url:{
        type:DataTypes.STRING
    },
    availability:{
        type:DataTypes.STRING
    }
},{
    timestamps:false,
    tableName:'food'
})

module.exports = Food;




