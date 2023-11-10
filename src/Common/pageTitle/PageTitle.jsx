import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const PageTitle = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);

  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};
