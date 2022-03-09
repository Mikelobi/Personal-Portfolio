// Get the modal
const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');
const btn2 = document.getElementById('myBtn2');
const btn3 = document.getElementById('myBtn3');
const btn4 = document.getElementById('myBtn4');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close-work')[0];
const span2 = document.getElementsByClassName('close-work2')[0];
const span3 = document.getElementsByClassName('close-work3')[0];
const span4 = document.getElementsByClassName('close-work4')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};
btn2.onclick = function () {
  modal2.style.display = 'block';
};
btn3.onclick = function () {
  modal2.style.display = 'block';
};
btn4.onclick = function () {
  modal2.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
span2.onclick = function () {
  modal2.style.display = 'none';
};
span3.onclick = function () {
  modal3.style.display = 'none';
};
span4.onclick = function () {
  modal4.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
};
