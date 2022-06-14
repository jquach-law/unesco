import { useState } from 'react';
import * as React from 'react';
import DownloadBody from './NavBar-Download-body';

function Download() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successful Request! Downloading images..")
    window.open(`http://localhost:5000/download/${inputs.lower}-${inputs.upper}`, "_self")
  }

    return (
      <DownloadBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputs={inputs} />
  )
}
export default Download;
