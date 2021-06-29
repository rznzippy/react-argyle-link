import React from 'react';
import { ArgyleCreateOptions } from '../../argyle';

export interface ArgyleLinkProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: React.ReactChild;
  options: ArgyleCreateOptions;
}
