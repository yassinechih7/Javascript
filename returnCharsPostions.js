// Convert a string of Letters to a string that's indicate the position on alfabet Ignoring the case.
// Example: "abcdefghijklmnopqrstuvwxyz" -> "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26"
function alphabetPosition(text) {
  //Return the position on ascii from string
  const chars = text.split('').map(e => e.charCodeAt(e, 0));

  // Deside if Upper case or lower and return position
  const posArray = chars.map(e => (e >= 65 && e <= 90) ? e - 64 :
    (e >= 97 && e <= 122) ? e - 96 :
    undefined);

  // Return a string of all positions
  return posArray.join(' ');

}
