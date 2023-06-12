import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    redirect: {
      permanent: true,
      destination: '',
    },
  };
};

export default function Home() {
  return <div></div>;
}
