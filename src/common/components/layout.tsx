import NavBar from './navbar/navbar';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative w-screen h-screen'>
      <NavBar />
      <div>
        <div className='w-full h-full'>{children}</div>
      </div>
    </div>
  );
};
