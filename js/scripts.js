function listOfPlaces() {
  this.places = [];
  this.currentId = 0;
}

listOfPlaces.prototype.addLocation = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

listOfPlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

listOfPlaces.prototype.findPlace = function(id) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  }
}

function Place (location, landmarks, time) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
}

let list = new listOfPlaces();

function displayLocationDetails(listOfPlacesToDisplay) {
  let locationList = $("ul#locations");
  let htmlForLocationInfo = "";
  listOfPlacesToDisplay.places.forEach(function(place) {
    htmlForLocationInfo += "<li id=" + place.id + ">" + place.location + ", " + place.landmarks + "</li>";
  });
  locationList.html(htmlForLocationInfo);
}

$(document).ready(function() {
  $("#place1").submit(function(event) {
    event.preventDefault();
    let location1 = new Place ("Palermo", "the city", "yesterday");
    list.addLocation(location1);
    displayLocationDetails(list);
  });
  $("#place2").submit(function(event) {
    event.preventDefault();
    let location2 = new Place ("Mirror Lake", "the mountain", "the day before yesterday");
    list.addLocation(location2);
    displayLocationDetails(list);
  });
  $("#place3").submit(function(event) {
    event.preventDefault();
    let location3 = new Place ("Craters of the Moon", "the craters", "today");
    list.addLocation(location3);
    displayLocationDetails(list);
  });
});