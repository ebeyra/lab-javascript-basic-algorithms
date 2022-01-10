console.log("I'm ready")

// Iteration 1: Names and Input

let hacker1 = "John"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}

// Iteration 3: Loops

let upperHacker1 = hacker1.toUpperCase();

let spacedHacker1 = ""; 
for (let i = 0; i < (upperHacker1.length); i++) {
  spacedHacker1 += (upperHacker1[i] + " ");
}

console.log(spacedHacker1);

let reverseHacker2 = "";
for (let i = (hacker2.length - 1); i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker2 === hacker1) {
  console.log("What?! You both have the same name?");
}

// Bonus Time!

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

console.log(`The lorem ipsum generator contains ${paragraph.length} characters.`);

let etCount = 0;
for (i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === " " && paragraph[i + 1] === "e" && paragraph[i + 2] === "t" && paragraph[i + 3] === " ") {
    etCount++;
  }
}

console.log(`The word "et" appears ${etCount} times.`);

let phraseToCheck = "A man, a plan, a canal, Panama!";

let palindromeTest = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " " || phraseToCheck[i] === "!" || phraseToCheck[i] === "?" || phraseToCheck[i] === ",") {
    continue;
  }
  palindromeTest += phraseToCheck[i];
}

let reversePalTest = "";
for (let i = (palindromeTest.length - 1); i >= 0; i--) {
  reversePalTest += palindromeTest[i];
}

palindromeTest = palindromeTest.toUpperCase();
reversePalTest = reversePalTest.toUpperCase();

if (palindromeTest === reversePalTest) {
  console.log("It's a palindrome!");
} else {
  console.log("Not a palindrome.");
}