//Deklaracja klasy UI z konstruktorem

class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.desc = document.getElementById('desc');
    this.string = document.getElementById('temp');
    this.details = document.getElementById('details');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('api1');
    this.feelsLike = document.getElementById('api2');
    this.dewpoint= document.getElementById('api3');
    this.wind = document.getElementById('api4');
  }

