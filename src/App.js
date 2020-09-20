import React from "react";
import Routes from "./components/appRoutes";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/main-container/header/Header"
import Footer from "./components/main-container/footer/Footer"
import "./App.css";

const App = () => {
  return (
    <div className="App-main">
      <div className="App-content">
      <div className="App-header">
          <Header />
        </div>
        <Routes />
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;