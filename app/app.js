/**
 * Created by Tim on 05.02.2016.
 */


var myApp = angular.module('myApp', ['ui.router', 'ngMaterial', 'pascalprecht.translate']);


myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('orange')
        .warnPalette('red')
        .backgroundPalette('teal', {
            'default': '50',
            'hue-1': '100',
            'hue-2': '200',
            'hue-3': '300'

        });
});


myApp.config(function ($translateProvider) {
    //$translateProvider.determinePreferredLanguage();
    $translateProvider.translations('ENG', {
        btnHome: 'Home',
        btnNews: 'News',
        btnMember: 'Member',
        btnForum: 'Forum',
        btnTeamspeak: 'Teamspeak',
        btnMinecraft:'Minecraft Mapviewer',
        btnRules: 'Rules',
        btnOpenFullScreen:'Open in Fullscreen',
        lblRulesHeadline: 'Rules',
        lblRulesp1: 'Rule1',
        lblRulesp2: 'Rule2',
        lblRulesp3: 'Rule3',
        lblRulesp4: 'Rule4',
        lblRulesp5: 'Rule5',
        lblRulesp6: 'Rule6',
        lblRulesp7: 'Rule7',
        //lblHint: 'Please be advised, this Page is still under construction!',
        lblHint: '',
        lblWelcome: 'Hello and welcome on our Homepage!',
        lblWhoWeAre: 'Who we are',
        lblWhoWeAreTxtp1: 'We are the "Trinkfreunde Heidelberg" a mainly german and english-speaking gaming-community founded in 2013.',
        lblWhoWeAreTxtp2: "We welcome all people who want to play in friendly atmosphere. Our Teamspeak has 512 slots and many different areas, in wich you can meet other players from many nations most of the time.",
        lblWhoWeAreTxtp3: "",
        lblWhoWeAreTxtp4: "We have no duties in our community - feel free to play when and what you like!",
        lblWhoWeAreTxtp5: 'You are a frequent visitor and you still have no "friends" or "member" tag? Contact one of our admins!',
        lblToTeamspeak: "Join us on Teamspeak!"
    });
    $translateProvider.translations('GER', {
        btnHome: 'Startseite',
        btnNews: 'News',
        btnMember: 'Mitglieder',
        btnForum: 'Forum',
        btnTeamspeak: 'Teamspeak',
        btnRules: 'Verhaltensregeln',
        btnMinecraft:'Minecraft Mapviewer',
        btnOpenFullScreen:'Vollbildansicht öffnen',
        lblRulesHeadline: 'Verhaltensregeln',
        lblRulesp1: 'Um allen Personen das Beisammensein und Spielen in einer angenehmen Atmosphäre zu ermöglichen, bitten wir euch auf einige simple Grundregeln zu achten:',
        lblRulesp2: '1. Niemand darf aufgrund von Religion, Meinung, Glaube, Aussehen etc. beleidigt oder anderweitig in irgend einer Form diskriminiert werden.',
        lblRulesp3: '2. Allgemein ist auf einen freundlichen Umgangston zu achten.',
        lblRulesp4: '3. Den Anweisungen von Admins ist Folge zu leisten.',
        lblRulesp5: '4. Nutzt, wenn möglich, für jedes Spiel die dafür vorgesehenen Channel.',
        lblRulesp6: '5. Solltet ihr für längere Zeit (mehr als 5 Minuten) AFK gehen, nutzt bitte die Funktionen Sound muten oder AFK des TS, damit unser Bot euch für die Dauer eurer Abstinenz automatisch in den dafür vorgesehen Channel verschieben kann (geschieht nach einigen Sekunden). Ihr werdet automatisch zurückgeschoben, wenn ihr die Funktion wieder deaktiviert.',
        lblRulesp7: 'Sollte es Fragen, Anregungen, Kritik oder andere Probleme geben stehen euch unsere Admins wie z.B. Warlord oder Felix jederzeit gerne zur Verfügung. Der ranghöchste Admin ist tiga05, er hat in jedem Fall das letzte Wort.',
        //lblHint: 'Achtung! Diese Seite befindet sich noch im Aufbau!',
        lblHint: '',
        lblWelcome: 'Hallo und Willkommen auf unserer Homepage!',
        lblWhoWeAre: 'Wer wir sind',
        lblWhoWeAreTxtp1: 'Wir sind die Trinkfreunde Heidelberg, eine hauptsächlich deutsch- und englischsprachige Gaming Community für alle Arten von Spielen, welche 2013 gegründet wurde.',
        lblWhoWeAreTxtp2: 'Uns ist jeder willkommen der entspannt mit anderem spielen möchte. Wir bieten einen TS mit 512 Slots und diversen Areas auf dem praktisch immer andere Member anzutreffen sind.',
        lblWhoWeAreTxtp3: 'Die Community umfasst inzwischen neben Deutschen auch viele andere Nationalitäten, unter anderem Briten und Schweden.',
        lblWhoWeAreTxtp4: 'Bei uns gibt es keine Verpflichtungen oder ähnliches, so lange Ihr die Verhaltensregeln beachtet, steht euch völlig frei was Ihr macht.',
        lblWhoWeAreTxtp5: 'Ihr seid oft auf dem TS und habt weder ein "Freunde"- noch ein "Member"-Tag? Kein Problem -Sprecht einfach einen unserer Admins an!',
        lblToTeamspeak: "Auf den Teamspeak!"
    });
    $translateProvider.uniformLanguageTag('bcp47');
    // $translateProvider.preferredLanguage("ENG");
    $translateProvider.determinePreferredLanguage(function () {

        if (localStorage.getItem("Language") != null) {
            return localStorage.getItem("Language");
        }
        var browserLanguage = navigator.language;
        console.log(browserLanguage);
        // console.log("test");
        switch (browserLanguage) {
            case "de":
                return "GER";
            case "eng":
                return "ENG";
            default:
                console.log("Unknown browser language key. Switching to default language ENG");
                return "ENG";
        }
    });
    /*    $translateProvider.preferredLanguage($translateProvider.determinePreferredLanguage(function () {
     var browserLanguage=navigator.language;
     console.log(browserLanguage);
     // console.log("test");
     switch(browserLanguage){
     case "de": return "GER";
     case "eng":return "ENG";
     default: return "ENG";
     }
     }));*/
});
//lblWhoWeAreTxtp1:'Wir sind eine stetig wachsende, inzwischen internationale Gaming-Community.  Ältere und aktuelle Spiele erfreuen sich bei uns großer Beliebtheit. Du möchtest in entspannter Atmosphäre mit anderen spielen oder einfach nur Teil einer aktiven Community sein? Dann komm auf unserem Teamspeak und lerne uns kennen!',

