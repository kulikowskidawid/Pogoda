// Inicjalizacja obiektu pogoda

// Inicjalizacja Local Storage 
const storage = new Storage();
// Pobranie zapisanej lokalizacji do obiektu weather location
const weatherLocation = storage.getLocationData();
// Inicjalizacja obiektu Pogoda
const pogoda = new Pogoda(weatherLocation.city);
// Inicjalizacja obiektu UI
const ui = new UI();