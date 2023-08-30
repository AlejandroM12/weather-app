import { useState } from 'react';
import { getCityWeather } from '../components/services/city';

export function useWeather() {
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async ({ city }) => {
    try {
      setLoading(true);
      setError(null);
      const newSearchCity = await getCityWeather({ city });
      setWeather(newSearchCity);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { weather, getWeather, error, loading };
}
