import './App.css'
import ToolBar from "./components/UI/ToolBar/ToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import EditPage from "./containers/EditPage/EditPage.tsx";
import {Typography} from "@mui/material";

const App = () => {


  return (
    <>
      <ToolBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:pageName" element={<Home />} />
        <Route path="/pages/admin" element={<EditPage />} />
        <Route path="*" element={<Typography variant={"h5"}>Page Not Found</Typography>} />
      </Routes>
    </>
  )
};

export default App
