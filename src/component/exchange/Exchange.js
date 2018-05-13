import React from 'react';

class Exchange extends React.Component {
  componentDidMount() {
    const landing = document.getElementById('landing');
    landing.classList.add("exchange-wrapper");
  }
  componentWillUnmount() {
    const landing = document.getElementById('landing');
    landing.classList.remove("exchange-wrapper");
  }
  render() {
    return (<h1 className="text-white">Hellooo world</h1>)
  }
}
export default Exchange;
