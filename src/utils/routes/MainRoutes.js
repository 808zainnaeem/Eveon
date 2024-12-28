import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Contact from '../../screens/Contact';
import Eveon from '../../screens/Eveon';
import BookingOrder from '../../screens/Booking';
import ProntoDetail from '../../components/models/ProntoDetail';
import JoyDetail from '../../components/models/JoyDetail';
import Shop from '../../screens/Shop';
import DetailPage from '../../screens/Detailpage';
import OrderPage from '../../screens/OrderPage';
import Success from '../../screens/Success';
import Login from '../../screens/Login';
import Admin from '../../screens/Admin';
import ProtectedRoutes from '../../components/Protected/ProtectedRoutes';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import Print from '../../screens/Print';
import LeopardProDetail from '../../components/models/LeopardProDetail';
import ZippyDetail from '../../components/models/ZippyDetail';
import Flora from '../../components/models/Flora';

const MainRoutes = () => {
  return (
    <>
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eveon-leopard" element={<Eveon />} />
        <Route path="/eveon-pronto" element={<ProntoDetail />} />
        <Route path="/eveon-joy" element={<JoyDetail />} />
        <Route path="/eveon-leopard-pro" element={<LeopardProDetail />} />
        <Route path="/eveon-zippy" element={<ZippyDetail />} />
        <Route path="/eveon-flora" element={<Flora />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingOrder />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/print/:id" element={<Print />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default MainRoutes