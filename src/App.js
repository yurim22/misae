import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import { Header, Footer, Wrapper } from './components';
import SidoList from './containers/sido_list';
import WeatherDetail from './components/weather/weather_detail';
import WeatherDetails from './containers/weather_detail';

const App = () => {
  const APP_KEY = 'JnIX4OVjZ8gY9DD3h5mPDIaBNX5%2FVBuhJLizs3X5tErre9SYLZm3%2Bx8MgM8jDzhsyzsIaR41UpAfTrft%2BF4ubQ%3D%3D'
  const ROOT_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst'
  const proxyurl = "https://cors-anywhere.herokuapp.com/"


  const [weathers, setWeathers] = useState([]);
  const [search, setSearch] = useState('');
  const [sido, setSido] = useState('서울')

  useEffect(() => {
    getWeather()
  }, [sido]);

  const getWeather = async () => {
    const response = await fetch(`${proxyurl}${ROOT_URL}?sidoName=${sido}&searchCondition=HOUR&pageNo=1&numOfRows=25&ServiceKey=${APP_KEY}&_returnType=json`);
    const data = await response.json()
    setWeathers(data.list)
    console.log(data.list)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setSido(search);
    setSearch('');
  }


  return (
    <div className="App">
      <Header />
      <Wrapper>
        <form onSubmit={getSearch} className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input className='form-control' type='text' placeholder="시or도 이름을 입력하세요" value={search} onChange={updateSearch} />
            <button
              className='btn btn-primary' type="submit">
              Search
          </button>
          </div>
        </form>
        <div className="App row">
          <div className="list">
            <SidoList/>
          </div>
          <div className="weathers">
            {weathers.map(weather => (
              <WeatherDetail
                sidoName={weather.sidoName}
                cityName={weather.cityName}
                pm10Value={weather.pm10Value}
                pm25Value={weather.pm25Value}
                dataTime = {weather.dataTime} />)
            )};
          </div>

        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
