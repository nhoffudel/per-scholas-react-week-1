
console.log(SUNNY_DAY_MESSAGE);
function hello(name: string, isSunny: boolean){
    if (!isSunny) return "hello " + name;
    else return "hi "+ name + "it is sunny";
}
console.log(hello("Nick", true));