const features = [
  {
    imgUrl: "illustration",
    title: "Search and Filter",
    description:
      " Effortlessly search and filter through a range of student apartments based on your preferences - budget, location, amenities,and more",
  },

  {
    imgUrl: "illustration",
    title: "Verified Listings",
    description:
      " All our listings are verified to ensure a safe and secure housing experience for students",
  },

  {
    imgUrl: "illustration",
    title: "Budget-Friendly Options",
    description:
      " Discover apartments that fit your budget without compromising  on comfort and quality.",
  },
];

function Feature({ children }) {
  return <section className="features">{children}</section>;
}

function Features() {
  return (
    <Feature>
      <h3 className="heading">Features</h3>
      <h2 className="sub-heading">Our features and services</h2>
      <FeatureCard />
    </Feature>
  );
}

function FeatureCard() {
  return (
    <div className="feature">
      {features.map((feat) => {
        return (
          <div className="feature__card" key={feat.title}>
            <div className="feature__ilustration">{feat.imgUrl}</div>
            <div className="feature__text">
              <p className="feature__heading">{feat.title}</p>
              <p className="feature__description">{feat.description}</p>
            </div>
            <button className="feature__btn">More</button>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Features;
