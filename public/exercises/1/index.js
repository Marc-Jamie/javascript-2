import html from "/static/scripts/html.js";
import css from "/static/scripts/css.js";

console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"

4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

// 1.
const element = document.querySelector("#root");
//const h1 = document.createElement("h1");
//element.append(h1);
//h1.innerHTML = "It works!";
// 2.
//h1.className = "main-headLine";
//function

element.innerHTML =
  /*html*/
  `
<h1 class= "main-headline">
It works ! 
</h1>
`;
// 3.
const head = document.querySelector("head");
//Wird überschrieben (55)
// head.innerHTML =
//   /*html*/
//   `
// <style id="main-style">
// </style>
// `;
// 4.
const mainheadlinestyles = css`
  .main-headline {
    color: blue;
  }
`;
const style = html`
  <style id="main-style">
    ${mainheadlinestyles}
  </style>
`;
console.log(style);
head.innerHTML += style;

//React:
// function Square(props) {
//     return (
//       <button className="square">
//         {props.value}
//       </button>
//     );
//   }

//Umgebaut in JS:
function Square(props) {
  return `
    <button class="square">
      ${props.value}
    </button>
    `;
}
