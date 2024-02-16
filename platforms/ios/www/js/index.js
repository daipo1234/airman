var app = angular.module('app', ['ngTouch', 'ngRoute', 'ngAnimate'])
var currentUrl, butParam
app.config(function ($routeProvider) {
  $routeProvider
    .when('/mainPage', {// 메인페이지
      templateUrl: 'mainHtml/main.html',
      controller: 'index'
    })
    .when('/creditPage', {// 크레딧 페이지
      templateUrl: 'mainHtml/credit.html'
    })

    .when('/listPage1', {// 항공선각자
      templateUrl: 'mainHtml/list/listPage1.html',
      controller: 'ctrl'
    })
    .when('/listPage2', {// 항공독립투사
      templateUrl: 'mainHtml/list/listPage2.html',
      controller: 'ctrl'
    })
    .when('/listPage3', {// 공군창군7인
      templateUrl: 'mainHtml/list/listPage3.html',
      controller: 'ctrl'
    })

    .when('/listPage4', {// 6.25전쟁영웅 카테고리 페이지
      templateUrl: 'mainHtml/list/list4/listPage4.html',
      controller: 'ctrl'
    })
    .when('/listPage4_1', {// 카테고리 1. 호국인물선정 전쟁영웅 페이지 (기존)
      templateUrl: 'mainHtml/list/list4/listPage4_1.html',
      controller: 'ctrl'
    })
    .when('/listPage4_2_1', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2_1.html',
      controller: 'ctrl'
    })
    .when('/listPage4_2_2', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2_2.html',
      controller: 'ctrl'
    })
    .when('/listPage4_2_3', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2_3.html',
      controller: 'ctrl'
    })
    .when('/listPage4_2_4', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2_4.html',
      controller: 'ctrl'
    })
    .when('/listPage4_2_5', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2_5.html',
      controller: 'ctrl'
    })
    .when('/pilot/:id', {// 카테고리 2. 6.25 출격 조종사 페이지
      templateUrl: 'mainHtml/list/list4/listPage4_2Pilot.html',
      controller: 'pilotController'
    })

    .when('/listPage5', {// 살신성인 참군인 카테고리 페이지
      templateUrl: 'mainHtml/list/list5/listPage5.html',
      controller: 'ctrl'
    })
    .when('/listPage5_1', {// 카테고리 1. 살신성인 참 군인 (기존)
      templateUrl: 'mainHtml/list/list5/listPage5_1.html',
      controller: 'ctrl'
    })
    .when('/listPage5_2', {// 카테고리 2. 년도별 순직 조종사 TODO:액셀 자료를 이상하게 줬는데 어떻게 해결될지 모르겠다;
      templateUrl: 'mainHtml/list/list5/listPage5_2.html',
      controller: 'ctrl'
    })
    .when('/listPage5_2_1/:id', {// 카테고리 2. 1950's
      templateUrl: 'mainHtml/list/list5/listPage5_2_1.html',
      controller: 'gloriousController'
    })

    .when('/content/:id', {// 컨탠츠 페이지
      templateUrl: 'mainHtml/list/content/contentPage.html',
      controller: 'contentController'
    })
    .when('/photo/:id', {// 사진 페이지, 컨텐츠 페이지에서 사진이 있을경우 감
      templateUrl: 'mainHtml/list/content/photoListPage.html',
      controller: 'photoController'
    })

    .when('/listPage6', {// 공군Ucc페이지
      templateUrl: 'mainHtml/list/list6/listPage6.html',
      controller: 'uccController'
    })
    .when('/listPage6_1', {// 공군Ucc페이지 Ucc
      templateUrl: 'mainHtml/list/list6/listPage6_1.html',
      controller: 'uccController'
    })
    .when('/listPage6_1_1/:id', {// 공군Ucc페이지 Ucc 목록
      templateUrl: 'mainHtml/list/list6/listPage6_1_1.html',
      controller: 'uccController'
    })
    .when('/listPage6_2/:id', {// 공군Ucc페이지 홍보영상
      templateUrl: 'mainHtml/list/list6/listPage6_2.html',
      controller: 'uccController'
    })

    .when('/listPage7', {// 이달의 공군인 페이지
      templateUrl: 'mainHtml/list/listPage7.html',
      controller: 'todayController'
    })

    .when('/listPage8', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/listPage8.html'
    })

    .when('/subMenu', {
      templateUrl: 'mainHtml/list/list8/subMenu.html'
    })
    .when('/timeLine1', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL1.html',
      controller: 'ctrl'
    })
    .when('/timeLine2', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL2.html',
      controller: 'ctrl'
    })
    .when('/timeLine3', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL3.html',
      controller: 'ctrl'
    })
    .when('/timeLine4', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL4.html',
      controller: 'ctrl'
    })
    .when('/timeLine5', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL5.html',
      controller: 'ctrl'
    })
    .when('/timeLine6', {// 공군연표 페이지
      templateUrl: 'mainHtml/list/list8/timeL6.html',
      controller: 'ctrl'
    })

    .otherwise({// 맨처음 시작할때 인덱스 페이지의 ng-view 라우팅이 메인페이지로 가게 유도
      redirectTo: '/mainPage'
    })
}).controller('contentController', function ($scope, $routeParams) {
  var param = 0, groupId = 0, people = 0, tmp = 0 , count = 0
    param = $routeParams.id
    $scope.willowsCheck = param
    people = param % 1000
    groupId = (param - people) / 1000

    groupId -= 1//천의자리수가 그룹아이디지만 배열인덱스에서는 0이 시작이라서 하나를뺌

    function setLastGroup (groupId) {
    switch (groupId) {
      case 0 :
        return 9
        break
            case 1 :
        return 16
        break
            case 2 :
        return 6
        break
            case 3 :
        return 25
        break
            case 4 :
        return 3
        break
            default :
        return 1
    }
  }

  $scope.view = function (groupId, people) {
    $scope.filterChange = 'filter-' + ((people % 6) + 1)
        $scope.filterRChange = 'filterR-' + ((people % 6) + 1)

        if (ProudAirForce[groupId][people].information_2 == '') // 텍스트가 없다면 "" 있다면 텍스트 내용
    {
      $scope.lineInfo = 'contentInfo_oneLine'
        } else {
      $scope.lineInfo = 'contentInfo_twoLine'
        }

    if (ProudAirForce[groupId][people].checkUrl == 0) // url이 없다면 0 있다면 url
    {
      $scope.existUrl = 'noneUrl'
        } else {
      $scope.existUrl = 'existUrl'
        }

    if (ProudAirForce[groupId][people].checkPhoto == 0) // 사진이 없으면 0 있으면 else
    {
      $scope.exist = 'none'
        } else {
      $scope.exist = 'exist'
            $scope.photoParam = ProudAirForce[groupId][people].checkPhoto
        }

    $scope.name = ProudAirForce[groupId][people].name
        $scope.photo = ProudAirForce[groupId][people].photo
        $scope.information_1 = ProudAirForce[groupId][people].information_1
        $scope.information_2 = ProudAirForce[groupId][people].information_2
        $scope.year = ProudAirForce[groupId][people].year
        $scope.mainText = ProudAirForce[groupId][people].mainText
        $scope.subText_1 = ProudAirForce[groupId][people].subText_1
        $scope.subText_2 = ProudAirForce[groupId][people].subText_2
        $scope.subText_3 = ProudAirForce[groupId][people].subText_3
        $scope.subText_4 = ProudAirForce[groupId][people].subText_4
        $scope.subText_5 = ProudAirForce[groupId][people].subText_5
        $scope.subText_6 = ProudAirForce[groupId][people].subText_6

        $scope.internet = ProudAirForce[groupId][people].checkUrl

    }

  $scope.onSwipeLeft = function () {
    param++
        tmp = param % 1000
        if (tmp > setLastGroup(groupId)) {
      param -= (setLastGroup(groupId) + 1)
        }
    location.replace('#/content/' + param)
    }

  $scope.onSwipeRight = function () {
    param--
        tmp = param % 1000 // 각 그룹의 첫 파라미터에서 1이 더 낮아지면 modify했을때 999가 나옴
        if (tmp > people) { // people값은 이전 tmp의 값인데 위 상황처럼 값이 역전될경우
      param += (setLastGroup(groupId) + 1) //해당 그룹 맨 뒤 항목을 보여줘서 순환하게 만든다.
        }
    location.replace('#/content/' + param)
    }

  $scope.zoomFunc = function () {
    count++
        if (count == 4) {
      count = 0
        }
    $scope.fontZoom = 'zoom' + count
    }

  $scope.view(groupId, people)
}).controller('photoController', function ($scope, $routeParams) {
  var param = 0, photoGroup = 0, photoPeople = 0, photo = 1
    param = $routeParams.id
    photoPeople = param % 10000
    photoGroup = (param - photoPeople) / 10000
    photoPeople--
    photoGroup--
    $scope.photoListTitle = photoList[photoGroup][photoPeople][0].text


    $scope.photoView = function (photoGroup, photoPeople, photo) {
    $scope.photoList_photo = photoList[photoGroup][photoPeople][photo].photo
        $scope.photoList_text = photoList[photoGroup][photoPeople][photo].text
    }

  $scope.photoSwipeLeft = function () {
    photo++
        if (photo > photoList[photoGroup][photoPeople][0].photo) {
      photo--
        }
    $scope.photoView(photoGroup, photoPeople, photo)
    }

  $scope.photoSwipeRight = function () {
    photo--
        if (photo < 1) {
      photo++
        }
    $scope.photoView(photoGroup, photoPeople, photo)
    }

  $scope.photoView(photoGroup, photoPeople, photo)
}).controller('pilotController', function ($scope, $routeParams) {
  var param = 0, pilotGroup = 0, pilot = 0, tmp = 0
    param = $routeParams.id
    pilot = param % 100
    pilotGroup = (param - pilot) / 100
    pilotGroup--

    $scope.pilotView = function (pilotGroup, pilot) {
    $scope.pilotPhotoUrl = PilotList[pilotGroup][pilot].pilotPhotoUrl
        $scope.pilotName = PilotList[pilotGroup][pilot].PilotName
        $scope.pilotRank = PilotList[pilotGroup][pilot].pilotRank
        $scope.pilotFrom = PilotList[pilotGroup][pilot].pilotFrom
        $scope.pilotYear = PilotList[pilotGroup][pilot].PilotYear
        $scope.pilotAircraft = PilotList[pilotGroup][pilot].PilotAircraft
        $scope.pilotFrequency = PilotList[pilotGroup][pilot].PilotFrequency
        $scope.pilotEtc = PilotList[pilotGroup][pilot].PilotEtc
    }

  $scope.pilotTextNext = function () {
    param++
        if (param > 508) {
      param = 100
        }
    if ((param % 100) > 29) {
      param += 70
        }

    location.replace('#/pilot/' + param)
    }

  $scope.pilotTextPrev = function () {
    param--
        if (param == 99) {
      param = 508
        }
    if ((param % 100) == 99) {
      param -= 70
        }
    location.replace('#/pilot/' + param)
    }

  $scope.pilotView(pilotGroup, pilot)

}).controller('gloriousController', function ($scope,$routeParams) {
  var param = 0
    switch ($routeParams.id) {
    case '0': param = 1950
      break
        case '1': param = 1960
      break
        case '2': param = 1970
      break
        case '3': param = 1980
      break
        case '4': param = 1990
      break
        case '5': param = 2000
      break
        case '6': param = 2010
      break
    }
  $scope.list5Year = param
    $scope.list = glory[$routeParams.id]
}).controller('todayController', function ($scope) {
  var d = new Date()
    var n = d.getMonth()
    //TODO:이세영 생일이 서로 안맞음;
    $scope.month = month[n]
    //$scope.monthPilot = monthPilot[n];
    $scope.currentMonth = n + 1
}).controller('uccController', function ($scope , $routeParams) {
  $scope.showYear = $routeParams.id % 2000
    $scope.uccYear = $routeParams.id



    $scope.ucc = ucc[$scope.uccYear - 2014]

})


