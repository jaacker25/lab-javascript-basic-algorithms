console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1="Jorge";
console.log(`The driver's name is ${hacker1}`);
const hacker2="Carla";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Size=hacker1.length;
const hacker2Size=hacker2.length;

if(hacker1Size>hacker2Size)
console.log(`The driver has the longest name, it has ${hacker1Size} characters.`);
if(hacker1Size<hacker2Size)
console.log(`It seems that the navigator has the longest name, it has ${hacker2Size} characters.`);
if(hacker1Size===hacker2Size)
console.log(`Wow, you both have equally long names, ${hacker1Size} characters!.`);

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(' '))
console.log(hacker2.split('').reverse().join(''));
if(hacker1[0]<hacker2[0])
console.log("The driver's name goes first.");
if(hacker1[0]>hacker2[0])
console.log("Yo, the navigator goes first definitely.");
if(hacker1[0]===hacker2[0])
console.log("What?! You both have the same name?");

//Bonus Time!

//Bonus 1 Search Words
const text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat sit amet mi quis faucibus. Nulla sagittis massa non lectus cursus, a luctus sapien porta. Donec faucibus lacus non velit commodo, et pulvinar orci imperdiet. Morbi cursus tortor sed lacinia malesuada. Fusce sit amet justo a est vulputate accumsan. Aliquam vel vestibulum nunc. Morbi eu semper augue, vitae accumsan mauris. Nulla facilisi. Nullam sed tristique mauris. Nunc aliquet nisl sed lacus sollicitudin, malesuada dapibus dolor varius. Aliquam vitae scelerisque ante. Aenean diam sapien, tempor a nibh sit amet, mattis pretium mi. Nulla auctor ligula dui, sed blandit enim ornare ac. Aliquam lorem lectus, rutrum quis nulla non, imperdiet sodales urna.

Praesent egestas justo erat, et posuere nisl malesuada at. Nullam vitae tortor est. Maecenas bibendum non purus non sagittis. Proin ut placerat tellus. Ut ut neque lacinia dui tempor ornare vel vel nisi. Mauris commodo, quam a scelerisque ullamcorper, eros neque malesuada massa, id lacinia odio ante vel sapien. Donec eu felis consequat, ultricies neque porttitor, convallis neque.

Duis nec vestibulum velit, nec mattis erat. Vivamus faucibus est a lorem facilisis pretium. In in lectus arcu. Donec cursus magna elementum, tristique leo id, volutpat nisl. Aenean porta venenatis nunc nec maximus. Aliquam erat volutpat. Vivamus vehicula nulla ac enim varius dignissim at et lectus. Phasellus a placerat diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam leo lacus, lacinia vel augue id, ullamcorper lobortis dui. Donec non arcu aliquet, aliquet ipsum eu, lacinia nunc. Nulla fringilla id metus et faucibus. Curabitur viverra egestas faucibus. Sed id lacus metus.`;

const founded=text.match(/\w+/g);

console.log(founded.length);

const founded2=text.match(/\bet\b/g);

console.log(founded2.length);

//Bonus 2 Palindrome


const phraseToCheck="No 'x' in Nixon";
let words=phraseToCheck.toLowerCase().match(/\w+/g).join('').split('');

let=palindrome=true;
let j=words.length-1;
for(let i=0;i<words.length;i++){
if(words[i]!==words[j]){
  palindrome=false;
}
j--;
}
if(palindrome){
  console.log("It's a Palindrome!!!")
}else{
  console.log("It's NOT a Palindrome!!!")
}


