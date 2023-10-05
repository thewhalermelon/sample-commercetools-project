import axios from 'axios';
import { projectKey, clientId, clientSecret, apiUrl, authUrl } from '../sdk-config';
import { Buffer } from 'buffer';

const getAccessToken = async () => {
  const response = await axios.post(
    `${authUrl}/oauth/token`,
    `grant_type=client_credentials&manage_project=${projectKey}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
    },
  );
  return response.data.access_token;
};

export const fetchProducts = async () => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`${apiUrl}/${projectKey}/product-projections`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.results;
};
