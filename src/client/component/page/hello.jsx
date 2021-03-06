import React from 'react';

import HelloButton from '../../container/hello-button';
import Message from '../../container/message';

const title = 'Hello Page';

const HelloPage = () =>
  <div className="container mt-4">
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>;

export default HelloPage;
