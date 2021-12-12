let imagesTwo = document.getElementById("images2");
let viewMoreButton = document.getElementById("view-more-btn");

viewMoreButton.addEventListener("click", function () {
  if (imagesTwo.dataset.value === "view-less") {
    imagesTwo.dataset.value = "view-more";
    imagesTwo.style.display = "none";
    viewMoreButton.innerHTML = "View More";
  } else {
    imagesTwo.dataset.value = "view-less";
    imagesTwo.style.display = "flex";
    viewMoreButton.innerHTML = "View Less";
  }
});