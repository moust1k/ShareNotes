import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from "./components/Create";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Note from "./components/Note";
import './App.css'

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/note/' element={<Note />}></Route>
          <Route path='/note/:noteURL' element={<Note />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
