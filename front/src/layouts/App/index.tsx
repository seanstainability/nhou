import React from "react";
import { Layout } from "./styles";

const App = () => {
  return (
    <>
      <Layout className="layout">
        <div className="layout-top-banner"></div>
        <header className="layout-navigation-bar">
          <div className="layout-navigation-primary__content"></div>
          <div className="layout-navigation-secondary__content"></div>
        </header>
        <div className="home-page">
          <div className="container home-header"></div>
          <nav className="container shortcut"></nav>
          <section className="container home-section home-stories"></section>
          <section className="container home-section"></section>
          <section className="container home-section"></section>
          <section className="container home-section home-cards"></section>
          <div></div>
          <section className="container home-section home-experts"></section>
          <section className="container home-section home-exhibitions"></section>
          <section className="container home-section home-section--scroll home-products"></section>
          <section className="container home-section home-rank"></section>
          <section className="home-b2b-notice container"></section>
        </div>
        <footer className="layout-footer">
          <div className="layout-footer__content"></div>
        </footer>
      </Layout>
    </>
  );
};

export default App;
