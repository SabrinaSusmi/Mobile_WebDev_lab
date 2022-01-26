import './App.css';
import React, { useState, useContext } from 'react';
import TimerList from './TimerList.js';
import { TimerContext } from './TimerContext';


function App() {

  const [formVisible, setFormVisible] = useState(false);

  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [timerList, setTimerList] = useContext(TimerContext);
  let list = [...timerList];

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    list.push({
      title: title,
      project: project,
      edit: false,
      timer: '00:00:00',
      hour: 0,
      min: 0,
      sec: 0,
    });
    setTitle('');
    setProject('');
    setTimerList(list);
    setFormVisible(false);
  };

  return (
    <div className='App'>
      <div className='app__header'>Timers</div>
      <div className='timer_section'>
        <TimerList />
        
        {formVisible && (
          <div className='timer'>
          <form className='timer__form' onSubmit={handleSubmit}>
          <div className='timerInput_One'>
            <div className='timerInput__label'>Title</div>
            <input
              className='timerInput'
              type='text'
              value={title}
              onChange={handleTitle}
            />
            <div className='timerInput__label'>Project</div>
            <input
              className='timerInput'
              type='text'
              value={project}
              onChange={handleProject}
            />
          </div>
          <div className='edit_buttons'>
            <div
              className='timer'
              className='timerEdit__update'
              type='submit'
              onClick={handleSubmit}>
              Create
            </div>
            <div className='timerEdit__cancel' onClick={() => setFormVisible(!formVisible)}>
              Cancel
            </div>
          </div>
        </form>
        
        </div>
      )}
        <div
          className='add_button' onClick={() => {
            setFormVisible(!formVisible);
          }}>
          +
        </div>

      </div>
    </div>
  );
}

export default App;
