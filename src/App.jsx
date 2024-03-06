import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import NoMatch from "./utils/NoMatch";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Listings from "./components/Listings/Listings";
import Profile from "./components/Profile/Profile";
import Saved from "./components/Saved/Saved";
import Request from "./components/Request/Request";
import Rent from "./components/Rent/Rent";
import Details from "./components/Details";
import Create from "./components/Create/Create";
import Images from "./components/Create/Images";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/listing" element={<Listings />}>
            <Route path=":create" element={<Create />}>
              <Route path="images" element={<Images />} />
            </Route>
          </Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/saved-property" element={<Saved />}></Route>
          <Route path="/requests" element={<Request />}></Route>
          <Route path="/rent" element={<Rent />}>
            <Route path=":rentLocation" element={<Rent />}>
              <Route path=":rentId" element={<Details />} />
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
