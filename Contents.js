document.addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button && button.textContent.toLowerCase().includes("add")) {
    console.log("Add detected! Showing popup");

    const img = document.createElement("img");
    img.src = "https://bit.ly/3Ck6DTU";


    const imgWidth = 200;
    const imgHeight = 200;
    img.style.width = imgWidth + "px";
    img.style.height = imgHeight + "px";

    // position properly
    img.style.position = "fixed";
    img.style.zIndex = "9999";
    img.style.borderRadius = "8px";
    img.style.border = "2px solid red";

    // random coordinates
    let randomX = Math.floor(Math.random() * (window.innerWidth - imgWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - imgHeight));

    img.style.left = randomX + "px";
    img.style.top = randomY + "px";

    document.body.appendChild(img);
  }
});
