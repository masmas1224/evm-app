import React from 'react';
import ReactDOM from 'react-dom/client';
import MyChart from './components/MyChart';

const App = () => {
  return (
    <React.StrictMode>
      <h1>📊 工数グラフ</h1>
      <MyChart />
    </React.StrictMode>
  );
};

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
