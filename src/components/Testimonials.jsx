import { useState } from "react";

const testimonials = [
  {
    name: "Jayman",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, nobis fuga quidem ratione error deserunt voluptatem repudiandae dolor officia excepturi velit doloremque explicabo unde molestias.",
    job: "Front-end developer at BigOstack",
  },
  {
    name: "Twisted",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. voluptatem repudiandae dolor officia excepturi velit doloremque explicabo unde molestias.",
    job: "Back-end developer at BigOstack",
  },
  {
    name: "Muiz",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, nobis fuga quidem ratione error deserunt voluptatem repudiandae dolor officia molestias.",
    job: "Front-end Engineer at BigOstack",
  },
  {
    name: "Muhammed",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, nobis fuga quidem ratione error deserunt voluptatem repudiandae dolor officia excepturi velit doloremque explicabo unde molestias.",
    job: "Front-end developer at BigOstack",
  },
  {
    name: "Jacob",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, nobis fuga quidem ratione error deserunt voluptatem repudiandae dolor officia excepturi velit doloremque explicabo unde molestias.",
    job: "Front-end developer at BigOstack",
  },
];

function Testimonials() {
  const [step, setStep] = useState(0);

  function handleMoveRight() {
    if (step < 4) setStep((step) => step + 1);
  }
  function handleMoveLeft() {
    if (step > 0) setStep((step) => step - 1);
  }

  return (
    <section className="testimonial">
      <div className="testimonial__board">
        <p>
          Don't just take our word for it. Hear what fellow students have to say
          about their experience using [Your Service Name].
        </p>
      </div>
      <div className="testimonial__box">
        <div>{testimonials[step].text}</div>
        <div className="text">{testimonials[step].name}</div>
        <p>{testimonials[step].job}</p>

        <div className="testimonial__img">
          {testimonials.map((testimonial, i) => {
            return (
              <div key={testimonial.name} className="testimonial__img-box">
                <img
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt={testimonial.name}
                  className={
                    step === i
                      ? `testimonial__img-box--${i} active`
                      : step === i + 1 || step === i - 1
                      ? `testimonial__img-box--${i} active-2`
                      : `testimonial__img-box--${i}`
                  }
                />
              </div>
            );
          })}
        </div>
        <Button className="left-btn" onClick={handleMoveLeft}>
          &larr;
        </Button>
        <Button className="right-btn" onClick={handleMoveRight}>
          &rarr;
        </Button>
      </div>
    </section>
  );
}

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default Testimonials;
