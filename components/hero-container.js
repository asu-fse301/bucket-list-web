import ShareButtons from './share-buttons';

function HeroContainer() {
  return (
    <section className="HeroContainer">
      <HeroImage />
      <HeroInfo />
    </section>
  );
}

function HeroImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1522582935453-38011c9348e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24ddfead0fb122e33059d2605f036f02&auto=format&fit=crop&w=1951&q=80"
      alt="Sunset"
    />
  );
}

function HeroInfo() {
  return (
    <section className="HeroInfo">
      <p className="TotalAmount">$0</p>
      <p className="Pledged">pledged of $100,000 goal</p>
      <p className="TotalBackers">0</p>
      <p className="Backers">backers</p>
      <p className="TotalDays">90</p>
      <p className="DaysToGo">days to go</p>
      <div className="HeroButtons">
        <button className="BackButton" children="Back this project" />
        <ShareButtons />
      </div>
    </section>
  );
}

export default HeroContainer;
