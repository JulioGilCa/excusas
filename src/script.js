const who = ['El perro', 'Mi abuelo', 'La tortuga', 'Mi pajaro'];
const action = ['se ha comido','se ha meado','ha aplastado','ha roto'];
const what = ['mis deberes', 'mi comida', 'la ropa', 'las llaves'];
const when = [
  'antes de la clase',
  'justo a tiempo',
  'justo a tiempo',
  'durante mi almuerzo',
  'mientras estaba rezando'
];

function generatorExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomaction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  return `${randomWho} ${randomaction} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generatorExcuse();
};