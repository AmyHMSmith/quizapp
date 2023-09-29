import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={<Result name={name} score={score} />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
