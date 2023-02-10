const Sequelize=require('sequelize')

module.exports=new Sequelize('sql_demo','postgres','Gaj@7438',{
    host:'localhost',
    dialect:'postgres'
})