app.run(function () {
  document.addEventListener('deviceready', function () {
    // screen.lockOrientation('portrait');
    FCMPlugin.subscribeToTopic('topicExample')

        FCMPlugin.getToken(function (token) {
      console.log(token)
        })
    FCMPlugin.onNotification(
      function (data) {
        console.log('gotit')
                if (data.wasTapped) {
          /*console.log(data.name + ":" + data.pk);

                    pushSeq = data.pushSequence;
                    pushLength = data.pushlength;
                    var listscope = angular.element(document.getElementById('fcmlist')).scope();

                    listscope.todayGHo(pushSeq, pushLength); */
          console.log(data.name + ':' + data.pk)
                    pushParam = data.pk
                    if (pushParam > 999) {
            location.href = '#/content/' + pushParam
                    } else {
            location.href = '#/pilot/' + pushParam
                    }
        } else {
          console.log(data.name + ':' + data.pk)

                    var goflag = confirm(data.name + '님이 태어나신 날입니다. 확인을 누르시면' + data.name + '님의 페이지로 이동합니다.')

                    if (goflag == true) {
            /* pushSeq = data.pushSequence;
                        pushLength = data.pushlength;

                        var listscope = angular.element(document.getElementById('fcmlist')).scope();

                        listscope.todayGHo(pushSeq, pushLength);*/
            pushParam = data.pk
                        if (pushParam > 999) {
              location.href = '#/content/' + pushParam
                        } else {
              location.href = '#/pilot/' + pushParam
                        }
          } else {

          }
        }
      },
      function (msg) {
        console.log('onNotification callback successfully registered: ' + msg)
            },
      function (err) {
        console.log('Error registering onNotification callback: ' + err)
            })
        /*
        sessionStorage.setItem("flag", "true");
        console.log("initiate accessibility");
        console.log(window.MobileAccessibility());
        window.MobileAccessibility.usePreferredTextZoom(false);
        if(window.MobileAccessibility){
            window.MobileAccessibility.usePreferredTextZoom(false);
        }*/


    }, false)

})

