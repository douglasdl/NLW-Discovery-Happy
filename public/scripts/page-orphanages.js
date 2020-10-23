// Create map
const map = L.map('mapid').setView([34.8519603, 135.6827767], 15);



// Create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "images/map-marker.svg", iconSize: [58, 58], iconAnchor: [29, 68], popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
    
    // Create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="images/arrow-white.svg"></a>`)

    // Create and add marker
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
//console.log(orphanagesSpan)
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
} )