import React, { useEffect, useRef } from 'react';

const Comments = ({ title }: { title: string }) => {
  const commentBox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const utterancesTheme = theme === 'light' ? 'github-light' : 'github-dark';

    const observeThemeSwitch = () => {
      const utterances = document.querySelector('.utterances-frame') as HTMLIFrameElement | null;
      if (utterances) {
        const themeClass = utterances.classList.contains('github-light') ? 'light' : 'dark';
        const message = {
          type: 'set-theme',
          theme: themeClass,
        };
        const contentWindow = utterances.contentWindow;
        if (contentWindow) {
          contentWindow.postMessage(message, 'https://utteranc.es');
        }
      }
    };

    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('theme', utterancesTheme);
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('repo', 'GabrielDeFreitas/gabriel-freitas-blog');
    scriptEl.setAttribute('issue-term', 'title');

    if (commentBox.current) {
      commentBox.current.replaceChildren(scriptEl);
    }

    observeThemeSwitch();
    const observer = new MutationObserver(observeThemeSwitch);
    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [title]);

  return <div ref={commentBox} />;
};

export default Comments;
