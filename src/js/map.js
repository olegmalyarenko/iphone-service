function initMap() {
    const uluru = {lat: 53.93218119, lng: 27.46022254}; // координаты маркера
        const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 17, // масштаб карты от 1 и выше
        center: uluru
    });
    
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: {
            url: "img/map-marker.png",
            scaledSize: new google.maps.Size(35, 47)
        }
    });
}