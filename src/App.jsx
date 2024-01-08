import { Hero } from 'partials/Hero/Hero';
import { Header } from 'partials/Header/Header';
import { GetReqBlock } from 'partials/GetReqBlock/GetReqBlock';
import { PostReqBlock } from 'partials/PostReqBlock/PostReqBlock';
import './styles/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPositions, fetchToken } from './redux/operations';
import {
  getError,
  getIsLoadingToken,
  getIsLoadingContacts,
  getIsLoadingPositions,
} from './redux/selectors';
import { Loader } from 'components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoadingToken = useSelector(getIsLoadingToken);
  const isLoadingContacts = useSelector(getIsLoadingContacts);
  const isLoadingPositions = useSelector(getIsLoadingPositions);
  const isLoading = isLoadingContacts && isLoadingPositions && isLoadingToken;
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchToken());
    dispatch(fetchPositions());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <p>Oops! It`s an error... {error}</p>
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
