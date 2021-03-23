import { useState } from 'react';

export default function Message(props) {
  const { socket } = props;
  const [msg, setMsg] = useState([]);
  socket.off('chat');
  socket.on('chat', (data) => {
    const message = data.message;
    const attendeeName = data.attendeeName;
    setMsg((prev) => {
      // to avoid data mutation, create a new array
      const processed = prev
      processed.push(`${attendeeName}: ${message}`)
      return processed.reverse()});
  });


  return <div className="messages">{msg.length ? msg.map((msg) => msg && <h4 className="message-text">{msg}</h4>) : null}</div>;
}
