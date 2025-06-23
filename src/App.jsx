import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Layout from './Layout'
import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
