const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');
const background = document.querySelector('.big');
const darken = document.querySelectorAll('.darken');

let current = 100;

item2.addEventListener('click', colorChange);
item4.addEventListener('click', colorChange);

item1.addEventListener('click', (e) => modifyBrightness(10));

item5.addEventListener('click', (e) => modifyBrightness(-10));
item3.addEventListener('click', (e) => {
  onOff();
  console.log(item3.textContent);
});

function colorChange() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);
  current = 100;
  return (background.style.backgroundColor = hexColor);
}

function getRandomNumber() {
  let red = Math.floor(Math.random() * hex.length);

  return red;
}

function modifyBrightness(val) {
  current += val;
  // background.style.backgroundColor = `hsl(240, 100%, ${current}%)`;
  if (current > 39 && current < 151) {
    background.style.filter = `brightness(${current}%)`;
  }
}

function onOff() {
  if (item3.textContent === 'OFF') {
    background.style.filter = `brightness(100%)`;
    background.style.backgroundColor = 'black';
    item3.textContent = 'ON';
    darken.forEach((e, index) => {
      e.style.backgroundColor = 'black';
      e.style.color = 'black';
      e.textContent = '';
      e.style.cursor = 'context-menu';
      e.removeEventListener('click', colorChange);
      e.removeEventListener('click', (e) => modifyBrightness(10));
      e.removeEventListener('click', (e) => modifyBrightness(-10));
    });
  } else {
    item3.textContent = 'OFF';

    colorChange();
    darken.forEach((e, index) => {
      e.style.backgroundColor = 'aquamarine';
      e.style.cursor = 'pointer';

      if (index === 1 || index === 2) {
        e.textContent = 'Change color';
        e.addEventListener('click', colorChange);
      }
      if (index === 0) e.textContent = 'Color brighter';
      e.addEventListener('click', (e) => modifyBrightness(10));
      if (index === 3) e.textContent = 'Color dimmer';
      e.addEventListener('click', (e) => modifyBrightness(-10));
    });
  }
}
