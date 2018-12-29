import React from 'react';
import Countdown from 'react-countdown-now';
import DimensionedExample from './Confetti.js';
const NYEWishes = () => (
  <div>
    <DimensionedExample/>
    <p className="animated bounce infinite">Happy New Year from Otix!</p>
  </div>
);

const CountDown = () => (
  <Countdown date={ new Date(2019, 0, 1) }>
    <NYEWishes/>
  </Countdown>
)

export default CountDown;
