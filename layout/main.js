import MyContainer from '../components/MyContainer';

export default function MainLayout({ children, title }) {
  return <MyContainer title={title}>{children}</MyContainer>;
}
