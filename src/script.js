const who = ['El perro', 'Mi abuelo', 'Su tortuga', 'Mi pajaro'];
const what = ['se ha comido', 'ha molestado', 'se ha aplastado', 'se ha roto'];
const when = [
  'antes de la clase',
  'justo a tiempo',
  'justo a tiempo',
  'durante mi almuerzo',
  'mientras estaba rezando'
];

function generadorExcusa() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  return `${randomWho} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generadorExcusa();
};
  