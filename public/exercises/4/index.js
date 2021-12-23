console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);

const root = document.querySelector("#root");

const stored = window.localStorage.getItem("emailadress");
if (stored) {
  root.innerHTML = /*html*/ `
    <div>You are subscribed!</div>
    `;
} else {
  const form = document.createElement("form");
  root.append(form);

  form.innerHTML = /*html*/ `
    <label>
    Email:
    <input type="email" placeholder="MaxMusterman@web.de" name="email" />
    </label>
    <button type="submit">Subscribe</button>
    `;

  form.addEventListener("submit", event_ => {
    event_.preventDefault();
    const formData = new FormData(event_.target);
    const email = formData.get("email");
    console.log(email);

    if (email) {
      window.localStorage.setItem("emailadress", email);
      root.innerHTML = /*html*/ `
        <div>Thank you for subscribing</div>
      `;
    }
  });
}
