import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VITE_BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API.interceptors.request.use(async config => {
//   const token = JSON.parse(AsyncStorage.getItem('token_data'));
//   const {expires_at, refresh_token, access_token} = token;
//   let accessToken = access_token;
//   if (expires_at < Date.now()) {
//     accessToken = await getRefreshToken(refresh_token);
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   } else {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//     console.log('Token not expired');
//     return config;
//   }
// });

// const getRefreshToken = async refreshToken => {
//   try {
//     const payload = {
//       refresh_token: refreshToken,
//     };
//     const res = await API.post('/refresh', payload);
//     AsyncStorage.setItem('token_data', JSON.stringify(res.data.data));
//     console.log('new token', res.data.data.access_token);
//     return res.data.data.access_token;
//   } catch (error) {
//     console.log(error);
//     window.location.href = '/login';
//   }
// };

export default API;