app.controller('ctrl', function ($scope) {
  /*var currentUrl = $location.path();
    currentUrl = currentUrl.slice(0, 9);
    console.log(currentUrl);
    if (currentUrl == "/mainPage") {
    document.addEventListener('backbutton', function onBackKeyDown(e) {
        navigator.app.exitApp();
    });
    } */

  /* document.addEventListener("backbutton", function onBackKeyDown(e) {
        confirm("외않됀데");
            if ($location.path() == "/mainPage") {
                e.preventDefault();
                var exitApp = $.confirm("종료하시겠습니까?");
                if(exitApp == true){
                    navigator.app.exitApp();
                }
                else {

                }
            }
            else {
                navigator.app.backHistory()
            }

    }, false);*/

  $scope.goContentFunc = function (i) {
    $scope.param = i
    }

  $scope.nextTimeLine = function (nextIndex) {
    location.replace('#/timeLine' + nextIndex)
    }

  $scope.prevTimeLine = function (prevIndex) {
    location.replace('#/timeLine' + prevIndex)
    }

  $scope.pilotNext = function (nextIndex) {
    location.replace('#/listPage4_2_' + nextIndex)
    }

  $scope.pilotPrev = function (prevIndex) {
    location.replace('#/listPage4_2_' + prevIndex)
    }
})

app.controller('index', function ($scope) {
  navigator.app.clearCache()
    navigator.app.clearHistory()
})

function backButton() {
  window.history.back();
}