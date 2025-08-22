let favSong = ["Pirroute","Low-life","Make you mine", "watch over you", "calm-down","every breath ypu take","summer time sadness"];

console.log("favourite songs are: ")
for(let song of favSong)
{
    console.log(song);
}

favSong.pop(); // pop out element from last index of an array
console.log(favSong);

let out2 = favSong.pop(); // here we can store pop() element in a variable
console.log(favSong);
console.log(out2);

