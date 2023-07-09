import './App.css';
import { Navbar } from './Components/navbar';
import { Section1 } from './Components/sectioon1';
import { Section2 } from './Components/section2';
import { Section4 } from './Components/section4';
import { Section5 } from './Components/section5';
import { Section6 } from './Components/section6';
function App() {
  return (
    <div id="main">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section4/>
      <Section5/>
      <Section6/>
    </div>
    
  );
}

export default App;
