function initMap() {
    var uluru = {lat: 59.95870772422682, lng: 30.3100860491395}; // координаты маркера
        var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 17, // масштаб карты от 1 и выше
        center: uluru
    });
    
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: {
            url: "img/map-marker.png",
            scaledSize: new google.maps.Size(35, 47)
        }
    });
}