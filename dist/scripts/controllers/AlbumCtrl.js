(function() {
    function AlbumCtrl() {
        this.albumData = [];
        this.albumData.push(angular.copy(albumPicasso));
        this.songs = albumPicasso.songs;
    }
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl)
})();