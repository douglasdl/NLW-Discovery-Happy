const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Get values
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Create map from HTML
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create and add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "images/map-marker.svg",
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([lat, lng], { icon }).addTo(map);







/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  /* Remove the class active */
  const buttons = document.querySelectorAll(".images button");
  //console.log(buttons);
  buttons.forEach(removeActiveClass);
  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  /* Select the image */
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  /* Update the image container */
  imageContainer.src = image.src

  /* Add the class active */
  button.classList.add("active");
}