import React from 'react';

import { ArgyleLinkProps } from './ArgyleLink.props';
import { useArgyleLink } from '../../hooks/useArgyleLink';

export const ArgyleLink: React.FC<ArgyleLinkProps> = props => {
  const { children, options, ...rest } = props;
  const { error, open } = useArgyleLink(options);

  return (
    <button disabled={!!error} onClick={() => open()} {...rest}>
      {children}
    </button>
  );
};
