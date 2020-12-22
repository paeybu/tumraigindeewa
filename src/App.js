import React, { useState } from 'react';

import {
  MEAT_OPTIONS,
  STIR_FRY_MENUS,
  GANG_MENUS,
  DEEP_FRY_MENUS,
  SOUP_MENUS,
  TYPES,
} from './data';

const getRandom = (max) => Math.trunc(Math.random() * max);

const App = () => {
  const [meat, setMeat] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const thaiMeatName = MEAT_OPTIONS.find((option) => option.value === meat)
      .name;
    // ผัด
    let hasThisMeat = false;

    const getResult = (arr, order) => {
      console.log(arr);
      while (!hasThisMeat) {
        const hasMenu = arr.find((menu) => menu.meats.includes(thaiMeatName));
        if (!hasMenu) {
          setResult('ไม่มีเลยง่ะ');
          return;
        }
        const random = getRandom(arr.length);
        const menu = arr[random];
        hasThisMeat = menu.meats.includes(thaiMeatName);
        const meatInFront = `${thaiMeatName}${menu.name}`;
        const meatAtBack = `${menu.name}${thaiMeatName}`;
        if (order === 'front') {
          setResult(meatInFront);
        } else {
          setResult(meatAtBack);
        }
      }
    };

    if (type === 'stir fry') {
      getResult(STIR_FRY_MENUS, 'front');
    } else if (type === 'gang') {
      getResult(GANG_MENUS, 'back');
    } else if (type === 'deep fry') {
      getResult(DEEP_FRY_MENUS, 'front');
    } else if (type === 'soup') {
      getResult(SOUP_MENUS, 'back');
    }
  };

  return (
    <div className='container mt-5'>
      <h1>ทำไรกินดีวะ</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='meat'>เลือกเนื้อสัตว์</label>
          <select
            onChange={(e) => setMeat(e.target.value)}
            name='meat'
            className='form-control'
            value={meat}
          >
            <option value='' disabled>
              --เลือกเนื้อสัตว์--
            </option>
            {MEAT_OPTIONS.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='type'>ประเภท</label>
          <select
            onChange={(e) => setType(e.target.value)}
            name='type'
            className='form-control'
            value={type}
          >
            <option value='' disabled>
              --เลือกประเภท--
            </option>
            {TYPES.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-primary'>เสกมา</button>
      </form>
      <div className='mt-3'>
        <h4>{result}</h4>
      </div>
    </div>
  );
};

export default App;
