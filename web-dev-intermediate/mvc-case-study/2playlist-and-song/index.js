/*
> data.json (copy it)
> index.js
command & params from process.argv
conditional: showPlaylist, add, remove, make, default message('Enter the right command!')
> PlaylistController.js [controller]
show(), add(params), remove(params), make(params), message(msg)
> View.js [view]
show(playlist), message(msg)
> Song.js [model]
class Song and sub-class Pop & Rock
-class Song w/ (id,name,duration) attribute
-add 'genre' attribute to sub-class Pop & Rock
> Playlist.js [model]
-(id,name,songs[array]) attribute
-getPlaylist(), show(), add(params), remove(params), make(params), save(data)

Note: run these command while opening data.json
node index.js showPlaylist
node index.js add "Pop Song" Pop 100 "Favourite Music"
node index.js remove "Pop Song" "Favourite Music"
node index.js make "Rock Collection"
node index.js add "Rock Song" Rock 135 "Rock Collection"
*/

const command = process.argv[2];
const params = process.argv.slice(3);

const PlaylistController = require("./controller/PlaylistController");

switch (command) {
    case 'showPlaylist':
        PlaylistController.show();
        break;
    case 'add':
        PlaylistController.add(params);
        break;
    case 'remove':
        PlaylistController.remove(params);
        break;
    case 'make':
        PlaylistController.make(params);
        break;
    default:
        PlaylistController.message('Enter the right command!');
        break;
}