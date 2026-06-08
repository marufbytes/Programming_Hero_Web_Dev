const king={name:'Mufasa', age:55, kingdom:'England'};

// Object.freeze(king)//won't change anything
// Object.seal(king);  //Update possible but not delete create new or delete

delete king.age;
king.queen='sarabi';
king.name='King Simba';
console.log(king);