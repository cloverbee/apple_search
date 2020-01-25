import React from 'react';
class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedCountries: []};
    }
    // onChange = (e) => {
    //     console.log(e.target.checked);
    //     let countries = [...this.state.selectedCountries, e.target.value];
    //     this.setState({ selectedCountries: countries });
    // }
    render() {
        let countries = this.props.country.map((ele, index) => {
            return (
                <li id={ele.name}> 
                    <input type="checkbox" value={ele.name} onChange={this.props.handleSelectedCountry}/>{ele.name}
                </li>
            );
        });
        return (
            <div className="dropdown-check-list">
                <span>Select Country</span>
                <ul className="countries">
                    {countries}
                </ul>
            </div>
        );
    }
}
export default Country;