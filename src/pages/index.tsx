import { Input } from '@/common/components';
import { FormProvider, useForm } from 'react-hook-form';
import { HiMail } from 'react-icons/hi';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = zod.object({
  name: zod.string().nonempty(),
});

export default function Home() {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: 'My name' }, mode: 'all' });
  return (
    <FormProvider {...form}>
      <div className='w-screen h-screen bg-gray-50'>
        <Input name='name' icon={<HiMail />} />
      </div>
    </FormProvider>
  );
}
