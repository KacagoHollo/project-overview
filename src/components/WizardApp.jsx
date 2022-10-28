import React, {useState, useContext} from "react";
import Wizard from "../pages/Wizard"


import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";



function WizardApp () {

 
  return (
    <Wizard>
      <Page1 />
      <Page2 />
      <Page3 />
    </Wizard>
  )
}

export default WizardApp;