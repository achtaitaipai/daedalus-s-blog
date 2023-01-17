import "./style.css";
import ariane from "ariane-router";

const fadeOut = ariane.makeAnim("main", [{ opacity: 1 }, { opacity: 0 }], {
  duration: 300,
  easing: "ease-out",
});
const fadeIn = ariane.makeAnim("main", [{ opacity: 0 }, { opacity: 1 }], {
  duration: 500,
  easing: "ease-out",
});

const slideToLeft = ariane.makeAnim(
  "main",
  [
    { transform: "translate(0,0)" },
    { transform: "translate(-100vw,0)  scaleX(0)" },
  ],
  {
    duration: 300,
    fill: "forwards",
    easing: "ease-in",
  }
);
const slideFromRight = ariane.makeAnim(
  "main",
  [{ transform: "translate(100vw,0)" }, { transform: "translate(0,0)" }],
  {
    duration: 200,
    fill: "forwards",
  }
);
const slideToRight = ariane.makeAnim(
  "main",
  [
    { transform: "translate(0,0)" },
    { transform: "translate(100vw,0) scaleX(0)" },
  ],
  {
    duration: 300,
    fill: "forwards",
  }
);
const slideFromLeft = ariane.makeAnim(
  "main",
  [{ transform: "translate(-100vw,0)" }, { transform: "translate(0,0)" }],
  {
    duration: 200,
    fill: "forwards",
  }
);
ariane.addActions({
  slideFromLeft,
  slideToRight,
  slideToLeft,
  slideFromRight,
  fadeIn,
  fadeOut,
});
ariane.defineConfig({ before: "fadeOut", between: "fadeIn" });
ariane.start();
