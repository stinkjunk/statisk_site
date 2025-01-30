let something = document.querySelector(".whatever");

fetch("https://kea-alt-del.dk/t7/api/products/665")
.then(response => response.json())
.then(data => {
    something.innerHtml = "...";
    
})
