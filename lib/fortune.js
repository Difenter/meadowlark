const fortunes = [
  "Conquer your fear or they will conquer you",
  "River need sources",
  "Don't be afraid of the unknown",
  "A pleasant surprise awaits you",
  "Be simple wherever possible",
];

exports.getFortune = () => {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}
