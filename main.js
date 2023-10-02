const x = document.getElementById("demo");
const password = "password";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function myFunction() {
    if (password.localeCompare("password") == 0) {
        window.alert("You are successfully signed in. ")
    } else {
        window.alert("Failed!")
    }
    document.getElementById('demo').innerHTML= Date()
}

