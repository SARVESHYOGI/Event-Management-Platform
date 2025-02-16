import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddEvent from "./pages/AddEvent";
import EventDetail from "./pages/EventDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register-user" element={<Register />} />
          <Route path="/login-user" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/eventdetails" element={<EventDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}