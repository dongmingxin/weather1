import React, { Component } from 'react';
import logo from '../icon/logo.png';
import { connect } from "react-redux";
import { changeInputAction, toggleUnitAction } from "../redux/actions/navigationActions";
import { getWeatherAction } from "../redux/actions/weatherActions";

function Header(props) { 
        return ( 
        <div>
            <header>
                <img className="header__logo" src={logo} />
                <h1 className="header__title">Weather Channel</h1>
            </header>
            <nav>
                <div style={{flex:1}}>
                    <input className="search-input" value={props.input} onChange={event => props.changeInput(event.target.value)}/>
                    <button className="search-btn" onClick={() => props.handleSearch(props.inout)}><i className="fa fa-search"></i></button>
                    <button className="temp-switch" onClick={props.toggleUnit}>
                        <i
                        className="fa fa-thermometer-empty"
                        aria-hidden="true"
                        style={{paddingRight:5}}
                        ></i>
                        <sup>&deg;</sup>{props.unit.toUpperCase()}
                    </button>
                </div>
            </nav>
      </div>
         );
}
const mapStateToProps = state => ({
    input: state.navigation.input,
    unit: state.navigation.unit,
  });
  
  const mapDispatchToProps = dispatch => ({
      changeInput: input => dispatch(changeInputAction(input)),
      toggleUnit: () => dispatch(toggleUnitAction()),
      handleSearch: (city) => dispatch(getWeatherAction(city)),
  });
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);