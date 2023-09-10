import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        </Routes>
        
        </div>
      
      <Footer />
      </BrowserRouter>
    )
}

export default App;
