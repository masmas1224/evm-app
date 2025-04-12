import React from 'react';
import ReactDOM from 'react-dom/client';
import MyChart from './components/MyChart';
import AcForm from './components/AcForm';

const App = () => {
  return (
    <React.StrictMode>
      <h1>📊 工数グラフ</h1>
      <AcForm /> {/* ← フォームを追加！ */}
      <MyChart />
    </React.StrictMode>

  );
};

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
