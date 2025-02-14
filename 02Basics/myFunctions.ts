
function addTwo(num : number){
    return num + 2;
}
function getupper( val : string){
    return val.toUpperCase();
}

function signUpUser(name : string , email: string, password: boolean ){

}

let loginUser = (name:string, email:string, isPaid: boolean = false)=>{}
   
addTwo(4);
 
getupper("Ayush")
signUpUser("Ayush","ayush@gmail.com",false)
loginUser("A", "a@gmail.com")

const gethello = (s : string) : string=>{
    return "";
}

function handleError(error : string) : never{
    throw new Error(error);
}



export{}