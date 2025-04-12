import React, { useState } from 'react';
const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

const AcForm = () => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token || '',
      },
      body: JSON.stringify({ date, hours })
    });
    alert('fetch完了！');
    if (res.ok) {
      alert('登録完了！');
      setDate('');
      setHours('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <label>
        日付: <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </label>
      <label style={{ marginLeft: '1rem' }}>
        工数（h）: <input type="number" step="0.1" value={hours} onChange={e => setHours(e.target.value)} required />
      </label>
      <button type="submit" style={{ marginLeft: '1rem' }}>登録</button>
    </form>
  );
};

export default AcForm;
