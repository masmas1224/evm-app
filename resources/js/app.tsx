import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return <h1>やっほー！React + TypeScript 動いてるよ〜！</h1>;
};

const root = document.getElementById('app');
if (root) {
    ReactDOM.createRoot(root).render(<App />);
}
