import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import { AlertState } from "./context/alert/alertState";
import { GithubState } from "./context/github/githubState";
import "./index.scss";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";

function App() {
  return (
    <>
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
              <Alert alert={{ text: "Test alert" }} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:nameUrl" element={<Profile />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
    </>
  );
}

export default App;
