import React from 'react';
import ReactDOM from 'react-dom/client';
import MyChart from './components/MyChart';
import AcForm from './components/AcForm';
import EvForm from './components/EvForm';
import PvForm from './components/PvForm';
import DetailList from './components/DetailList';
import '../css/app.css';

const App = () => {
  return (
    <React.StrictMode>
      <h1>📊 工数グラフ</h1>
      PV---<PvForm />
      AC---<AcForm />
      EV---<EvForm />
      <MyChart />
      <DetailList />
    </React.StrictMode>
  );
};

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
