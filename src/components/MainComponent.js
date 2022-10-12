import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./MenuComponents";

import DishDetail from "./DishdetailComponent";

import { DISHES } from "../shared/dishes";

import Home from "./HomeComponent";

import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
// import { Jumbotron } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,

      selectedDish: null,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    return (
      <div>
        <Header />
        {/* <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />

          <DishDetail
            sldish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div> */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
