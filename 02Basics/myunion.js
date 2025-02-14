var score = 44;
score = "55";
var newUser = {
    name: "Ayush",
    id: 123
};
// function getDBId(id: number | string){
//     // making API calls
//     console.log(`DB Id is: ${id}`);
// }
getDBId(3);
getDBId("3");
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data1 = ["1", "4"];
var data3 = ["1", "4"];
var data4 = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "aisle";
//  seatAllotment = "crew"
