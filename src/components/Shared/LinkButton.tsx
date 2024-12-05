import React from 'react';
import { Link } from 'react-router-dom';
import { Colors } from 'src/types/Colors.ts';

interface Props {
    to: string;
    label: string;
    color?: Colors;
}

const LinkButton: React.FC<Props> = ({ to, label, color = Colors.Blue}) => {
    return (
      <Link to={to} className={`${color} p-4 rounded-md text-white text-center m-2`}>
          {label}
      </Link>
    );
};

export default LinkButton;
