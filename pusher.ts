import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: '1523085',
  key: 'b9f506ba5bc8b5b96266',
  secret: '61b2ce15ef46940b53bd',
  cluster: 'ap1',
  useTLS: true,
});

export const clientPusher = new ClientPusher('b9f506ba5bc8b5b96266', {
  cluster: 'ap1',
  forceTLS: true,
});
