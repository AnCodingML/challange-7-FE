import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import LayoutCms from "./components/layoutCms"
import Home from "./pages/home"
import Car from "./pages/car"
import CarsCms from "./pages/cms/cars_cms"
import AddCar from "./pages/cms/add_car"
import EditCar from "./pages/cms/edit_car"
import Login from "./pages/cms/login"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="car" element={<Car />}/>
        </Route>
        <Route path="/cms" element={<LayoutCms/>}>
          <Route path="cars" element={<CarsCms />}/>
          <Route path="addCar" element={<AddCar/>}></Route>
          <Route path="editCar" element={<EditCar/>}/>
          
        </Route>
        <Route path="/admin-login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
