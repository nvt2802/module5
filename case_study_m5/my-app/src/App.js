import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/FooterPage';
import ListCustomer from './page/ListCustomer';
// import Carousel from './page/Carousel';
// import CardList from './page/CardList';
import EditForm from './services/EditForm';
import AddCustomer from './customer/AddCustomer';
import AddContract from './booking/AddContract';
import ListContract from './booking/ListContract';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import AddForm from './services/AddForm';
import EditCustomer from './customer/EditCustomer';
import Home from './home/HomePage';

function App() {
  return (
    <div id="main">
      <Router>
      <Navbar/>
      <Routes >
        <Route path="/" element={ <Home />}/>
        <Route path="/edit-service" element={<EditForm />}/>
        <Route path="/add-service" element={<AddForm />}/>
        <Route path="/customer" element={<ListCustomer />}/>
        <Route path="/add-customer" element={<AddCustomer />}/>
        <Route path="/edit-customer" element={<EditCustomer />}/>
        <Route path="/contract" element={<ListContract />}/>
        <Route path="/add-contract" element={<AddContract />}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
