
import React, { useEffect } from "react";
import AOS from "aos";
import './App.css';
import "aos/dist/aos.css";
import RoutesData from "./Router/router";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    AOS.init();
    
  }, []);
 
  return (
    <div className="App">
      <RoutesData />
      <AnimatedCursor
        innerSize={12}
        outerSize={18}
        color='255,204,153'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
}

export default App;
