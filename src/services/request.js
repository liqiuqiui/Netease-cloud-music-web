import axios from 'axios';
import { BaseUrl, Timeout } from './config';

const instance = axios.create({
  baseURL: BaseUrl,
  timeout: Timeout,
  withCredentials: true
})

instance.interceptors.response.use(res => res.data)
export default instance
