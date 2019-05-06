import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import QuizPage from './pages/QuizPage/QuizPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/quiz' component={QuizPage} />
        {/* <HomePage></HomePage> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
