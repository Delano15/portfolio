const loaderDiv = document.querySelector(".loader");

setTimeout(() => {
  loaderDiv.style.opacity = 0;
  loaderDiv.style.transform = "translateY(-120%)";

  setTimeout(() => {
    loaderDiv.remove();
  }, 1500);
}, 1000);
