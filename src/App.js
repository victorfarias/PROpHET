import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import QuizPage from './pages/QuizPage/QuizPage'
import ResultPage from './pages/ResultPage/ResultPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/quiz' component={QuizPage} />
        <Route path='/result' component={ResultPage} />
        {/* <HomePage></HomePage> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
