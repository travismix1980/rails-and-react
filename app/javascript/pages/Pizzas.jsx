import React, {Component} from "react";

class Pizzas extends Component{
    state={
        pizzaTypes: this.props.pizzaTypes,
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.pizzaTypes.map(pizza =>(
                        <li>{pizza}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Pizzas;