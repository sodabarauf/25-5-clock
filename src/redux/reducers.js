import {
    INCREMENT_BREAK,
    DECREMENT_BREAK,
    INCREMENT_SESSION,
    DECREMENT_SESSION,
    RESET,
    PLAY_PAUSE,
    TICK,
  } from './actions';
  
  const initialState = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false,
    isStarted: false,
  };
  
  const rootReducer = (state, action) => {
    const currentState = state === undefined ? initialState : state;
  
    switch (action.type) {
      case INCREMENT_BREAK:
        return currentState.breakCount < 60 && !currentState.isPlaying
          ? { ...currentState, breakCount: currentState.breakCount + 1 }
          : currentState;
      case DECREMENT_BREAK:
        return currentState.breakCount > 1 && !currentState.isPlaying
          ? { ...currentState, breakCount: currentState.breakCount - 1 }
          : currentState;
      case INCREMENT_SESSION:
        return currentState.sessionCount < 60 && !currentState.isPlaying
          ? {
            ...currentState,
            sessionCount: currentState.sessionCount + 1,
            clockCount: currentState.isStarted
              ? currentState.clockCount
              : (currentState.sessionCount + 1) * 60,
          }
          : currentState;
      case DECREMENT_SESSION:
        return currentState.sessionCount > 1 && !currentState.isPlaying
          ? {
            ...currentState,
            sessionCount: currentState.sessionCount - 1,
            clockCount: currentState.isStarted
              ? currentState.clockCount
              : (currentState.sessionCount - 1) * 60,
          }
          : currentState;
      case RESET:
        return {
          ...initialState,
          clockCount:
              currentState.currentTimer === 'Session'
                ? currentState.sessionCount * 60
                : currentState.breakCount * 60,
        };
      case PLAY_PAUSE:
        if (!currentState.isPlaying && !currentState.isStarted) {
          return {
            ...currentState,
            isPlaying: !currentState.isPlaying,
            isStarted: true,
            clockCount: currentState.sessionCount * 60,
          };
        }
        return { ...currentState, isPlaying: !currentState.isPlaying };
      case TICK:
        if (currentState.clockCount === 0) {
          return {
            ...currentState,
            currentTimer:
            currentState.currentTimer === 'Session' ? 'Break' : 'Session',
            clockCount:
                (currentState.currentTimer === 'Session'
                  ? currentState.breakCount
                  : currentState.sessionCount) * 60,
          };
        }
        return { ...currentState, clockCount: currentState.clockCount - 1 };
      default:
        return currentState;
    }
  };
  
  export default rootReducer;