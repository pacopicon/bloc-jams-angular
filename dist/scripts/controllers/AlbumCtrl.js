(function() {
    function AlbumCtrl() {
        this.songs = [];
        for (i = 0; i < albumPicasso.songs.length; i++) {
            this.songs.push(angular.copy(albumPicasso.songs));    
        }
        // Remember: AlbumCtrl as album, so declare "album.albumData"
    }
    
    angular 
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();