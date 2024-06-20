const career = ["Final year Student", "Web Developer", "Intern"];

let careerIndex = 0;
let characterIndex = 0;

const h1Element = document.querySelector("h1");

UpdateText();

function UpdateText() {
  characterIndex++;
  h1Element.innerHTML = `
    I am ${career[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${career[
    careerIndex
  ].slice(0, characterIndex)}
    `;
  if (characterIndex === career[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex == career.length) {
    careerIndex = 0;
  }
  setTimeout(UpdateText, 100);
}
