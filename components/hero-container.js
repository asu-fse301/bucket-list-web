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
      src="../static/iphonesX.png"
      alt="2 iPhones running the app"
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
