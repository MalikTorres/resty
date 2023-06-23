// import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMonikaiTheme from 'react-json-pretty/dist/monikai';

function Results({ data, loading }) {
  return (
    <section>
      {
        loading ? <p>Loading...</p> :

          <pre data-testid="results-pre">
            {
              data
                ? <JSONPretty data={data} theme={JSONPrettyMonikaiTheme}></JSONPretty>
                : null
            }
          </pre>
      }
    </section>
  );
}
export default Results;


// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }
