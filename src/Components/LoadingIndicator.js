import React from 'react'
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <ClipLoader color="#36D7B7" css={override} size={35} />
    </div>
  )
}

export default LoadingIndicator
