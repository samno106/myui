import React, { Component } from "react";
import Hero from "../../layouts/hero/hero";
import Filter from "../../layouts/filter/filter";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <Filter />
      </>
    );
  }
}
