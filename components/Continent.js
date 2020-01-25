import React from 'react';
class Continent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: ''};
    }
    handleContinentChange = (e) => {
        this.setState({ input: e.target.value});
    }
    handleFocus = () => {
        this.setState({ input: '' });
    }
    render() {
        let continents = this.props.continent.map((ele, index) => {
            if(ele.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1) {
                return ( 
                    <option key={index} id={ele} value={ele} onClick={this.props.handleContinentSelect}>
                        {ele}
                    </option>
                );
            }
        });
        return (
            <div>
                continent
                <input type="text" onClick={this.props.handleContinentClick} onChange={this.handleContinentChange} value={this.state.input} onFocus={this.handleFocus}></input>
                    {continents}
                
                
                <div>
                    <h2>{this.props.selectedContient}</h2>
                </div>
            </div>
        );
    }
}
export default Continent;