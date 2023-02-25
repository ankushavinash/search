function search() {
  var earth = document.getElementById("earth");
  var wind = document.getElementById("wind");
  var fire = document.getElementById("fire");
  var searchItem = document.getElementById("searchInfo").value;
  if (searchItem === "earth") {
    earth.style.display = "block";
  } else if (searchItem === "wind") {
    wind.style.display = "block";
  } else if (searchItem === "fire") {
    fire.style.display = "block";
  } else
    alert("Try Again! It is not " + searchItem);
}
