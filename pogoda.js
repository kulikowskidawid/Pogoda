// Uzyskany Klucz API z Wunderground cc557fbc884831f9

// Deklaracja Klasy Pogoda z metodą contructor
class Pogoda {
  constructor() {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
  }

  //Fetch - Dynamiczne Pobranie zasobów z API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/cc557fbc884831f9/conditions/q/${this.city}.json`);
    const responseData = await response.json();

    //Ustawienie aby funkcja return zwróciła informacje zawarte w "current_observation"
    return responseData.current_observation
  } 

}










