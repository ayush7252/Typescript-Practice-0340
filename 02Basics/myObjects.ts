const User = {
    name: "Ayush",
    email : "user@example.com",
    isActive : true
}

// function createUser({name: string, isPaid: boolean}){

// }
let newuser = {name: "Ayush", isPaid: true, email: "user@example.com"}

// createUser({name: "Ayush", isPaid: true, email: "user@example.com"})
// createUser(newuser)


// Type alias

// type Point= {
//     x: number,
//     y: number,
// }

// function printCord(pt: Point) {
//      console.log("The coordinates x value is " + pt.x);
//      console.log("The coordinates y value is " + pt.y); 
// }

// printCord({x: 10, y: 20})

// readonly keyword

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    creditCard ?: number; 
}

const myUser : User = {
    _id : "123",
    name : "Ayush",
    email: "user@example.com",
    isActive: true
}


export{}