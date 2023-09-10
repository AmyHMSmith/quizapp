import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import '../styles/Home.css';
import Categories from '../Data/Categories';

const Home = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  
  return (
    <div className='content'>
      <div className='settings'>
        <span>Quiz Settings</span>

        <div className='settings_select'>
          <TextField style={{ marginBottom: 25 }} label='Enter your name' variant='outlined' />

          <TextField select style={{ marginBottom: 25 }} label='Select category' variant='outlined'>  
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}> {cat.category}</MenuItem>  
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 25 }}
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
          >
            Start Quiz
          </Button>
        </div>

      </div>

      <img src='quiz.svg' className='banner' alt='quiz img' />

    </div>
      )
}

export default Home;