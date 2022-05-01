import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddItems from "./components/AddItems/AddItems";
import AllMyItems from "./components/AllMyItems/AllMyItems";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageAll from "./components/ManageAll/ManageAll";
import Notfound from "./components/Notfound/Notfound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UpdateItem from "./components/UpdateItem/UpdateItem";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/manage" element={<ManageAll></ManageAll>}></Route>
        <Route
          path="/updateitem/:updateId"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={<AllMyItems></AllMyItems>}
        ></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
