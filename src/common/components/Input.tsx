import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const Input = (props: any) => {
  const { icon, name, ...others } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div className={`relative p-3 pl-10 m-3 rounded border-2 ${!errors[name] ? 'border-gray-500' : 'border-red-500'} w-fit`}>
      <div className='w-fit'>
        {React.cloneElement(icon, { size: '30px', className: `absolute top-1/2 left-2 -translate-y-1/2 ${!errors[name] ? 'text-gray-500' : 'text-red-500'}` })}
      </div>
      <input {...others} {...register(name)} name={name} className='focus:outline-none' />
      {errors[name] ? (
        <div className='flex absolute right-0 bottom-0 justify-end items-center w-full translate-y-5'>
          <p className='text-sm text-red-500 text-end'>{errors[name]?.message as string}</p>
        </div>
      ) : (
        <div className='d-none'></div>
      )}
    </div>
  );
};
