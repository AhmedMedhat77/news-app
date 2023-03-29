import React from "react";
import Button from "../../Components/Button/Button";
import HeaderItem from "../../Components/HeaderItem/HeaderItem";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero__left">
        <div className="hero__left__banner" />

        <div className="hero__left__content">
          <h1 className="hero__left__content__title">
            The Bright Future of Web 3.0?
          </h1>
          <div className="hero__left__content__description">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="hero__left__content__description__action">
              <Button
                classes={"btn btn--primary btn--large"}
                title="READ MORE"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <h2 className="hero__right__title">NEW</h2>
        <HeaderItem
          title="Hydrogen Vs Electroinic cars"
          description=" Will hydrogen-fueled cars
        ever catch up to EVs?"
        />
        <HeaderItem
          title="The Downsides of AI Artistry"
          description="What are the possible
          adverse effects of on-demand AI image generation?"
        />
        <HeaderItem
          title=" Is VC Funding Drying Up?"
          description="Private funding by VC firms is down 50% YOY. We take a look at what that
    means."
        />
      </div>
    </div>
  );
}

export default Hero;
