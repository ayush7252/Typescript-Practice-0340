function HaveFun(val : number | string){
    if(typeof val === "string" ){
        return val.toUpperCase()
    }
    return val
}

function HaveFun1(x : Date | string){
    if( x instanceof Date ){
        return x
    }
    return x
}


interface Circle{
    kind : "circle",
    radius : number
}

interface Square{
    kind : "square",
    side : number
}

interface Rectangle{
    kind : "rectangle",
    width : number,
    height : number
}

  type Shape = Circle | Square | Rectangle

  function getArea(shape : Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.width * shape.height
        default:
            const defaultArea : never = shape
            return defaultArea 
    } 
  }

function getTrueShape(shape : Shape){
    if(shape.kind === "circle"){
         
    }
}