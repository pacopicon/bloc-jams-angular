//(function() {
//    function AlbumCtrl() {
//        this.albumData = [];
//        this.albumData.push(angular.copy(albumPicasso));
//        this.songs = albumPicasso.songs;
//    }
//    angular
//        .module('blocJams')
//        .controller('AlbumCtrl', AlbumCtrl)
//})();

//(function() {
//    function AlbumCtrl(Fixtures) {
//        this.albumData = Fixtures.getAlbum();
//        this.songs = albumPicasso.songs;
//    }
//    angular
//        .module('blocJams')
//        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
//})();


(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
        this.songs = (Fixtures.getAlbum()).songs;
    }
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();