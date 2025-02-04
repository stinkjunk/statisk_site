const productinfo = document.querySelector("#productpage");
const pageID = "" + new URLSearchParams(window.location.search).get("ID");
window.onload = loadPage;
function loadPage() {
    let soldOutBool = "";
    let discountBool = "";
    let discount = "";
    let bio = "";

  fetch("https://kea-alt-del.dk/t7/api/products/" + pageID)
    .then((response) => response.json())
    .then((data) => {
        if (data.discount != null) {
          discount = data.discount;
          discountBool = "active";
        }
        if (data.soldout == 1) {
          soldOutBool = "active";
        }

        if (data.brandbio != null) {
            bio = `<p>${data.brandbio}</p>`
        }
        

        console.log(discount + ", " + discountBool);

        productinfo.innerHTML = `
    <p>
          <a href="index.html">Home</a> > <a href="index.html">Brands</a> >
          <a href="produktliste.html">${data.brandname}</a> > ${data.productdisplayname}
          Neck Jersey
        </p>
        <div class="productpage">
          <div class="productimage">
            <div class="soldout ${soldOutBool}">
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
            <p class="price">DKK ${data.price},- <span class="discount ${discountBool}"> -${discount}%</span></p>
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
