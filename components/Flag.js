import React from 'react';
class Flag extends React.Component {
    render() {
        let flags = this.props.flag.map((ele, index) => {
            console.log(ele);
            return (
                <li key={index}>
                    {ele.flag}
                </li>
            );
        });
        return (
            <div>
                Flag
                {flags}
                <button onClick={this.props.clear}>clear</button>
            </div>
        );
    }
}
export default Flag;