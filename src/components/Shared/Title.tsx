import React from 'react';

interface Props {
  label: string;
}

const Title: React.FC<Props> = ({ label }) => (
  <h1 className="text-2xl text-center">
    {label}
  </h1>
);


export default Title;
