const sellout = document.querySelector("input#sellout");
const cheapskate = document.querySelector("input#cheapskate");
const discount = document.querySelector("span.discount");
const soldout = document.querySelector(".soldout");

function toggleSoldOut() {
    soldout.classList.toggle("active")

}

function toggleDiscount() {
    discount.classList.toggle("active")

}
sellout.addEventListener("click", toggleSoldOut)
cheapskate.addEventListener("click", toggleDiscount)


