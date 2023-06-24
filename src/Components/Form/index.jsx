// import React from 'react';
import{ useState } from 'react';
import './Form.scss';

function Form(props) {
const [url, setUrl] = useState('');
const [method, setMethod] = useState('');
const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit">GO!</button>
        </label>
        <label>json data (if nevessary)
          <textarea rows="4" cols="50" onChange={(e) => {setData(e.target.value)}}/>
        </label>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('GET')}>GET</span>
          <span id="post" onClick={(e) => setMethod('POST')}>POST</span>
          <span id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
          <span id="delete"onClick={(e) => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  )
};
export default Form;

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }
