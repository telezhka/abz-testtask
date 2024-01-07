import { Hero } from 'partials/Hero/Hero';
import { Header } from 'partials/Header/Header';
import { GetReqBlock } from 'partials/GetReqBlock/GetReqBlock';
import { PostReqBlock } from 'partials/PostReqBlock/PostReqBlock';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GetReqBlock />
      <PostReqBlock />
    </>
  );
}

export default App;
