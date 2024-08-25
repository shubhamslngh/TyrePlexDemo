import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/layout';
import FrontPage from './Pages/FrontPage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Layout />
      <FrontPage />
      <Footer/>
    </div>
  );
}

export default App;
