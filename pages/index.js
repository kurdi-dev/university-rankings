import MainLayout from '../layout/main';
import Contribute from '../modules/home/Contribute';
import Hero from '../modules/home/Hero';

export default function Home() {
  return (
    <MainLayout title={'Home'}>
      <Hero />
      <Contribute />
    </MainLayout>
  );
}
