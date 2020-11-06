// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {Component} from 'react'
import  {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import ReactDOM from 'react-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Pizzas from "../pages/Pizzas";
import Form from "../pages/Form";


class App extends Component{
  state = {
    name: "Travis",
    age: 40,
    pizzaTypes: this.props.pizzaTypes,
  }

  render(){
    return(
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/pizza">Pizza</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path={"/pizza"}>
                <Pizzas pizzaTypes={this.state.pizzaTypes}/>
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/">
                <Home name={this.state.name} age={this.state.age}/>
              </Route>
              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('home_data');
  const data = JSON.parse(node.getAttribute('data'));
  ReactDOM.render(
    <App pizzaTypes={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
