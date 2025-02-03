

let url = "https://kea-alt-del.dk/t7/api/categories";

const catlist = document.querySelector("#categorylist")


function showCats(data) {

    const markup = data
    .map(
      (category) => `
       <a href="productlist.html?category=${category.category}" class="frontpagecat">
            <p>${category.category}</p>
        </a>`
    )
    .join(``);
  catlist.innerHTML = markup;
}
function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => showCats(data));
  }


  
  getData();