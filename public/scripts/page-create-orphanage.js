// Get values
//const lat = document.querySelector('span[data-lat]').dataset.lat
//const lng = document.querySelector('span[data-lng]').dataset.lng

// Create map from HTML
//const map = L.map("mapid", options).setView([lat, lng], 16);

// Create map
const map = L.map("mapid").setView([34.8270675, 135.6104384], 17);

// Create and add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "images/map-marker.svg",
  iconSize: [58, 58],
  iconAnchor: [29, 68],
});



let marker;


// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})


// Add photos
function addPhotoField() {
    // Get container
    const container = document.querySelector('#images');
    
    // Get container to be duplicated
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    // Create an image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // Check if field it's empty
    const input = newFieldContainer.children[0];
    if(input.value == "") {
        return;
    }

    // Clean text
    newFieldContainer.children[0].value = "";

    // Add the image clone to the container
    container.appendChild(newFieldContainer);
}


// Delete photo field
function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1) {
        // Clean text
        span.parentNode.children[0].value = "";
        return
    }
    // Delete field
    span.parentNode.remove();
}


// Select Yes or No
function toggleSelect(event) {
    // Remove .active class from the buttons
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
        button.classList.remove('active')
    })
    
    // Get clicked button and add .active class
    const button = event.currentTarget
    button.classList.add('active');

    // Check if it's Yes or No

    // Update the input hidden with the selected button value
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
    console.log(input);
}

function validate(event) {
    const needsLatAndLng = true;
    // Validar se lat e lng estão preenchidos
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value
    logger.log(`Teste: ${lat}, ${lng}`);
    if(needsLatAndLng) {
        event.preventDefault();
        alert("Selecione um ponto no mapa!")
    }
    
}