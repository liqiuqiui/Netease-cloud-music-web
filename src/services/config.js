// const prod = 'http://123.207.32.32:9001';
// const dev = 'http://123.207.32.32:9001';
// export const BaseUrl = process.env.NODE_ENV === 'development' ? dev : prod

const prod = 'http://127.0.0.1:3333';
const dev = 'http://127.0.0.1:3333';
export const BaseUrl = process.env.NODE_ENV === 'development' ? dev : prod
export const Timeout = 5000;