myApp.controller('mainController', function ($scope, $translate, $timeout, $mdSidenav, $log) {
    //language
    $scope.changeLang = function (key) {
        $translate.use(key).then(function (key) {
            console.log("Sprache zu " + key + " gewechselt.");
            localStorage.setItem("Language", key);
        }, function (key) {
            console.log("Irgendwas lief schief.");
        });
    };

    //navmenu toggle
    $scope.toggleRight = buildToggler('right');

    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }//buildtoggler


    $scope.close = function () {
        $mdSidenav('right').close();
    };
    //variables
    $scope.navBarEntries = [
        {name: 'btnHome', route: 'landing'},
        {name: 'btnRules', route: 'rules'},
        //{name:'btnNews',route:'news'},
        //{name:'btnMember',route:'member'},
        //{name:'btnForum',route:'forum'},
        {name: 'btnTeamspeak', route: 'ts'},
        {name: 'btnMinecraft', route: 'Minecraft'}
    ];
    $scope.rules = [
        {name: 'lblRulesp2'},
        {name: 'lblRulesp3'},
        {name: 'lblRulesp4'},
        {name: 'lblRulesp5'},
        {name: 'lblRulesp6'}
    ];
    $scope.welcomeText=[
        {name:'lblWhoWeAreTxtp1'},
        {name:'lblWhoWeAreTxtp2'},
        {name:'lblWhoWeAreTxtp3'},
        {name:'lblWhoWeAreTxtp4'},
        {name:'lblWhoWeAreTxtp5'}
    ]

});


