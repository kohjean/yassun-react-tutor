export const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export const getLanguages = () => {
  console.log('2');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
    console.log(3);
  })
}