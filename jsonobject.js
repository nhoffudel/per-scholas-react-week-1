const myinfo={
    name: "Nick",
    birthday : 120795,
    citiesvisited : ["philadelphia","atlanta"],
    human:true,
    planetsvisited:null,
    personalinfo:{favoritefood:"spaghetti"}
};

console.log("My info printed as an object");
console.log(myinfo);
console.log("my info printed as a string");
console.log(JSON.stringify(myinfo));

function sayhi(name, age){
    return `my name is: ${name} and my age is ${age}`;
}
console.log(sayhi("Nick", 25));