import React, { Component } from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommened from "./Recommened";
import News from "./News";

export class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <TopSellers />
        <Recommened />
        <News />
      </>
    );
  }
}

export default Home;
