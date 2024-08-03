'use client'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/exampleSlice';
import { fetchExampleData } from '../redux/actions/exampleActions';
import { useEffect } from 'react';
import { RootState, AppDispatch } from '../redux/store';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);
  const status = useSelector((state: RootState) => state.example.status);

  useEffect(() => {
    dispatch(fetchExampleData());
  }, [dispatch]);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h2>Status: {status}</h2>
    </div>
  );
};

export default Home;
