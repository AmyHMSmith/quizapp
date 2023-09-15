import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/Home.css";
import Categories from "../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span>Quiz Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage>Cannot leave blank</ErrorMessage>}

          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            select
            style={{ marginBottom: 25 }}
            label="Select category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            variant="outlined"
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {" "}
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 25 }}
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
