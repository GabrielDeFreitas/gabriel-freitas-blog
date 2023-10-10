import React, { useRef } from 'react';

import useScript from '../libs/use-script';

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-dark',
    issueTerm: 'url',
    repo: 'GabrielDeFreitas/gabriel-freitas-blog',
    ref: comment,
  });

  console.log(status);
  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
