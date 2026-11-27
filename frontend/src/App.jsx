import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import AddEndpointPage from './Components/AddEndpointPage';

const endpoints = [
  { id: 'e1', method: 'GET', url: '/api/users', status: 'Healthy', interval: '30s', lastChecked: '2 minutes ago' },
  { id: 'e2', method: 'POST', url: '/api/orders', status: 'Drift Detected', interval: '60s', lastChecked: '5 minutes ago' },
  { id: 'e3', method: 'GET', url: '/api/products', status: 'Healthy', interval: '45s', lastChecked: '1 minute ago' },
  { id: 'e4', method: 'PUT', url: '/api/inventory', status: 'Drift Detected', interval: '120s', lastChecked: '10 minutes ago' },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEndpoints = endpoints.filter((ep) =>
    ep.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ep.method.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Dashboard endpoints={filteredEndpoints} />} />
        <Route path="/endpoints/new" element={<AddEndpointPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
