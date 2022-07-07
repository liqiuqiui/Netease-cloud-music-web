const prod = 'https://music-api-liqiuqiu.vercel.app';
const dev = 'http://127.0.0.1:3333';
export const BaseUrl = process.env.NODE_ENV === 'development' ? dev : prod
export const Timeout = 5000;
