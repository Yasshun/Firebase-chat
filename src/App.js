import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body"></div>
        <Sidebar />
      {/* Sidebar */}
      {/* React Router -> Chat screen */}
    </div>
  )
}

export default App;
