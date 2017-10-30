import React from 'react';
import ReactDOM from 'react-dom';
// 
import Invitation from './components/Invitation';
import ThemedDecorations from './components/ThemedDecorations';

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party I'm throwing!</Invitation>
    <ThemedDecorations theme="heaven-one">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedDecorations>
  </div>,
  document.getElementById('global')
);
