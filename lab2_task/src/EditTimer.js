import React, { useState } from 'react';

import './style.css';
import TimerItem from './TimerItem';

const EditTimer = (props) => {
  let editTimerList = [...props.timerList];

  const [title, setTitle] = useState(props.title);
  const [project, setProject] = useState(props.project);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTimerList(
      editTimerList.map((timer, index) =>
        props.id === index
          ? { ...timer, title: title, project: project, edit: false }
          : timer
      )
    );
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const alterEdit = () => {
    props.setTimerList(
      editTimerList.map((timer, index) =>
        props.id === index
          ? { ...timer, edit: !props.timerList[props.id].edit }
          : timer
      )
    );
  };

  return (
    <>
      {props.edit ? (
        <div className='timer'>
        <form className='timer__form' onSubmit={handleSubmit}>
          <div className='timer_section'>
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
        </form>
        <div className='edit_buttons'>
          <div
            className='timer'
            className='timerEdit__update'
            type='submit'
            onClick={handleSubmit}>
            Update
          </div>
          <div className='timerEdit__cancel' onClick={alterEdit}>
            Cancel
          </div>
        </div>
      </div>
      ) : (
        <TimerItem
          title={props.title}
          project={props.project}
          alterEdit={alterEdit}
          id={props.id}
        />
      )}
    </>
  );
};

export default EditTimer;