myApp.controller('teamspeak', function () {

    var ts3v_url_1 = "https://www.tsviewer.com/ts3viewer.php?ID=1078017&text=000000&text_size=12&text_family=1&js=1&text_s_weight=bold&text_s_style=normal&text_s_variant=normal&text_s_decoration=none&text_s_color_h=525284&text_s_weight_h=bold&text_s_style_h=normal&text_s_variant_h=normal&text_s_decoration_h=underline&text_i_weight=normal&text_i_style=normal&text_i_variant=normal&text_i_decoration=none&text_i_color_h=525284&text_i_weight_h=normal&text_i_style_h=normal&text_i_variant_h=normal&text_i_decoration_h=underline&text_c_weight=normal&text_c_style=normal&text_c_variant=normal&text_c_decoration=none&text_c_color_h=525284&text_c_weight_h=normal&text_c_style_h=normal&text_c_variant_h=normal&text_c_decoration_h=underline&text_u_weight=bold&text_u_style=normal&text_u_variant=normal&text_u_decoration=none&text_u_color_h=525284&text_u_weight_h=bold&text_u_style_h=normal&text_u_variant_h=normal&text_u_decoration_h=none";
    ts3v_display.init(ts3v_url_1, 1078017, 100);

});


myApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Home");
    //
    // Now set up the states
    $stateProvider
        .state('landing', {
            url: "/Home",
            templateUrl: "partials/landing_new.html"
        })
        .state('rules', {
            url: "/rules",
            templateUrl: "partials/rules.html"
        })
        .state('news', {
            url: "/news",
            templateUrl: "partials/news.html"
        })
        .state('member', {
            url: "/member",
            templateUrl: "partials/member.html"
        })
        .state('forum', {
            url: "/forum",
            templateUrl: "partials/forum.html"
        })
        .state('ts', {
            url: "/teamspeak",
            templateUrl: "partials/teamspeak.html"
        })
        .state('Minecraft', {
            url: "/MinecraftMapviewer",
            templateUrl: "partials/minecraft.html"
        })
        .state('orignalIndex', {
            url: "/orignalIndex",
            templateUrl: "partials/index_original.html"
        })
        .state('impressum', {
            url: "/Impressum",
            templateUrl: "partials/impressum.html"
        })
});

myApp.directive('parallax', [
    '$window', function ($window) {

        return {
            restrict: 'A',
            scope: {
                parallaxCss: '@',
                parallaxInitVal: '@',
                parallaxRatio: '@'
            },
            link: function (iScope, iElem, iAttr) {
                var cssKey,
                    cssValue,
                    isSpecialVal,
                    parallaxCssVal,
                    parallaxOffset,
                    parallaxRatio,
                    parallaxInitVal,
                    cssValArray;

                parallaxCssVal = iScope.parallaxCss ? iScope.parallaxCss : 'top';
                cssValArray = parallaxCssVal.split(':');
                cssKey = cssValArray[0];
                cssValue = cssValArray[1];

                isSpecialVal = cssValue ? true : false;
                if (!cssValue) cssValue = cssKey;

                parallaxRatio = iScope.parallaxRatio ? +iScope.parallaxRatio : 1.1;
                parallaxInitVal = iScope.parallaxInitVal ? +iScope.parallaxInitVal : 0;

                iElem.css(cssKey, parallaxInitVal + 'px');

                function _onScroll() {
                    var resultVal;
                    var calcVal = $window.pageYOffset * parallaxRatio + parallaxInitVal;

                    if (isSpecialVal) {
                        resultVal = '' + cssValue + '(' + calcVal + 'px)';
                    } else {
                        resultVal = calcVal + 'px';
                    }
                    iElem.css(cssKey, resultVal);
                }

                $window.addEventListener('scroll', _onScroll);

            }
        };
    }
]);

