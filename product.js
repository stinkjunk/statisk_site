const productinfo = document.querySelector("#productpage");
const pageID = "" + new URLSearchParams(window.location.search).get("ID");
window.onload = loadPage;
function loadPage() {
    let bio = "";

  fetch("https://kea-alt-del.dk/t7/api/products/" + pageID)
    .then((response) => response.json())
    .then((data) => {
        

        if (data.brandbio != null) {
            bio = `<p>${data.brandbio}</p>`
        }
        


        productinfo.innerHTML = `
    <p>
          <a href="index.html">Home</a> > <a href="index.html">Brands</a> >
          <a href="produktliste.html">${data.brandname}</a> > ${data.productdisplayname}
          Neck Jersey
        </p>
        <div class="productpage">
          <div class="productimage">
            <div class="soldout ${data.soldout && "active"}">
              <p>UDSOLGT</p>
            </div>
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
              alt="${data.productdisplayname}"
              title="${data.productdisplayname}"
            />
          </div>

          <div class="productinfo">
            <p class="context">${data.articletype} | ${data.brandname}</p>
            <h2>${data.productdisplayname}</h2>
            <p class="oldprice ${data.discount && "active"}">DKK ${(data.price / (1 - data.discount / 100)).toFixed(0)}.-</p>
            <p class="price">DKK ${data.price},- <span class="discount ${data.discount && "active"}"> -${data.discount}%</span></p>
            <div class="productdescription">${data.description}</div>
            <h2>${data.brandname}</h2>
            ${bio}
            <div class="select">
              <div class="selecttype">
                <p>Select size:</p>
                <select name="size" id="">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>2XL</option>
                  <option>American</option>
                </select>
              </div>
             
              </div>
              <a href="produkt.html" class="addtobskt">Tilføj til kurven</a>
            </div>
          </div>
        </div>
    `;
      }
    )
    ;
}
//The data consists of roughly 44.000 products with corresponding images
