import { GetServerSidePropsContext } from 'next';
import { cookies } from '../utils';

export const getPermission = (ctx: GetServerSidePropsContext) => {
  const token = cookies.getToken(ctx.req.cookies);
  return token && token.length > 0 ? 'Authenticated' : 'NotAuthenticated';
};
