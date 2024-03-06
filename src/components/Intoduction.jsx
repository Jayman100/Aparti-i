function Introduction() {
  return (
    <section className="intro">
      <h3 className="intro__heading">
        Welcome to
        <span>
          Apartment
          {/* Project name*/}{" "}
        </span>
        , where finding the perfect student apartment is made simple.
      </h3>
      <p className="intro__description">
        We understand the unique needs of students when it comes to housing. Our
        platform is designed to connect you with affordable and student-friendly
        apartments in <span style={{ color: "blue" }}>City/Campus Name</span>.
      </p>
    </section>
  );
}

export default Introduction;
