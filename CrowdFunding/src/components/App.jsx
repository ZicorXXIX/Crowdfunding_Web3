import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.css";
import { Sidebar } from "./Sidebar";
import CreateCampaign from "./CreateCampaign";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {


  return (
    <>


      <BrowserRouter>

        <Routes>
          <Route path='/createCampaign' element={<><Sidebar /><CreateCampaign />
          </>} />
          <Route path='/' element={<>
            {/* <Navbar/> */}
            <Content />
            <Sidebar /></>} />
        </Routes>

      </BrowserRouter>

      {/* <CreateCampaign /> */}

    </>
  );
}

export default App;
