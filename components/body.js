import Campaign from './campaign';
import FAQ from './faq';

function Body({ value }) {
  switch (value) {
    case 'FAQ':
      return <FAQ />;
    case 'Campaign':
    default:
      return <Campaign />;
  }
}

export default Body;
