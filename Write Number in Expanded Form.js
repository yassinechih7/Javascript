// Write Number in Expanded Form
function expandedForm(num) {
  // Return Array of expanded num 13 => [10, 3]
  const numberArray = num
    .toString()
    .split("")
    .map((e, index, array) => {
      if (e < 10 && e > 0) {
        const multuplier = array.slice(index + 1).length;
        const zeroCount = "0".repeat(multuplier);
        const pluSign = () => {
          if (index == array.length - 1) {
            return "";
          } else {
            return " + ";
          }
        };
        return e.concat(zeroCount, pluSign());
      } else {
        return "";
      }
    })
    .join("");
  return numberArray;
}
