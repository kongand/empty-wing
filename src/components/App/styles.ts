import { css } from '@emotion/react';

const appStyles = css`
  height: 100%;
`;

const headerStyles = css`
  background: #fff;
  padding: 0;
`;

const logoStyles = css`
  height: 2rem;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.3);
`;

const triggerStyles = css`
  padding: 0 1.5rem;
  font-size: 1.125rem;
  line-height: 4rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`;

const contentStyles = css`
  background: #fff;
  margin: 1.5rem 1rem;
  padding: 1.5rem;
  min-height: 17.5rem;
`;

export { appStyles, headerStyles, logoStyles, triggerStyles, contentStyles };
