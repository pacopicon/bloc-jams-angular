(function() {
    function CollectionCtrl() {
        this.albums = [];
        for (var i=0; i < 12; i++) {
            this.albums.push(angular.copy(albumPicasso));
        }
        // Remember: CollectionCtrl as collection, so declare "collection.albums"
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
    
})();