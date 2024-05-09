// Iteration 1: Names and Input

const hacker1 = "Pauliii";
const hacker2 = "APaul";

console.log("The drivers name is " + hacker1);
console.log("The navigator name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  hacker1.length === hacker2.length;
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  const upperCasedLetter = hacker1[i].toUpperCase() + " ";
  spacedName = spacedName + upperCasedLetter;
}
console.log("spaced name", spacedName.trim());

let hackerReversed = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  hackerReversed += hacker1[i];
}
console.log("reversed ", hackerReversed);

// 3.3

//this would check if the names are the same
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  }
}

//bonus time!
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit nec lectus quis mollis. Nam ante orci, suscipit sed euismod bibendum, luctus vitae tellus. Pellentesque dictum augue convallis augue imperdiet, quis eleifend enim scelerisque. Vestibulum eu ex ut justo venenatis congue non vitae augue. Nam ornare ultrices urna vitae consequat. Pellentesque pharetra rhoncus est egestas lobortis. Etiam eu elit quis turpis rutrum dapibus. Aliquam erat volutpat. Ut quis ex at velit tempus pharetra in dapibus lorem. Integer maximus ipsum non ligula laoreet, tristique fermentum turpis sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed pharetra tellus, ut maximus velit. Nulla velit risus, auctor nec diam ac, sollicitudin ultrices felis. Integer sed orci sed risus tincidunt iaculis at a mi. Etiam ultricies dapibus diam sed ullamcorper.
Vivamus ut aliquet lectus, in sollicitudin risus. Quisque porta dui id molestie facilisis. Sed quis posuere tellus, in interdum nunc. Suspendisse gravida nibh elit, in mattis nisi gravida sed. Integer tincidunt pretium tellus id vehicula. Mauris feugiat laoreet erat ac sodales. Quisque sed neque vitae risus dignissim semper vitae vel justo. Fusce condimentum convallis egestas. Duis eu efficitur ligula. Vestibulum id neque sit amet mi aliquet efficitur. Nam vel dictum lacus.
Integer tincidunt luctus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem leo, euismod vitae pellentesque nec, malesuada sit amet tellus. Nunc ornare, nibh a finibus mollis, ex dolor mattis quam, vitae semper elit risus vitae tortor. Aliquam tristique quis quam ac malesuada. Quisque porttitor in leo eu laoreet. Morbi faucibus iaculis tellus, sit amet fringilla mi fermentum in. Sed sed augue nulla. Sed faucibus erat et nunc malesuada maximus. Vestibulum mollis, lacus sit amet scelerisque cursus, libero lacus iaculis nisl, sed imperdiet justo massa nec ex. Donec ultrices posuere justo nec lobortis. Nulla lacus turpis, elementum at rutrum a, feugiat eu metus. In porta mollis tristique.`;
const shortText = "hello woetrld hi test test et ";
function countWords(longText) {
  return longText.split(" ").length;
}
console.log(countWords(shortText));

// et example
let etCount = 0;
for (let i = 0; i < shortText.length; i++) {
  if (
    shortText[i] === "e" &&
    shortText[i + 1] === "t" &&
    shortText[i - 1] === " " &&
    shortText[i + 2] === " "
  ) {
    etCount++;
  }
}
console.log("our et count ", etCount);

console.log(longText.split(" "));
