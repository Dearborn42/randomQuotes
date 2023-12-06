import React, { useState, useEffect } from 'react';
// import dotenv from "dotenv"
import './App.css';
import './Styles/main.css';
import QuoteBox from './Components/QuoteBox';
import Spinner from 'react-bootstrap/Spinner';
// dotenv.config()

function App() {
  const [data, setData] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setRefreshFlag(false);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [refreshFlag]);

  const handleRefresh = async () => {
    setRefreshFlag(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {data ? (<QuoteBox quotes={data}/>) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <button onClick={handleRefresh} >Refresh</button>
      </header>
    </div>
  );
}

export default App;
