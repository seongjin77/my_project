function onGeoOk (){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

};
function onGeoError (){
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)