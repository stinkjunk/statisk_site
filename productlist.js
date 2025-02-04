const productlist = document.querySelector("#productbrowse");
const catfilter = "" + new URLSearchParams(window.location.search).get("category");
console.log("Category: " + catfilter)
const cattitle = document.querySelector("h1")
let url

if (catfilter == "null") {
    url = `https://kea-alt-del.dk/t7/api/products`
    cattitle.textContent = "Products"
} else {url = `https://kea-alt-del.dk/t7/api/products?category=${catfilter}`;
cattitle.textContent = catfilter}



const mitArray = [];

function showProducts(data) {
        let soldOutBool = "";
    let discountBool = "";
    let discount = "";
    
    

    const markup = data
    .map(
      (product) => `<div class="product">
          <a href="product.html?ID=${product.id}" class="img">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt=""
            /><br />
          </a>
          <a href="product.html?ID=${product.id}" class="producttitle"
            >${product.productdisplayname}</a
          >
          <div class="infocont">
            <div class="info">
              <p class="context">${product.articletype} | ${product.brandname}</p>
              <p class="price">DKK ${product.price},-</p>
              <a href="product.html?ID=${product.id}" class="readmore">Read more</a>
            </div>
          </div>
        </div> 
        </div> `
    )
    .join(``);
  productlist.innerHTML = markup;
}
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}

getData();