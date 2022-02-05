import logo from './logo.svg';
import './App.css';

// Components
import Header from './components/structure/header';
import Footer from './components/structure/footer';
import Body from './components/structure/body';
import SubmitForm from './components/SubmitForm';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <SubmitForm></SubmitForm>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
