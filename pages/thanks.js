import { withRouter } from 'next/router';
import Header from '../components/header';
import PageWrapper from '../components/page-wrapper';

function Main({ router }) {
  return (
    <PageWrapper router={router}>
      <Header />
      <section className="Headline Thanks">
        <h2 children="Thanks." />
        <p children="We'll be in touch." />
      </section>
    </PageWrapper>
  );
}

export default withRouter(Main);
