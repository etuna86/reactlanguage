import React, { FC,Suspense } from 'react';
import './App.css';
import './i18n'
import Home from './components/Home'
import SwitchLanguage from './components/SwitchLanguage'

const App: FC = ()=> {
  return (
    <div className="App">
        <SwitchLanguage />
        <Suspense fallback={null}>
            <Home />
        </Suspense>

    </div>
  );
}

export default App;