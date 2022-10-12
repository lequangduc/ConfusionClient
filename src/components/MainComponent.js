import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./MenuComponents";

import DishDetail from "./DishdetailComponent";

import { DISHES } from "../shared/dishes";

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

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        {/* <Jumbotron dark color="primary"></Jumbotron> */}
        <Header />
        <div className="container">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
