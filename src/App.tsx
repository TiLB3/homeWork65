import './App.css'
import ToolBar from "./components/UI/ToolBar/ToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";

const App = () => {

  return (
    <>
      <ToolBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:pageName" element={<Home />} />
      </Routes>
    </>
  )
};

export default App
