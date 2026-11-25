import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomepageDashboard from './components/HomepageDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
