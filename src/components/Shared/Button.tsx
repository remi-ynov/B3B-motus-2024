import React from 'react';
interface Props {
    label: string;
    onClick: () => void;
}
const Button: React.FC<Props> = ({ label, onClick }) => {
    return (
      <button onClick={onClick} className="bg-green-700 rounded-md p-4 text-white">
          {label}
      </button>
    );
};
export default Button;
