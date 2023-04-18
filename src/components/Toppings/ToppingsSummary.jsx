import React from 'react';
import classes from './ToppingsSummary.module.css';

const ToppingsSummary = () => {
  return (
    <section className={classes.summary}>
      <p>최상급의 우유로 만든 꾸덕한 그릭요거트, 최고급 토핑을 제공하는 'GreekZik'입니다.</p>
      <p>완벽히 커스텀 된 당신만의 그릭요거트를 즐기세요!</p>
    </section>
  );
};

export default ToppingsSummary;