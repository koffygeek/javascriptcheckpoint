let sentence = `short sentence delivers a powerful message with concise and effective language.  short sentence is a shanghai-based womenswear brand founded in 2015. the brand pays homage to modern women through a collection of comfortable and timeless essentials. commonplace and banal elements in everyday life inspire short sentence to design understated yet evocative pieces  and pursue life-affirming fashion.`
let lenghtofsentence = 0;
let numberwords = 0;
let numbervowels = 0;

for( let i = 0; i<sentence.length; i++) {
    if (sentence[i] !== ' '){
        lenghtofsentence++
    }
  }

  for ( let i = 0; i < sentence.length; i++){
    if (sentence[i] === ' '){
        numberwords++
    }
  }


  for(let i = 0 ; i < sentence.length; i++){
        if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u' || sentence[i] === 'y'){
            numbervowels++
        }
  }


  console.log(lenghtofsentence)
  console.log(numberwords)
  console.log(numbervowels)
// let close = 0
// console.log(umber.length)
//    for (let i = 0 ; i<numbercharacters.length; i++){
//     if (numbercharacters[i] === '('){
//         open++
//     }else if (perfectParentieses[i] === ')'){
//         close++
//    }
//    }
//    console.table(close,open)
