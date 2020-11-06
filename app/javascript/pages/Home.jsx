import React, {Component} from "react";

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home Page!</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}

export default Home;