const productlist = document.querySelector("#productbrowse");
let url = "https://kea-alt-del.dk/t7/api/products";

const mitArray = [];

function showProducts(data) {

    const markup = data
    .map(
      (product) => `<div class="product">
          <a href="produkt.html" class="img">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt=""
            /><br />
          </a>
          <a href="produkt.html" class="producttitle"
            >${product.productdisplayname}</a
          >
          <div class="infocont">
            <div class="info">
              <p class="context">${product.articletype} | ${product.brandname}</p>
              <p class="price">DKK ${product.price},-</p>
              <a href="produkt.html" class="readmore">Read more</a>
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