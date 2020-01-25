import React from 'react';
import logo from './logo.svg';
import './App.css';
import Continent from './components/Continent';
import Country from './components/Country';
import Flag from './components/Flag';
import ContinentData from './continents.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: ContinentData, 
      continent: [], 
      selectedContient: '', 
      country: [],
      selectedCountries: [],
      selectedFlags: [] 
    };
  }
  
  handleContinentClick = () => {
    if(this.state.continent.length === 0) {
      let continentsResult = this.state.data.map(ele => {
        return ele['continent'];
      });
      this.setState({ continent: continentsResult });
    }
  }
  handleContinentSelect = (e) => {
    
    const id = e.target.id;
    let countries = [];
    this.state.data.forEach( ele => {
      if(ele.continent === id) {
        countries = ele.countries;
      }
    });
    this.setState({ selectedContient: e.target.value, country: countries });

  }
  handleSelectedCountry = (e) => {
    let countries = [...this.state.selectedCountries, e.target.value];
    let flags = [...this.state.selectedFlags];
    let newFlag = {};
    if(e.target.checked) {
      this.state.country.filter((ele) => {
        if(ele.name === e.target.value) {
          newFlag = ele;
        }
      });
      flags.push(newFlag);
    } else {
      flags = this.state.selectedFlags.filter(ele => {
        if(ele.name !== e.target.value) {
            return ele;
        }
      });
    }
    this.setState({ selectedCountries: countries, selectedFlags: flags});
  }
  handleClear = () => {
    this.setState({country: [], selectedCountries: [], selectedFlags: []});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          flag picker
        </header>
        <Continent continent={this.state.continent} handleContinentClick={this.handleContinentClick} handleContinentSelect={this.handleContinentSelect} selectedContient={this.state.selectedContient}/>
        <Country country={this.state.country} handleSelectedCountry={this.handleSelectedCountry}/>
        <Flag flag={this.state.selectedFlags} clear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
