import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CountdownTimer = ({ onFinish }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (onFinish) {
      onFinish();
    }
  }, [count, onFinish]);

  return (
    <div>
      <h2>{count > 0 ? count : '¡Explosión!'}</h2>
    </div>
  );
};

CountdownTimer.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
