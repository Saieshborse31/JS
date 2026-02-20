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

# Project-2 solution


``` javascript
const form = document.querySelector('form');

//This usecase will give you an empty string because it immediately loades whethe site loads.
// const h = parseInt(document.querySelector('#height'.value));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const r = document.querySelector('#results');

  if (h === '' || h < 0 || isNaN(h)) {
    r.innerHTML = `Please give appropriate number ${h}`;
  } else if (w === '' || w < 0 || isNaN(w)) {
    w.innerHTML = `Please give appropriate number ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    // show results
    const U = `<span> Under Weight </span>`;
    const N = `<span> Normal Range </span>`;
    const O = `<span> Over Weight </span>`;
    

    if (bmi <= 18.6) {
      r.innerHTML = `<span> Your BMI is : ${bmi} and you are ${U} </span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      r.innerHTML = `<span> Your BMI is : ${bmi} and you are in ${N} </span>`;
    } else if(bmi >= 24.9){
      r.innerHTML = `<span> Your BMI is : ${bmi} and you are ${O} </span>`;
    }
  }
});


```