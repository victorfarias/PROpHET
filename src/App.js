import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { IntlProvider } from "react-intl";
import { connect } from 'react-redux';
import messages from './messages';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage'
import ResultPage from './pages/ResultPage/ResultPage'


function App(props) {
  const {lang} = props;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route path='/quiz' component={QuizPage} />
          <Route path='/result' component={ResultPage} />
          {/* <HomePage></HomePage> */}
        </div>
      </IntlProvider>      
    </BrowserRouter>
  );
}

const mapStateToProps = (state) =>{
  return({
    lang: state.locale.lang,
  })
}

export default connect(mapStateToProps)(App);