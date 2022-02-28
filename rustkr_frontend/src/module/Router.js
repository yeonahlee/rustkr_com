import Home from "../page/Home";
import About from "../page/About";
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router;