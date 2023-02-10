const { Model } = require('sequelize')
const Sequelize=require('sequelize')
const db=require('../config/database')

const USERS=db.define('sequelize_Tutor',{
    username:{
       type:Sequelize.STRING,
       allowNull:false
    },
    password:{
      type:Sequelize.STRING,
      allowNull:false
    },
    age:{
     type:Sequelize.INTEGER,
     allowNull:false
    },
},{
    freezeTableName:true
})

module.exports=USERS