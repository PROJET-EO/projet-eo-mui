import { getCookie, setCookie } from 'cookies-next';

const tokenItem = 'token-cookie';
const userItem = 'user-cookie';

const parseObject = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const setToken = (token: string) => setCookie(tokenItem, token);
const setUser = (user: any) => setCookie(userItem, user);

const getToken = (cookies?: Record<string, any>) => (cookies ? cookies[tokenItem] : getCookie(tokenItem));
const getUser = (cookies?: Record<string, any>) => parseObject(cookies ? cookies[userItem] : getCookie(userItem));

export const cookies = {
  setToken,
  setUser,
  getUser,
  getToken,
};
