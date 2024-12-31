const Playlist = require("../model/Playlist");
const View = require("../view/View");

class PlaylistController {
    static show() {
        let playlists = Playlist.show();
        View.show(playlists);
    }
    static add(params) {
        Playlist.add(params);
    }
    static remove(params) {
        Playlist.remove(params);
    }
    static make(params) {
        Playlist.make(params);
    }
    static message(msg) {
        View.message(msg);
    }
}

module.exports = PlaylistController;