console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
`);

function randomN(n) {
  return Math.round(Math.random() * n);
}

const names = ["Alex", "Jan", "Niko", "Dennis"];

function randomItem(array) {
  const randomIndex = array.length - 1;
  return array[randomN(randomIndex)];
}
const randomName = randomItem(names);
const genderMapping = {
  men: 99,
  women: 99,
  lego: 9,
};
const genders = Object.keys(genderMapping); //["men","women","lego"]
console.log(
  genders,
  Object.values(genderMapping),
  Object.entries(genderMapping) //2-dimensionales array
  //[[key,value],[key,value], ...]
);

const gender = randomItem(genders); //men|women|lego
const maxIndex = genderMapping[gender]; //99|9 (99|99|9)
const randomImageIndex = randomN(maxIndex);

console.log(gender, randomName, genderMapping[gender], randomImageIndex);

const card = document.querySelector("#root");
card.innerHTML +=
  /*html*/
  `
  <div class="card">
<header>
        <h3>
        ${randomName}
        </h3>
        <img src="https://randomuser.me/api/portraits/${gender}/${randomImageIndex}.jpg" alt="Avatar of ${randomName}" />
    </header>
</div>
`;
