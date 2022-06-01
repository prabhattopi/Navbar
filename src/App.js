

import { useState } from 'react';
import { Box1 } from './components/Box1';
import { Navbar } from './components/Navbar';

function App() {
  const [Opacity, setOpacity] = useState(0)
  return (
    <>
    <Navbar setOpacity={setOpacity}/>
    
   <Box1 Opacity={Opacity}/>
   
   </>
  );
}

export default App;
