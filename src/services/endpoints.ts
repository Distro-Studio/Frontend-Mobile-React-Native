import API from './AxiosInstance';

async function getData() {
  const response = await API.get('/your-endpoint-start-here');
  return response;
}
async function postData(variable1: any, variable2: any) {
  const response = await API.post('/your-endpoint-start-here', {
    variable1,
    variable2,
  });
  return response;
}

async function authLogin(formData) {
  const response = await API.post('/login', formData);
  return response;
}

async function getUser() {
  const response = await API.get('/getuserinfo');
  return response;
}

async function inputDataPersonal1(formData) {
  const response = await API.get('/input-personal-step1', formData);
  return response;
}

async function inputDataPersonal2(formData) {
  const response = await API.get('/input-personal-step1', formData);
  return response;
}

const APIEndpoints = {
  getData,
  postData,
  authLogin,
  getUser,
  inputDataPersonal1,
  inputDataPersonal2,
};

export default APIEndpoints;
