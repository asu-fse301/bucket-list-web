import { withRouter } from 'next/router';
import { useFormInput } from '../utils/useFormInput';
import Header from '../components/header';
import Headline from '../components/headline';
import HeroContainer from '../components/hero-container';
import Menu from '../components/menu';
import Body from '../components/body';
import Footer from '../components/footer';
import PageWrapper from '../components/page-wrapper';

function Main({ router }) {
  let state = useFormInput('Campaign');

  return (
    <PageWrapper router={router}>
      <Header />
      <Headline />
      <HeroContainer />
      <Menu {...state} />
      <Body {...state} />
      <Footer />
    </PageWrapper>
  );
}

export default withRouter(Main);
