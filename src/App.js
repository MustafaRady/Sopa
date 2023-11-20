import { Route, Routes } from "react-router";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Faq from "./Components/HelpCenter/Faq/Faq";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhySopa from "./Components/WhySopa/WhySopa";
import Item from "./Components/Item/Item";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Blog from "./Components/Blog/Blog";
import SopaAmbassadors from "./Components/SopaAmbassadors/SopaAmbassadors";
import About from "./Components/About/About";
import DiscountProgram from "./Components/DiscountProgram/DiscountProgram";
import ReturnsAndExchanges from "./Components/ReturnsAndExchanges/ReturnsAndExchanges";
import Login from "./Components/Login/Login";
import { useNavigate } from "react-router";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
 // eslint-disable-next-line
function App() {
  const isLoginPage = window.location.pathname === "/login";
  const navigate = useNavigate();

  if(localStorage.getItem("token") === null){
    navigate("/login");
  }

  return (
    <>
    {!isLoginPage && <NavBar></NavBar>}

    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/help-center" element={<HelpCenter/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/why-sopa" element={<WhySopa/>}/>
      <Route path="/item/:id" element={<Item/>}/>
      <Route path="/sopa-blog" element={<Blog/>}></Route>
      <Route path="/sopa-ambassadors" element={<SopaAmbassadors/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/discount-program" element={<DiscountProgram/>}></Route>
      <Route path="/shoppingCart" element={<ShoppingCart/>}></Route>
      <Route path="/returns-exchanges" element={<ReturnsAndExchanges/>}></Route>
      <Route path="/*" element={<NotFoundPage/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
