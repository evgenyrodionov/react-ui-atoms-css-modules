import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <span {...props} className={cn(styles.helper, props.className)}>
      {props.children}
    </span>
  );
};
