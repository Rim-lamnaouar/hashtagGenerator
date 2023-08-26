function hashtagGenerator(word){
    if (word.trim() == '' || word == '') {
        return false;
    }
    else{

    const stringCamelCase =word
      .split(' ')
      .map((word) => '#' + word.charAt(0).toUpperCase() + word.slice(1))
      let x = stringCamelCase.filter(x => x != "#").join('')
    return x; 
}
};

let word = 'hello             world';

console.log(hashtagGenerator(word));

