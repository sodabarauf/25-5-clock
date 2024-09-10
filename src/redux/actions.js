export const INCREMENT_BREAK = 'INCREMENT_BREAK';
export const DECREMENT_BREAK = 'DECREMENT_BREAK';
export const INCREMENT_SESSION = 'INCREMENT_SESSION';
export const DECREMENT_SESSION = 'DECREMENT_SESSION';
export const RESET = 'RESET';
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const TICK = 'TICK';

export const incrementBreak = () => ({
  type: INCREMENT_BREAK,
});

export const decrementBreak = () => ({
  type: DECREMENT_BREAK,
});

export const incrementSession = () => ({
  type: INCREMENT_SESSION,
});

export const decrementSession = () => ({
  type: DECREMENT_SESSION,
});

export const reset = () => ({
  type: RESET,
});

export const playPause = () => ({
  type: PLAY_PAUSE,
});

export const tick = () => ({
  type: TICK,
});
