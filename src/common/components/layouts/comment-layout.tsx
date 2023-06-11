import CommentSection from '@/pages/comment/[id]';
import { Commenters } from '../comment/Commenters';
import { Content } from '../comment/Content';
import NavBar from '../navbar/navbar';

export const CommentLayout = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-2 w-full h-screen overflow-hidden'>
        <div
          id='navbar'
          className='col-span-12 bg-red-300  h-[3.75rem]
px-4  flex items-center'
        >
          Navbar
          {/* <NavBar></NavBar> */}
        </div>
        <div id='content' className='col-span-6 h-[calc(100vh-3.75rem)] p-5 m-5'>
          <Commenters />
        </div>
        <div id='content' className='col-span-6  h-[calc(100vh-3.75rem)] p-5 m-5'>
          <Content />
        </div>
      </div>
    </>
  );
};
