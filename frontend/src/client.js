import Client, { jwtPlugin } from '@synapsestudios/fetch-client';
import store from 'store2';
import config from './config';

const client = new Client({ url: config.apiUrl });

client.addPlugin(jwtPlugin);
client.setJwtTokenGetter(() => store.get('token'));

export default client;
