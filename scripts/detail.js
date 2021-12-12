let form1 = document.getElementById("form");
let adult, nameOfCus, fromDate, toDate, totalPrice, priceToDisplay;
var calculateTotalPrice = function () {
  let form = document.getElementById("form");
  let adult = document.getElementById("adult").value;
  let name = document.getElementById("name").value;
  let fromDate = document.getElementById("fromDate").valueAsNumber;
  let toDate = document.getElementById("toDate").valueAsNumber;
  let totalPrice = document.getElementById("price");

  let price = 1000;
  let toDateEl = document.getElementById("toDate");
  let fromDateEl = document.getElementById("fromDate");

  toDateEl.min = fromDateEl.value;
  if (
    adult >= 1 &&
    name != "" &&
    fromDate > 0 &&
    toDate > 0 &&
    toDate > fromDate
  ) {
    let days = (toDate - fromDate) / 86400000;
    let priceToDisplay = price * adult * days;
    totalPrice.value = "Rs. " + priceToDisplay;
  }
};

form1.addEventListener("input", calculateTotalPrice);
const rating = async function (rating) {
  let ratingVal = Number.parseFloat(rating) * 10;
  let rem = ratingVal % 10;
  let quotient = Math.floor(ratingVal / 10);
  let ratingHtml = "";
  let html = `<span class="fa fa-star checked"></span>`;
  for (let i = 0; i < quotient; i++) {
    ratingHtml = ratingHtml + html;
  }
  if (rem !== 0) {
    ratingHtml += `<span class="fa fa-star-half-o checked"></span>`;
  }
  return ratingHtml;
};

const amenities = async function (amenitiesObj) {
  let html = "";
  let key = "";
  let replacedKey = "";
  let finalKey = "";
  for (let y = 0; y < 10; y++) {
    key = amenitiesObj[y].key;
    replacedKey = key.replaceAll("_", " ");
    finalKey = replacedKey[0].toUpperCase() + replacedKey.slice(1);
    html = html + `<li>${finalKey}</li>`;
  }
  return html;
};