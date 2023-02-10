var rect=require('./rectangle.js')

function solveRect(l,b){
    console.log(`solving for rectangle with l = ${l} and b = ${b}` )
    if(l<=0 || b<=0){
        console.log(`Rectangle dimensions should be greater than zero`)
    }
    else{
        console.log(`Perimeter of the rectangle is = ${rect.perimeter(l,b)}`)
        console.log(`Area of the rectangle is = ${rect.area(l,b)}`)
    }
}

solveRect(2,5)