// import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/FooterPage';
import ListCustomer from './page/ListCustomer';
import Carousel from './page/Carousel';
import CardList from './page/CardList';
import EditForm from './services/EditForm';
import AddCustomer from './customer/AddCustomer';

function App() {
  return (
    <div >
        <Navbar/>
        <Carousel/>
        <CardList/>
        <EditForm />
        <AddCustomer/>
        <ListCustomer/>
        <Footer/>
    </div>
  );
}

export default App;
