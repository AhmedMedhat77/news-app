import React from "react";
import Hero from "../../Layouts/Hero/Hero";
import Card from "../../Components/Card/Card";
import PC from "../../assets/image-retro-pcs.jpg";
import Laptop from "../../assets/image-top-laptops.jpg";
import controller from "../../assets/image-gaming-growth.jpg";
function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="home__products">
        <Card
          img={PC}
          name="Retro"
          title={"Reviving Retro PCs"}
          count="01"
          description=" What happens when old PCs are given modern
    upgrades?"
        />
        <Card
          img={Laptop}
          name="Retro"
          title={"Top 10 Laptops of 2022"}
          count="02"
          description="Our best picks for various needs and
          budgets."
        />
        <Card
          img={controller}
          name="Retro"
          title={"The Growth of Gaming"}
          count="03"
          description="How the pandemic has sparked fresh
          opportunities."
        />
      </section>
    </div>
  );
}

export default Home;
