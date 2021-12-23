console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

const b = ["Hallo, wie geht es dir", "b", "c", "d", "e", "f", "g"].map(function (char) {
    return {
        original: char,
         uppercase: char.toUpperCase(),
         lowercase: char.toLowerCase(),
         array: char.split(""),
         fancy: char.split("").join("*")
    };
  });
console.log(b);

const randomNumber n => Math.round(Math.random() * n)

const namen = ["Julien", "Peter", "Hannes"];

const people = Array.from({length: 5}).map(person =>{
    return {
        firstName: 
    }
});

