import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CountdownTimer = ({ onFinish }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onFinish();
    }
  }, [count, onFinish]);

  return <div>{count > 0 ? count : ""}</div>;
};

CountdownTimer.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
