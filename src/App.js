import * as React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Start from './Companies/Wonik/Start';

const WonikLanding = React.lazy(() => import('./Companies/Wonik/Start'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={null}>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route
              exact
              path="/wonik"
              element={<WonikLanding companyName={'wonik'} />}
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
