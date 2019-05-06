import React from 'react';
import style from './weather.module.css';


const Weather = ({ cityName, pm10Value, pm25Value,sidoName, dataTime }) => {
  
  return (
    <div className={style.weather}>
      <h5>-{sidoName}-</h5>
      <p>측정시각 : {dataTime}</p>
      <h1>{cityName}</h1>
      <p>초미세먼지 농도: {pm10Value}</p>
      <p>미세먼지 농도 : {pm25Value}</p>
      <h6>마스크? 굳이,, 날씨 좋아용!</h6>
      <a href="https://bluesky.seoul.go.kr/finedust/common-sense/page/10?article=745">미세먼지 기준 확인하기</a>
    </div>
  );
}

export default Weather;