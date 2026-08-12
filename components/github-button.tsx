'use client';

import ReactGithubButton from 'react-github-btn';

export function GithubButton() {
  return (
    <ReactGithubButton
      data-size='large'
      data-show-count={false}
      data-icon='octicon-star'
      aria-label='Star sina-byn/react-slot on GitHub'
      href='https://github.com/sina-byn/react-gooey-cursor'
      data-color-scheme='no-preference: dark; light: dark; dark: dark;'
    >
      Star
    </ReactGithubButton>
  );
}
