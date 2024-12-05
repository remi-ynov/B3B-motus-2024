import React from 'react';
interface Props {
    content: string|null;
}
const Message: React.FC<Props> = ({ content }) => {
    return content ? (
      <div className="my-2 border-2 border-blue-500 p-4 text-center">
          {content}
      </div>
    ) : null;
};
export default Message;
