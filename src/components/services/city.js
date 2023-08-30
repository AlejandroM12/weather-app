const API_KEY = `2b137dbf91e096ea3ec00e6e53d620b3`;

export const getCityWeather = async ({ city }) => {
  if (city === '') return null;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();

    const weatherIconMap = {
      Clear: 'clear.png',
      Rain: 'rain.png',
      Snow: 'snow.png',
      Clouds: 'cloud.png',
      Haze: 'mist.png',
    };

    const cityWeather = {
      id: json.id,
      icon: weatherIconMap[json.weather[0].main] || '',
      name: json.name,
      temp: json.main.temp,
      description: json.weather[0].description,
      humidity: json.main.humidity,
      speed: json.wind.speed,
    };
    return cityWeather;
  } catch (e) {
    throw new Error('Error searching movies');
  }
};
