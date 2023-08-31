import { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { Layout } from '../Layout';
import { NotFound } from '../NotFound';
import { Loader } from '../Loader';

const Card = () => {
  const [search, setSearch] = useState('');
  const { weather, loading, error, getWeather } = useWeather();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      getWeather({ city: search });
    }
  };

  return (
    <Layout weather={weather} error={error}>
      <div className='search-box'>
        <form onSubmit={handleSubmit}>
          <i className='fa-solid fa-location-dot'></i>
          <input
            type='text'
            placeholder='Enter your location'
            value={search}
            onChange={handleSearch}
          />
          <button
            className='fa-solid fa-magnifying-glass'
            type='submit'
            onSubmit={handleSubmit}
          ></button>
        </form>
      </div>
      {error && <NotFound />}
      {loading && <Loader />}
      {weather && !loading && (
        <div
          className={`weather-box ${weather ? 'fadeIn' : ''}`}
          style={{ display: error ? 'none' : 'block' }} // Hide when error is true
        >
          <img src={`./assets/${weather.icon}`} alt='weather icon' />
          <p className='temperature'>
            {parseInt(weather.temp)}
            <span>°C</span>
          </p>
          <p className='description'>{weather.description}</p>
        </div>
      )}
      {weather && !loading && !error && (
        <div
          className={`weather-details ${weather ? 'fadeIn' : ''}`}
          style={{ display: error ? 'none' : 'flex' }}
        >
          <div className='humidity'>
            <i className='fa-solid fa-water'></i>
            <div className='text'>
              <span>{weather.humidity} %</span>
              <p>Humidity</p>
            </div>
          </div>
          <div className='wind'>
            <i className='fa-solid fa-wind'></i>
            <div className='text'>
              <span>{weather.speed} Km/h</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Card;
