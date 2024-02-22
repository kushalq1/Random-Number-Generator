let myH1 = document.getElementById("myH1");
let myBtn = document.getElementById("myBtn");

let random;
let min = 1;
let max = 6;

myBtn.onclick = () => {
  random = Math.floor(Math.random() * 6) + 1;
  myH1.textContent = random;
};
