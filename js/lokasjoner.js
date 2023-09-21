//pre requesites

let lat1;
let lon1;



const successCallback = (position) => {
    lat1 = position.coords.latitude;
    lon1 = position.coords.longitude;

  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let locations = [
    { name: 'Nærbutikken Sandviken', latitude: 60.40786779089494, longitude: 5.325514867125557 },
    { name: 'Meny Støletorget', latitude: 60.39998531744762, longitude: 5.325534797812668 },
    { name: 'Extra Gågaten', latitude: 60.39562283912826, longitude: 5.319000516859552 },
    { name: 'Coop Prix Marken', latitude: 60.39224414640773, longitude: 5.330203870827883 },
    { name: 'Pakkeautomat Bergen Jernbanestasjon', latitude: 60.390137531838405, longitude: 5.333197011304125 },
    { name: 'Pakkeautomat Lars Hilles Gate', latitude: 60.38844119478995, longitude: 5.330399310924505 },
    { name: 'Bunnpris Welhavensgate', latitude: 60.38555458322066, longitude: 5.321944422944282 },
    { name: 'Bunnpris Nygårdsgaten', latitude: 60.38513020472884, longitude: 5.331617585791653 },
    { name: 'Pakkeautomat Prix Rogalandsgata', latitude: 59.408232165288084, longitude: 5.286332884254887 },
    { name: 'Pakkeautomat Frøyas Veg', latitude: 59.95593943322779, longitude: 10.610085995931476 },
    { name: 'Pakkeautomat KIWI Norheim', latitude: 59.38692219591241, longitude: 5.315505140073716 },
    { name: 'Pakkeautomat KIWI Salhusvegen', latitude: 59.398350104540114, longitude: 5.286201028051438 },
    { name: 'Joker Førde', latitude: 59.61186212428612, longitude: 5.4750698977604495 },
  ];
  

//starter koden her

let table = document.getElementById("lokasjonerTable");

function calculateDistance(lat1,lat2,lon1,lon2){
    console.log(lat1, lat2, lon1, lon2);
    return Math.acos(Math.sin(lat1)*Math.sin(lat2)+Math.cos(lat1)*Math.cos(lat2)*Math.cos(lon2-lon1))*6371;
}

for(let i = 0; i < locations.length; i++){
    let row = table.insertRow(i + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML += "<span class=\'dot\'></span>";
    cell2.innerHTML = locations[i].name;
    lat2 = locations[i].latitude;
    lon2 = locations[i].longitude;
    
    if (isNaN(calculateDistance(lat1,lat2,lon1,lon2))){
        cell3.innerHTML = "Skru på lokasjon";
    }
    else{
    cell3.innerHTML = calculateDistance(lat1,lat2,lon1,lon2); }
    cell4.innerHTML += "<a href='http://www.google.com/maps/place/" + lat2 + "," + lon2 + "' class='btn'>Vis</a>";

    


}


document.getElementById("vossDistance").innerHTML = calculateDistance(lat1, lat2, lon1, lon2);
