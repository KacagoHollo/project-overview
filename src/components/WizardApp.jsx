import React from "react";
import Wizard from "../pages/Wizard"


function WizardApp() {
    const Page1 = () => <h1>Első oldal</h1>
    const Page2 = () => <h1>Második oldal</h1>
    const Page3 = () => <h1>Harmadik oldal</h1>
  return (
    <Wizard>
      <Page1/>
      <Page2/>
      <Page3/>
    </Wizard>
  )
}

export default WizardApp;