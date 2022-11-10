
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Routes from './routes';

import './styles/global.scss'
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  )
}

export default App
