const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = "I am a good and hardworkin person";
console.log(sentence.split(' '));

console.log(sentence.split('a'));   //'a' will be vanished

const friendStr = 'Rahim, Kahim, Dahim, Lahim, Shahim, Mahim';
const friend = friendStr.split(',');
console.log(friend);

const readFriend = ['Rahim','Kahim', 'Dahim', 'Mahim'];
console.log(readFriend);
console.log(readFriend.join());
console.log(readFriend.join('|'));