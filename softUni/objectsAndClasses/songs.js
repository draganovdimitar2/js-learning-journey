// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: 
// "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
// If the value of the last element is "all", print the names of all the songs.


function solve(arr) {
    let n = Number(arr[0]);
    let type = arr[arr.length - 1];
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 1; i < arr.length - 1; i++) {
        let [songType, songName, songTime] = arr[i].split('_');
        let currentObj = new Song(songType, songName, songTime);
        songs.push(currentObj);
    }

    let filtered = (type === 'all') ? songs : songs.filter(song => song.typeList === type);

    for (let song of filtered) {
        console.log(song.name);
    }
}

solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
);

solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']
);


solve([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
);