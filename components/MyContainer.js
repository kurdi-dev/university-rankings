import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';

export default function MyContainer(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Iraq University Rankings',
    description: `Iraq university rankings based on Webometrics Ranking of World Universities`,
    image: 'https://universities.kurdi.dev/images/banner.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={meta.description} />
        <meta
          property='og:url'
          content={`https://universities.kurdi.dev${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://universities.kurdi.dev${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Iraq University Rankings' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='Iraq University Rankings' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Header />
      <main>
        <Container maxW='container.lg'>{children}</Container>
        <Footer />
      </main>
    </>
  );
}
