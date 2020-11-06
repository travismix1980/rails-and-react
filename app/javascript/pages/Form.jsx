import React, {Component} from "react";

class Form extends Component{
    state = {value: ""};

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;