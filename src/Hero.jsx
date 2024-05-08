import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus tempora corrupti temporibus nulla doloremque culpa quas
            ipsam quia nihil? Vero maxime quaerat neque error molestias vel.
            Molestias sunt quis illo, laudantium sapiente, voluptatibus nulla
            necessitatibus quo id nostrum suscipit labore error cumque aut
            incidunt similique tenetur velit dolore. Odio, atque!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
