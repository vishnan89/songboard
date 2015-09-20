var app = angular.module('songboard', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

app.controller('SongCtrl', function ($scope, $window) {

	$scope.media = null;

	$scope.model = {
		showDelete: false,
		showMove: false,
		songs: [
			{
				'title': 'Baasha',
				'image': 'img/posters/baasha.png',
				'desc': 'Baasha Paru',
				'file': '/sounds/Batcha_Paaru.mp3'
			},	
            {
				'title': 'Agneepath',
				'image': 'img/posters/agneepath.png',
				'desc': 'Deva Shree Ganesha',
				'file': '/sounds/Deva-Shree-Ganesha.mp3'
			},
            {
				'title': 'Endrendrum Punnagai',
				'image': 'img/posters/punnagai.png',
				'desc': 'Ennai Saaithaalae',
				'file': '/sounds/Ennai_Saaithaalae.mp3'
			},
            {
				'title': 'Manam',
				'image': 'img/posters/manam.png',
				'desc': 'Kani Penchina',
				'file': '/sounds/Kani_Penchina.mp3'
			},
            {
				'title': 'Thani Oruvan',
				'image': 'img/posters/thani_oruvan.png',
				'desc': 'Kannala Kannala',
				'file': '/sounds/Kannala_Kannala.mp3'
			},
            {
				'title': 'VTV',
				'image': 'img/posters/vtv.png',
				'desc': 'Mannipaaya',
				'file': '/sounds/Mannipaaya.mp3'
			},
            {
				'title': 'O Kadhal Kanmani',
				'image': 'img/posters/okk.png',
				'desc': 'Mental Manadhil',
				'file': '/sounds/Mental_Manadhil.mp3'
			},
            {
				'title': 'Jillunu Oru Kadhal',
				'image': 'img/posters/jok.png',
				'desc': 'Munbe Vaa',
				'file': '/sounds/Munbe_Vaa.mp3'
			},
            {
				'title': 'Ayutha Ezhuthu',
				'image': 'img/posters/Ayutha_ezhuthu.png',
				'desc': 'YakKai Thiri',
				'file': '/sounds/YakKai_Thiri.mp3'
			}
		]
	};

	$scope.play = function (sound) {
        
        if($scope.media)
        {
            $scope.media.pause();
        }
        
        if($window.cordova)
        {
          ionic.Platform.ready(function(){
              var src = sound.file;
              if(ionic.Platform.is('android'))
              {
                src = '/android_asset/www' + src;
              }
              $scope.media = new $window.Media(sound.file);
              $scope.media.play();
              
          });
        }
        else
        {
            $scope.media = new Audio();
            $scope.media.src = sound.file;
            $scope.media.load();
            $scope.media.play();
        }                              
	};
});

