angular.module('fc.facebook', []);


angular.module('fc.facebook')
    .provider('FacebookConfig', function () {

        //default values
        var version = 'v2.5';
        var appId;
        var status = true;
        var cookie = true;
        var xfbm = true;

        this.setVersion = function (_version) {
            version = _version;
        };
        this.setAppId = function (_appId) {
            appId = _appId;
        };
        this.setStatus = function (_status) {
            status = _status;
        };
        this.setCookie = function (_cookie) {
            cookie = _cookie;
        };
        this.setXfbm = function (_xfbm) {
            xfbm = _xfbm;
        };

        this.$get = function () {
            return {
                appId: appId,
                status: status,
                cookie: cookie,
                version: version,
                xfbml: xfbm
            };
        };

    })
    .service('FacebookService', function (FacebookConfig) {

        var self = this;
        var ready;
        var fb;

        function init() {
            fb.init(FacebookConfig);
            ready = true;
            self.parse();
        }


        this.setFB = function (FB) {
            fb = FB;
            init();
        };

        this.parse = function () {
            if (ready) {
                fb.XFBML.parse();
            }
        };

    });