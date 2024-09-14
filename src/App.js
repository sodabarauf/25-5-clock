import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  reset,
  playPause,
  tick,
} from './redux/actions';
import SetTimer from './components/SetTimer';
import Clock from './components/Clock';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const breakCount = useSelector((state) => state.breakCount);
  const sessionCount = useSelector((state) => state.sessionCount);
  const clockCount = useSelector((state) => state.clockCount);
  const currentTimer = useSelector((state) => state.currentTimer);
  const isPlaying = useSelector((state) => state.isPlaying);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (!isPlaying && clockCount !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, clockCount, dispatch]);

  useEffect(() => {
    if (clockCount === 0) {
      const audio = document.getElementById('beep');
      if (audio) {
        audio.play();
      }
    }
  }, [clockCount]);

  const handlePlayPause = () => {
    if (clockCount > 0) {
      dispatch(playPause());
    }
  };

  const handleReset = () => {
    dispatch(reset());

    const audio = document.getElementById('beep');
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <div className="flex">
        <SetTimer
          title="Break"
          count={breakCount}
          handleDecrease={() => dispatch(decrementBreak())}
          handleIncrease={() => dispatch(incrementBreak())}
        />
        <SetTimer
          title="Session"
          count={sessionCount}
          handleDecrease={() => dispatch(decrementSession())}
          handleIncrease={() => dispatch(incrementSession())}
        />
      </div>
      <Clock
        currentTimer={currentTimer}
        clockCount={clockCount}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleReset={handleReset}
        convertToTime={convertToTime}
      />
      <audio
        id="beep"
        preload="auto"
        src="https://www.pacdv.com/sounds/interface_sound_effects/sound107.wav"
      >
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default App;
