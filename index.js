// function getLangCount(content) {
// const lines = content.split('\n'); 
// const count = lines.length - 1; 
// console.log(`Count: ${count}`);
// };
// getLangCount();

// const getUniqueContinents = (content) => {
//     const lines = content.trim().split('\n').slice(1);
//     let continents = '';
    
//     lines.forEach(line => {
//       const [, , continent] = line.split(',');
//       continents +=  continent;
//     });
    
//     console.log('Continents:', [...continents].join(', '));
//   };
import _ from 'lodash'
// сonsole.log(getUniqueContinents());
function showInfo(content) {
  const stringArr = content.trim().split('\r\n').slice(1).map((el) => el.split(','))
  function makeObj(arr){ //функция для мапа чтобы каждый элемент превратить в объект
    return {lang: arr[0], natives: arr[1], continent: arr[2], dif: arr[3], countr: arr[4]}
  }
  const objectInfo = stringArr.map((el) => makeObj(el)) // парсим всё в объект
  console.log(`Count: ${objectInfo.length}`)
  console.log(`Continents: ${_.uniq(objectInfo.map((el) => el.lang)).join(', ')}`)
  console.log(`Amount of languages with 1 country: ${objectInfo.filter((el) => el.countr === '1').length}`)
  const mostPopular = Math.max(parseInt(objectInfo.map((el) => el.natives)))
  console.log(`The most popular language: ${objectInfo.filter((el) => el.natives == mostPopular)[0].lang}`)

  //сложности
  const easy = objectInfo.filter((el) => el.dif === 'Низкая')
  const normal = objectInfo.filter((el) => el.dif === 'Средняя')
  const hard = objectInfo.filter((el) => el.dif === 'Высокая')
  console.log(`Complexity: Низкая: ${easy.length}, Средняя: ${normal.length}, Высокая: ${hard.length}`);
}
export default showInfo