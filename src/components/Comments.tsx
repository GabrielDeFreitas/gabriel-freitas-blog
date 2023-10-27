import React, { useEffect, useRef } from 'react';

const Comments = ({ title }) => {
  const commentBox = useRef(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const utterancesTheme = theme === 'light' ? 'github-light' : 'github-dark';

    const watchThemeSwitch = new MutationObserver((mutations) => {
      const utterances = document.querySelector('.utterances-frame');
      if (!utterances) return;

      for (const mutation of mutations) {
        if (mutation.attributeName !== 'class') return;
        const theme = mutation.target.classList.contains('light') ? 'github-light' : 'github-dark';

        const message = {
          type: 'set-theme',
          theme: theme,
        };

        utterances.contentWindow.postMessage(message, 'https://utteranc.es');
      }
    });

    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('theme', utterancesTheme);
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('repo', 'GabrielDeFreitas/gabriel-freitas-blog');
    scriptEl.setAttribute('issue-term', 'title');
    commentBox.current.replaceChildren(scriptEl);

    watchThemeSwitch.observe(document.body, { attributes: true });
  }, [title]);

  return <div ref={commentBox} />;
};

export default Comments;
