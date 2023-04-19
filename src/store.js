import { writable } from 'svelte/store';
const messageStore = writable({ data: 'Start', time: new Date() });

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'YOUR_WEBSCOKET URL'
    : 'wss://hsvtfbxtsj.execute-api.eu-west-1.amazonaws.com/production';
const socket = new WebSocket(serverUrl);
const addToArray = (event) => {
  messageStore.update(() => {
    return event;
  });
};
const start = () => {
  socket.send('https://nytimes.com'); // On click we send a message to the server
};

socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
  addToArray({ time: new Date(), data: event.data }); // When the server respons with a message we save it in an array
});
export default {
  subscribe: messageStore.subscribe,
  start,
};
