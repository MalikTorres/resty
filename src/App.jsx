// import React from 'react';
import './App.scss';
// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention.
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true);
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };

    setdata(data);
    setRequestParams(requestParams);
    setLoading(false);
  }
  useEffect(() => {
    async function getData() {
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setdata(response.data.results);
    }
    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div data-testid="app-div-method">Request Method: {requestParams.method}</div>
      <div data-testid="app-div-url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );

}

export default App;
