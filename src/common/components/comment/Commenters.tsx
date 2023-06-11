export const Commenters = () => {
  return (
    <>
      <div className='flex flex-col w-auto h-auto mb-4'>
        <div className='flex justify-end items-center w-full'></div>
        <div className='flex overflow-x-hidden overflow-y-scroll mb-1 w-full h-5/6 bg-gray-100'>
          <div className='w-screen'>
            <div className=' p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>User Comment here</h5>
              </a>
              <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>User owner | Date</p>
            </div>
            <a href='#' className='inline-flex items-right float-right text-blue-600 hover:underline mx-4'>
              Reply
            </a>
          </div>
        </div>
        <div className='p-5'>
          <form name='sendComment' className='flex absolute bottom-5 left-0 mr-3 ml-4 justify-around items-center w-3/6 h-16 text-white bg-yellow-500'>
            <textarea className='px-2 m-2 mx-3 w-full h-14 text-black rounded-md focus:outline-none apparence-none' name='content' />
            <button type='submit' className='mx-2'>
              Send Icon
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
