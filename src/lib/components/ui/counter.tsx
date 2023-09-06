'use client';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '@redux/slices/counter-slice';

const Counter = (): JSX.Element => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-10">
      <div className="mb-5 flex items-center gap-3">
        <button
          className="rounded-md border border-slate-900 p-3 hover:bg-slate-900 hover:text-white"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
        <button
          className="rounded-md border border-slate-900 p-3 hover:bg-slate-900 hover:text-white"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
        <button
          className="rounded-md border border-slate-900 p-3 hover:bg-slate-900 hover:text-white"
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>
      </div>
      <div>Count: {count}</div>
    </div>
  );
};

export { Counter };
