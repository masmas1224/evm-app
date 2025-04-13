import React from 'react';
import ReactDOM from 'react-dom/client';
import MyChart from './components/MyChart';
import AcForm from './components/AcForm';
import EvForm from './components/EvForm';
import PvForm from './components/PvForm';
const App = () => {
  return (
    <React.StrictMode>
      <h1>📊 工数グラフ</h1>
      PV---<PvForm /> {/* ← フォームを追加！ */}
      AC---<AcForm /> {/* ← フォームを追加！ */}
      EV---<EvForm /> {/* ← フォームを追加！ */}
      <MyChart />
    </React.StrictMode>

  );
};

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
