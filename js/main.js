/* MENU */
let menu = document.querySelector(".btn-group-vertical");
menu.style.flexDirection = "row";
menu.style.gap = "5px";

let menuButtons = document.querySelectorAll(".btn-group-vertical .btn");
menuButtons.forEach(button => {
  button.style.borderRadius = '5px';
});

let menuSecondButton = document.querySelector(".btn-group-vertical .btn:nth-child(2)");
menuSecondButton.style.minWidth = '120px';
/* MENU */

/* LIST */
let list = document.querySelector(".list-group");

let activeListItem = document.querySelector(".list-group .list-group-item:nth-child(1)");
activeListItem.classList.remove("active");

let listItem1 = document.createElement('li');
listItem1.textContent = 'Quarto Item';
listItem1.classList.add('list-group-item');
listItem1.classList.add('active');
list.appendChild(listItem1);

let listItem2 = document.createElement('li');
listItem2.textContent = 'Quinto Item';
listItem2.classList.add('list-group-item');
list.appendChild(listItem2);
/* LIST */

/* HEADER */
let header = document.querySelector(".jumbotron");
header.style.backgroundColor = "var(--gray)";
header.style.color = "var(--white)";
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.alignItems = "flex-end";


let headerHorizontalLine = document.querySelector(".jumbotron hr");
headerHorizontalLine.style.width = "100%";

let headerText = document.querySelector(".jumbotron p:nth-of-type(2)");
headerText.style.textAlign = "end";

let headerButton = document.querySelector(".jumbotron .btn");
headerButton.style.backgroundColor = "var(--green)";
/* HEADER */

/* CARDS */
let cards = document.querySelectorAll('.row .col-lg-3');

cards[0].style.order = "2";
cards[1].style.order = "4";
cards[2].style.order = "3";
cards[3].style.order = "1";

let cardButton = document.querySelector(".row .col-lg-3:nth-of-type(2) .btn");
cardButton.style.backgroundColor = "var(--green)";
/* CARDS */