import React, { useEffect, useState } from 'react';

type Detail = {
  date: string;
  pvHours: string;
  acHours: string;
  evHours: string;
};

const DetailList = () => {
  const [details, setDetails] = useState<Detail[]>([]);

  useEffect(() => {
    const fetchData = () => {
    fetch('/chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          const formatted = res.data.map((d: any) => ({
            date: d.date,
            pvHours: String(d.pvHours ?? ''),
            acHours: String(d.acHours ?? ''),
            evHours: String(d.evHours ?? ''),
          }));
          setDetails(formatted);
        }
      });
    };
  // 初回実行
  fetchData();

  // 10秒ごとに実行
  const intervalId = setInterval(fetchData, 10000);

  // アンマウント時にクリーンアップ
  return () => clearInterval(intervalId);

  }, []);

  const handleChange = (index: number, field: keyof Detail, value: string) => {
    const newDetails = [...details];
    newDetails[index][field] = value;
    setDetails(newDetails);
  };

  return (
    <div>
      <h2>明細リスト</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>日付</th>
            <th>PV</th>
            <th>AC</th>
            <th>EV</th>
          </tr>
        </thead>
        <tbody>
          {details.map((d, i) => (
            <tr key={i}>
              <td>
                <input
                    type="date"
                    value={d.date}
                    onChange={(e) => handleChange(i, 'date', e.target.value)}
                />
            </td>
              <td>
                <input
                  type="number"
                  value={d.pvHours}
                  onChange={(e) => handleChange(i, 'pvHours', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={d.acHours}
                  onChange={(e) => handleChange(i, 'acHours', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={d.evHours}
                  onChange={(e) => handleChange(i, 'evHours', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailList;
