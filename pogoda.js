// Uzyskany Klucz API z Wunderground cc557fbc884831f9

// Deklaracja Klasy Pogoda z metodą contructor
class Weather {
  constructor(name) {
    this.apiKey = '814e389bec984aab982111118190703';
    this.name = name;
  }

  //Fetch - Dynamiczne Pobranie zasobów z API
  async getWeather() {
    const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.name}`);

    const responseData = await response.json();

    //Ustawienie aby funkcja return zwróciła informacje zawarte w "current_observation"
    return responseData;
  } 

  // Zmiana Miejscowości 
changeLocation(name) {
  this.name = name;
}
}










