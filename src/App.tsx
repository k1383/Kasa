import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Details from './pages/Details';
// import NotFound from './pages/NotFound';

function App () {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      {/* <Route path="/Details" element={<Details />} />
      <Route path="/NotFound" element={<NotFound />} /> */}

    </Routes>

  )

}
export default App;