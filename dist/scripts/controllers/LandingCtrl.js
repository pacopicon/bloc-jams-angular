(function(){
    function LandingCtrl() {
       this.heroTitle = "Turn the Music Up!"
       // Remember: LandingCtrl as landing, so declare "landing.heroTitle"
    } 
    
    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();