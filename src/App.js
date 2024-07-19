import logo from './logo.svg';
import './App.css';
import Header from './shared/header';
import Footer from './shared/footer';
import Home from './home/home';
function App() {
  return (
    <div className="App">
     <Header style={{ border:true }}></Header>


      <Home></Home>



     <Footer></Footer>
    </div>
  );
}

export default App;
