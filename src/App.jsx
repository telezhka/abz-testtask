import { Hero } from 'partials/Hero/Hero';
import { Header } from 'partials/Header/Header';
import { GetReqBlock } from 'partials/GetReqBlock/GetReqBlock';
import { PostReqBlock } from 'partials/PostReqBlock/PostReqBlock';
import './styles/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPositions, fetchToken } from './redux/operations';
import { getError, getIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchToken());
    dispatch(fetchPositions());
  }, [dispatch]);

  return isLoading ? (
    <p>Page is loading</p>
  ) : error ? (
    <p>Oops! We fucked up...</p>
  ) : (
    <>
      <Header />
      <Hero />
      <GetReqBlock />
      <PostReqBlock />
    </>
  );
}

export default App;
