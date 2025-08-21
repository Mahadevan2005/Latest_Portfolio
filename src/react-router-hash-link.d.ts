declare module 'react-router-hash-link' {
  import { ComponentType } from 'react';
  import { NavLinkProps } from 'react-router-dom';

  export const HashLink: ComponentType<NavLinkProps & { smooth?: boolean }>;
  export default HashLink;
}
