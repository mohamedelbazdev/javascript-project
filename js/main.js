const data = [
  {
    id: 0,
    productName: "CL LEGACY",
    price: 1100,
    img: "1.jpg",
    img_2: "01.jpg",
    img_3: "001.jpg",
    productLink: "1.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 1,
    productName: "CM997HFKD",
    price: 900,
    img: "2.jpg",
    img_2: "02.jpg",
    img_3: "002.jpg",
    productLink: "2.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 2,
    productName: "REEBOK ROYAL",
    price: 1200,
    img: "3.jpg",
    img_2: "03.jpg",
    img_3: "003.jpg",
    productLink: "3.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 3,
    productName: "COURT DOUBLE",
    price: 1400,
    img: "4.jpg",
    img_2: "04.jpg",
    img_3: "004.jpg",
    productLink: "4.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 4,
    productName: "FUTURE RIDER",
    price: 1080,
    img: "5.jpg",
    img_2: "05.png",
    img_3: "005.jpg",
    productLink: "5.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 5,
    productName: "MFCPZBGD",
    price: 890,
    img: "6.jpg",
    img_2: "06.jpg",
    img_3: "006.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "men's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 6,
    productName: "McdfPZBd",
    price: 1450,
    img: "7.jpg",
    img_2: "07.jpg",
    img_3: "007.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 7,
    productName: "FFFPZBGD",
    price: 1150,
    img: "8.jpg",
    img_2: "08.jpg",
    img_3: "008.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 8,
    productName: "QURSZBGD",
    price: 2150,
    img: "9.jpg",
    img_2: "09.jpg",
    img_3: "009.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 9,
    productName: "LSOAABBGD",
    price: 1290,
    img: "10.jpg",
    img_2: "010.jpg",
    img_3: "0010.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 10,
    productName: "NORPZBGD",
    price: 1780,
    img: "11.jpg",
    img_2: "011.jpg",
    img_3: "0011.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
  {
    id: 11,
    productName: "OMDSPGD",
    price: 2150,
    img: "12.jpg",
    img_2: "012.jpg",
    img_3: "0012.jpg",
    productLink: "6.html",
    quantity: 10,
    delievery: "In 3 - 4 days",
    category: "women's Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, cum quam suscipit veritatis nulla.",
    itemInCart: false,
  },
];

let cartList = []; //array to store cart lists

var i;
var detail = document.getElementsByClassName("card-item");
var detailsImg = document.getElementById("details-img");
var smallImg1 = document.getElementById("small-img1");
var smallImg2 = document.getElementById("small-img2");
var smallImg3 = document.getElementById("small-img3");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");
var delievery = document.getElementById("delievery");
var detailDesc = document.getElementById("description");
var detailsPage = document.getElementById("details-page");
var back = document.getElementById("buy");
back.addEventListener("click", refreshPage);
var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("cart");

// click event to display cart page
cart.addEventListener("click", displayCart);

var carts = document.getElementById("carts");

//click events to add items to cart from details page
carts.addEventListener("click", () => addToCart(getId));

var home = document.getElementById("logo");

//click event to hide cart page and return to home page
home.addEventListener("click", hideCart);

//events on dynamically created element to remove items from list
document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach((val) =>
  val.addEventListener("click", function () {
    addToCart(val.parentNode.id);
  })
);

// details function
function handleDetail(e) {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = "../images/products/" + data[getId].img;
  smallImg1.src = "../images/products/" + data[getId].img;
  smallImg2.src = "../images/products/" + data[getId].img_2;
  smallImg3.src = "../images/products/" + data[getId].img_3;
  detailTitle.innerHTML = data[getId].productName;
  detailPrice.innerHTML = "Price : " + data[getId].price + " EG";
  delievery.innerHTML = "Delievery :  " + data[getId].delievery;
  detailDesc.innerHTML = "<h2>Description</h2> " + data[getId].Desc;
}

smallImg1.addEventListener("click", function () {
  detailsImg.src = "../images/products/" + data[getId].img;
});
smallImg2.addEventListener("click", function () {
  detailsImg.src = "../images/products/" + data[getId].img_2;
});
smallImg3.addEventListener("click", function () {
  detailsImg.src = "../images/products/" + data[getId].img_3;
});

// add item to the cart
function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();
    cartCounter();

    alert("item added to your cart");

  } else {
    alert("your item is already there");
  }
  data[id].itemInCart = true;
}

//back to main pageF
function refreshPage() {
  detailsPage.style.display = "none";
}

// hide your cart page
function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

//display your cart page
function displayCart() {
  document.getElementById("main").style.display = "none";
  document.getElementById("details-page").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
  }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;

  var clrNode = document.getElementById("item-body");
  clrNode.innerHTML = "";
  console.log(clrNode.childNodes);
  cartList.map((cart) => {
    var cartCont = document.getElementById("item-body");
    totalAmount = totalAmount + cart.price;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = "./images/products/" + cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = cart.productName;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price + " EGP";
    tempCart.appendChild(listPay);

    var listQuantity = document.createElement("h3");
    listQuantity.setAttribute("class", "quantity");
    listQuantity.innerHTML = "1";
    tempCart.appendChild(listQuantity);

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash ");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
  });
  document.getElementById("total-amount").innerHTML =
    "Total Amount : " + totalAmount + " EGP";
  document.getElementById("total-items").innerHTML =
    "Total Items : " + totalItems;
  document.getElementById("total").style.display = "block";
}

//remove item from the cart
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}

function cartCounter(){

	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.counterItem').textContent = productNumbers+1;
	}else{

	localStorage.setItem('cartNumbers',1);

	console.log(document.querySelector('.counterItem'));
	document.querySelector('.counterItem').textContent = 1;
}
}
//functio to load data when the page loads
function onloadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	document.querySelector('.counterItem').textContent = productNumbers;
}

onloadCartNumbers();











