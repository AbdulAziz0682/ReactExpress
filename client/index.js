import React from 'react';
import { render } from 'react-dom';
import FileUploadPage from './FileUploadPage';
import './fake-hmr';

const ExampleComponent = () => {
  return <div>
    <h1>This is my express template!</h1>
    <FileUploadPage />
  </div>
}

render(<ExampleComponent />, document.getElementById('app'));
