# Markdown

## projects
[Click hre](https://stackblitz.com/edit/dom-project-chaiaurcode-xnxopzam?file=1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js)

# Project-1 solution


``` javascript
const grey = document.getElementById('grey');
//adding click eventlistener
grey.addEventListener('click', (event) => {
  grey.style.backgroundColor = 'grey';
  const grey1 = grey.style.backgroundColor; // this will only work if I set the above attribute
  document.body.style.backgroundColor = grey1;
});
const white = document.getElementById('white');
white.addEventListener('click', (event) => {
  white.style.backgroundColor = 'white';
  const white1 = white.style.backgroundColor;
  document.body.style.backgroundColor = white1;
});
const blue = document.getElementById('blue');
blue.addEventListener('click', (event) => {
  blue.style.backgroundColor = 'blue';
  const blue1 = blue.style.backgroundColor;
  document.body.style.backgroundColor = blue1;
});
const yellow = document.getElementById('yellow');
yellow.addEventListener('click', (event) => {
  yellow.style.backgroundColor = 'yellow';
  const yellow1 = yellow.style.backgroundColor;
  document.body.style.backgroundColor = yellow1;
});

```