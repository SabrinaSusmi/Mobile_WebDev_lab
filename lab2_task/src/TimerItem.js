import React, { useState, useEffect, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TimerContext } from './TimerContext';

const TimerItem = (props) => {
  const [stopClock, setStopClock] = useState(true);
  const [nextSecondState, setNextSecondState] = useState(true);
  
  const [timerList, setTimerList] = useContext(TimerContext);
  let list = [...timerList];

  const startTimer = () => {
    setStopClock(!stopClock);
  };
  function stopTimer() {
    setStopClock(!stopClock);
  }

  const deleteTimer = () => {
    setTimerList(
      list.filter((timer, index) => props.id !== index)
    );
  };

  useEffect(() => {
    if (!stopClock) {
      counter();
      setTimeout(function () {
        setNextSecondState(!nextSecondState);
      }, 1000);
    }
  }, [stopClock, nextSecondState]);

  const counter = () => {
    if (stopClock === false) {
      setTimerList(
        list.map((timer, index) =>
          props.id === index
            ? {
                ...timer,
                hour:
                  list[props.id].min === 59
                    ? list[props.id].hour + 1
                    : list[props.id].hour,
                min:
                  list[props.id].min === 59
                    ? 0
                    : list[props.id].sec === 59
                    ? list[props.id].min + 1
                    : list[props.id].min,
                sec:
                  list[props.id].sec === 59 ||
                  list[props.id].min === 59
                    ? 0
                    : list[props.id].sec + 1,
              }
            : timer
        )
      );
    }
  };

  return (
    <div className='timer'>
      <div className='timer__rowOne'>
        <div className='timer__title'>{props.title}</div>
        <div className='timer__project'>{props.project}</div>
      </div>
      <div className='timer__rowTwo'>
        <div className='timer__timer'>
          {timerList[props.id].hour < 10 ? (<span>0{timerList[props.id].hour}</span>) : (<span>{timerList[props.id].hour}</span>)}
          :
          {timerList[props.id].min < 10 ? (<span>0{timerList[props.id].min}</span>) : (<span>{timerList[props.id].min}</span>)}
          :
          {timerList[props.id].sec < 10 ? (<span>0{timerList[props.id].sec}</span>) : (<span>{timerList[props.id].sec}</span>)}
        </div>
      </div>
      <div className='timer__rowThree'>
        <div
          style={{ cursor: 'pointer' }}
          onClick={deleteTimer}>
          <DeleteIcon />
        </div>
        <div style={{ cursor: 'pointer' }} onClick={props.alterEdit}>
          <EditIcon />
        </div>
      </div>
      {stopClock && (
        <div className='timer__button' onClick={startTimer}>
          Start
        </div>
      )}
      {!stopClock && (
        <div className='timer__buttonRed' onClick={stopTimer}>
          Stop
        </div>
      )}
    </div>
  );
};

export default TimerItem;
