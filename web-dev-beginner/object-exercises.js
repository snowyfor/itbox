/*
(1)
> Create a function to convert this array to object
let buah = ["Durian", 75000, true]
> result:
{
    type : "Durian",
    price : 75000,
    delicious : true
}

(2)
> Make this profile fulfill the invoked method
Name : caca
Weight : 45kg
Height : 155cm
Hobi : Watching, Eating
> invoked method
caca.mentionHobby();
> result (when we call the above method)
Caca's hobby:
1. Watching
2. Eating
*/
 
// 1
function changeToObject(array) {
    let result = {};
    result.jenis = array[0];
    result.harga = array[1];
    result.enak = array[2];
    return result;
}
console.log(changeToObject(["Durian", 75000, true]));
// 2
let caca = {
    name : "Caca",
    weight : "45kg",
    height : "155cm",
    hobby : ["Watching", "Eating"],
    mentionHobby : function() {
        console.log("Caca's hobby:");
        for(let i = 0; i < this.hobby.length; i++) {
            console.log(i+1 + ". " + this.hobby[i]);
        }
    }
}
caca.mentionHobby();