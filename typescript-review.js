var SUNNY_DAY_MESSAGE = "It is sunny";
var isSunny = true;
var numberSunnyDays = 1;
console.log(SUNNY_DAY_MESSAGE);
function hello(name, isSunny) {
    if (!isSunny)
        return "hi " + name;
    else
        return "hi " + name + "it is sunny";
}
console.log(hello("Nick", isSunny));
