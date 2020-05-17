import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { getWeather } from './axios';
import { connect } from "react-redux";
import { getWeatherAction } from "./redux/actions/weatherActions"

class App extends React.Component {

  componentDidMount() {
    this.props.getWeather("Brisbane")
  }


  render() {
    return (
      <main className= "container" >
        <div className="weather-channel__container">
            <Header/>
            <Body/>
            <Footer />
        </div>
      </main>
    )

  }
}



const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(getWeatherAction(city))
})


export default connect(null, mapDispatchToProps)(App);
