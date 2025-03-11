import Client from './instance';

export async function getRequest(params: object, URL: string) {
  const response = await Client.get(URL, {params});
  // console.log('GET request data ==> ', response.data);
  return response;
}
export async function postRequest(payload: object, URL: string) {
  const response = await Client.post(URL, payload);
  // console.log('POST request  ==> ', response);
  return response;
}
