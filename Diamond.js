const diamond = (lenght) => {
	const middleOfArray = Math.floor(lenght/2);
  
  const oddArray = '0'.repeat(middleOfArray * 2).split('').map((e,i)=> i).filter(e=> e % 2 != 0);
  
	const mainArray = oddArray.concat(lenght).concat(oddArray.reverse()).map(e=>'*'.repeat(e));
  return mainArray.map((e, i)=>e.concat('\n')).join('');
};
console.log(diamond(43))
