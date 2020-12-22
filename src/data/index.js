export const MEAT_OPTIONS = [
  { name: 'เนื้อ', value: 'beef' },
  { name: 'หมู', value: 'pork' },
  { name: 'ไก่', value: 'chicken' },
  { name: 'กุ้ง', value: 'shrimp' },
  { name: 'ปลาหมึก', value: 'squid' },
  { name: 'ปลา', value: 'fish' },
];

export const ALL_MEAT = MEAT_OPTIONS.map((meat) => meat.name);
export const NOT_FISH = MEAT_OPTIONS.filter(
  (meat) => meat.value !== 'fish'
).map((meat) => meat.name);
export const PORK_AND_BEEF = ['เนื้อ', 'หมู'];
export const NOT_SEAFOOD = [...PORK_AND_BEEF, 'ไก่'];
export const SEAFOOD = MEAT_OPTIONS.filter(
  (m) => !PORK_AND_BEEF.includes(m.name)
).map((m) => m.name);
export const SEAFOOD_AND_CHICKEN = [...SEAFOOD, 'ไก่'];

export const TYPES = [
  { name: 'ผัด', value: 'stir fry' },
  { name: 'ทอด', value: 'deep fry' },
  { name: 'แกง', value: 'gang' },
  { name: 'ต้ม', value: 'soup' },
];

export const STIR_FRY_MENUS = [
  { name: 'ผัดกะเพรา', meats: NOT_FISH },
  { name: 'ผัดน้ำมันหอย', meats: NOT_FISH },
  { name: 'ผัดกะปิ', meats: NOT_FISH },
  { name: 'ผัดกระเทียมพริกไทย', meats: ALL_MEAT },
  { name: 'ผัดเปรี้ยวหวาน', meats: ALL_MEAT },
  { name: 'ข้าวผัด', meats: ALL_MEAT },
  { name: 'ผัดพริกแกง', meats: ALL_MEAT },
  { name: 'ผัดพริกเผา', meats: ALL_MEAT },
];

export const GANG_MENUS = [
  { name: 'แกงพะแนง', meats: PORK_AND_BEEF },
  { name: 'แกงมัสมั่น', meats: NOT_SEAFOOD },
  { name: 'แกงเขียวหวาน', meats: NOT_SEAFOOD },
  { name: 'แกงเผ็ด', meats: NOT_SEAFOOD },
];

export const DEEP_FRY_MENUS = [
  { name: 'ทอดกระเทียมพริกไทย', meats: ALL_MEAT },
  { name: 'ชุบแป้งทอด', meats: ['ไก่', 'กุ้ง', 'ปลาหมึก', 'ปลา'] },
  { name: 'แดดเดียว', meats: PORK_AND_BEEF },
];

export const SOUP_MENUS = [
  { name: 'ต้มจืด', meats: ['หมู', 'ไก่'] },
  { name: 'ต้มยำ', meats: SEAFOOD_AND_CHICKEN },
  { name: 'ต้มข่า', meats: SEAFOOD_AND_CHICKEN },
  { name: 'ต้มแซ่บ', meats: NOT_SEAFOOD },
];
