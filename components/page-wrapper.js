import Head from 'next/head';
import Styles from '../styles/theme';
import '../styles/reset.css';
import '../styles/share.css';

function PageWrapper({ children, router }) {
  let [index, pathname] = router.pathname.split('/');

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title children={pathname || 'Genie'} />
      </Head>
      <Styles />
      {children}
    </>
  );
}

export default PageWrapper;
