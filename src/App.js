import { Routes, Route } from 'react-router-dom';
import List from './Pages/List.component';
import Detail from './Pages/Detail.component';
import Home from './Pages/Home.components';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
