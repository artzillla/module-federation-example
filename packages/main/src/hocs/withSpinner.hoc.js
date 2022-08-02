import React from 'react';
import { Spinner } from 'lib/Spinner';

export function withSpinner(Component) {
  function ComponentWithSpinner({ isLoading, ...passthroughProps }) {
    return isLoading ? <Spinner /> : <Component {...passthroughProps} />;
  }

  ComponentWithSpinner.displayName = `${Component.name}WithSpinner`;

  return ComponentWithSpinner;
}
