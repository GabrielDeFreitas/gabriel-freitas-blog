import React, { Component } from 'react';

export default class Comments extends Component {
  private commentBox: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    const repoName = 'GabrielDeFreitas/gabriel-freitas-blog';
    const domainName = 'gabriel-freitas-blog.vercel.app';
    const scriptEl = document.createElement('script');

    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute('repo', repoName);
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('label', 'comments');
    scriptEl.setAttribute('homepage', `https://${domainName}`);

    this.commentBox.current?.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: '100%' }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
