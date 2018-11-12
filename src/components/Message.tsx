import React from 'react';

export interface MessageProps {
  message: string
}
 
const Message: React.SFC<MessageProps> = ({message}: MessageProps) => {
  return <div>i'm message {message}</div>
}
 
export default Message;