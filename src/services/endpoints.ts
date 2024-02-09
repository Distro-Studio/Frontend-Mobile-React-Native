import API from './AxiosInstance';

export function getData() {
  const response = API.get('/your-endpoint-start-here');
  return response;
}
export function postData(variable1: any, variable2: any) {
  const response = API.post('/your-endpoint-start-here', {
    variable1,
    variable2,
  });
  return response;
}
