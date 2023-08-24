
import './App.css';
import BookList from './ss6_2/BookList';
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import EditBook from './ss6_2/EditBook';
import CreateBook from './ss6_2/CreateBook';
import Navbar from './ss6_2/Navbar';
// ----import cua bai 1 ---------
// import CreateTodo from './ss6_1/CreateTodo';
// import Todo from './ss6_1/Todo';

function App() {
  return (

    <div >
      {/*----------- giao dien bai 1 ------------*/}
        {/* <h1>Todo List</h1>
        <CreateTodo/>
        <Todo/> */}
        <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<BookList/>}/>
          <Route path='/create' element={<CreateBook/>}/>
          <Route path='/edit/:id' element={<EditBook/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
