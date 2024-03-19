import Motion from "./component/motion.js";
import Animate from "./component/animate.js";
import Fading from "./component/fading.js";

export default function MyComponent({ children }) {
  return (
    <div>
      <Motion>
        <p>Motion Function</p>
      </Motion>

      <Animate>
        <p>Animate</p>
      </Animate>
      <Fading>
        <p>Fading</p>
      </Fading>
    </div>
  );
}
