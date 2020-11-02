import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from 'expo-location';

import Loading from './Loading';

//<StatusBar style="auto" />
export default class extends React.Component {
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
