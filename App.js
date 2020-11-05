import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import * as Location from 'expo-location';
import axios from "axios";

import Loading from './Loading';
import Weather from './Weather';

const API_KEY = "990f71dc61cf69d4fabf5f83e6767532"; //openweathermapp.org

//<StatusBar style="auto" />
export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {
      data : {
        main : {temp},
        weather,

      }
    } = await axios.get(
      //api로 전송해서 날씨 가져오기
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading:false, 
        condition: weather[0].main, 
        temp : temp
      });
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); //사용자에게 권한 받기
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);  
      this.setState({ isLoading : false});
        
      console.log(coords.latitude, coords.longitude); //위도, 경도 값 로그로 남기기
    } catch (error) {
      //사용자가 권한을 주지 않는다면 알림 발송
      Alert.alert("이런!", "네가 어디있는지 못 찾겠어.")
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)} condition={condition} />;
  }
}
