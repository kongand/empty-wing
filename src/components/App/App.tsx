/** @jsxImportSource @emotion/react */
import React from 'react';
import logo from './logo.svg';
import { appStyles, headerStyles, linkStyles, logoStyles } from './styles';

function App() {
  return (
    <div css={appStyles}>
      <header css={headerStyles}>
        <img src={logo} css={logoStyles} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={linkStyles}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
