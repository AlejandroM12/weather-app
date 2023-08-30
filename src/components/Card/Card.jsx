import { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';

const Card = () => {
  const [search, setSearch] = useState('');
  const { weather, loading, error, getWeather } = useWeather();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      getWeather(search);
    }
  };
  console.log(weather);
  return (
    <div className='container'>
      <h1>WEATHER APP</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={handleSearch} />
        <button type='submit'>Buscar Clima</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
