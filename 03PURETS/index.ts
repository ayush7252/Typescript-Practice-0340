// class  User{
//     email: string
//     name: string
//     readonly city : string = "Varanasi"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

class User{
    protected _coursCount: number = 1
    readonly city : string = "Varanasi"
    constructor(public email: string, public name: string){
    }

    get getCourseCount(): number {
        return this._coursCount
    }

    set setCourseCount(value: number) {
        if(value <= 1){
            throw new Error("invalid")
        }
        this._coursCount = value
    }


}

class SubUser extends User {
    isFamily: boolean = true
    chanceCount(){
        this._coursCount = 4
    }
}
 
let Shivam = new User("a@a.com","Ayush") 

Shivam.city 
Shivam.email
