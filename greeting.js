/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
  var firstword = "";
  var pronoun = "";
  switch (gender){
      case 'male':
        firstword=greetingWords[0];
        pronoun=prefixes[1];
        break;
        case 'female':
        firstword=greetingWords[1];
        pronoun=prefixes[2];
         break;
        default:
        firstword=greetingWords[2];
        pronoun=prefixes[3];
  }
  firstword=firstword.substring(0,1).toUpperCase()+firstword.substring(1).toLowerCase();
  if (isSelf == true) pronoun=prefixes[0];
  return `${firstword} ${pronoun} name is ${name}`;
}
console.log(greeting('Nick','male',true));
console.log(greeting('Adam','male',false));
console.log(greeting('Susan','female',false));
console.log(greeting('Jose','nonbinary',false));