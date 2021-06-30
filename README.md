# react-argyle-link - [![npm version](https://badge.fury.io/js/react-argyle-link.svg)](http://badge.fury.io/js/react-plaid-link)

> A React component for [Argyle Link](https://argyle.com/docs/argyle-link)

## Getting Started

- `yarn add react-argyle-link` or `npm install react-argyle-link`;
- Your application will aso need `react-dom` and `react` installed.

## How to use

### Argyle Link Button with styling

```typescript jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ArgyleLink } from './ArgyleLink';

ReactDOM.render(
  <ArgyleLink
    style={{
      padding: '8px 32px',
      borderRadius: 4,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    }}

    options={{
      pluginKey: '<your-plugin-key>',
      onAccountCreated: params => console.log('Account created: ', params),
      onAccountConnected: params => console.log('Account connected: ', params),
      onAccountUpdated: params => console.log('Account updated: ', params),
      onAccountRemoved: params => console.log('Account removed: ', params),
      onUserCreated: params => console.log('User created: ', params),
      onClose: () => console.log('Link closed'),
      onTokenExpired: params => console.log('Token expired: ', params),
    }}
  >
    Connect Account
  </ArgyleLink>,
  document.getElementById('root')
);
```

### useArgyleLink hook inside function component

```typescript jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { useArgyleLink } from './ArgyleLink';

const App = () => {
  const { error, ready, open, close } = useArgyleLink({
    pluginKey: '<your-plugin-key>',
    onAccountCreated: params => console.log('Account created: ', params),
    onAccountConnected: params => console.log('Account connected: ', params),
    onAccountUpdated: params => console.log('Account updated: ', params),
    onAccountRemoved: params => console.log('Account removed: ', params),
    onUserCreated: params => console.log('User created: ', params),
    onClose: () => console.log('Link closed'),
    onTokenExpired: params => console.log('Token expired: ', params),
  });

  return (
    <>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button disabled={!!error} onClick={() => open()}>Connect Account</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Parameters

Please refer to [original documentation](https://argyle.com/docs/argyle-link/configuration) for details.

|    param     |   type   |   is required?    |
|:------------:|:--------:|:-----------------:|
|   pluginKey  |  string  |      Required     |
|    apiHost   |  string  |      Optional     |
|   userToken  |  string  |      Optional     |
|   linkItems  | string[] |      Optional     |
|      on*     | function |      Optional     |
