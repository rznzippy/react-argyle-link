import { useEffect, useState } from 'react';
import useScript from 'react-script-hook';

import { ArgyleCreateOptions, ArgyleInstance } from '../argyle';

const ARGYLE_LINK_DEFAULT_URL = 'https://plugin.argyle.io/argyle.web.v3.js';

export const useArgyleLink = (config: ArgyleCreateOptions) => {
  const [loading, error] = useScript({ src: config.apiHost || ARGYLE_LINK_DEFAULT_URL, checkForExisting: true });
  const [argyle, setArgyle] = useState<ArgyleInstance | null>(null);
  const emptyCallback = () => {};

  useEffect(() => {
    if (loading || !window.Argyle || error) {
      if (error) {
        console.log(error);
      }
      return;
    }

    if (argyle) {
      argyle.close();
    }

    const instance = window.Argyle.create({
      ...config
    });

    setArgyle(instance);

    return () => instance.close();
  }, [loading, error, config]);

  return {
    error,
    ready: argyle !== null && !loading,
    open: argyle ? argyle.open : emptyCallback,
    close: argyle ? argyle.close : emptyCallback,
  }
};
