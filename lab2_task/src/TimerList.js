import React, { useContext } from 'react';
import EditTimer from './EditTimer';
import { TimerContext } from './TimerContext';

const TimerList = () => {
  const [timerList, setTimerList] = useContext(TimerContext);
  return (
    <div>
      {timerList.map((timer, index) => (
        <EditTimer
          key={index}
          id={index}
          title={timer.title}
          project={timer.project}
          timer={timer.timer}
          timerList={timerList}
          setTimerList={setTimerList}
          edit={timer.edit}
        />
      ))}
    </div>
  );
};

export default TimerList;
