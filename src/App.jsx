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
    setRequestParams(requestParams);

  }
  useEffect(() => {
    try {
      const getData = async () => {
        if (requestParams.method && requestParams.url) {
          setLoading(true);
          let response = await axios(requestParams);
          let results = response.data
          setdata(results);
          setLoading(false);
        }
      }
      getData();
  } catch (e) {
    setdata('no data avaliable');
  }
  // When request params is changed
}, [requestParams]);

return (
  <>
    <Header />
    <div data-testid="app-div-method">Request Method: {requestParams?.method?.toUpperCase()}</div>
    <div data-testid="app-div-url">URL: {requestParams.url}</div>
    <Form handleApiCall={callApi} />
    <Results data={data} loading={loading} />
    <Footer />
  </>
);

}

export default App;
