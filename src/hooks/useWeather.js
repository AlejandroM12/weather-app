import { useState } from 'react';

const API_KEY = `2b137dbf91e096ea3ec00e6e53d620b3`;

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
}
