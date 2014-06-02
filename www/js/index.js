/* global Connection*/

var destinationType;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        a = document.getElementById('showDialog');
        a.addEventListener('touchend', this.onShowDialog, false);
        a.addEventListener('clickend', this.onShowDialog, false);

        var b = document.getElementById('beep');
        b.addEventListener('touchend', this.onBeep, false);

        var c = document.getElementById('camera');
        c.addEventListener('touchend', this.onCamera, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onBeep: function() {
        navigator.notification.beep(1);
    },
    onCamera: function() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
        });

        function onSuccess(imageData) {

            var smallImage = document.getElementById('smallImage');

            smallImage.style.display = 'block';

            smallImage.src = imageData;
        }

        function onFail(message) {
            console.error('Failed because: ' + message);
        }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        destinationType = navigator.camera.DestinationType;

    },
    alertDismissed: function() {
        console.log("alert dismissed");
    },
    onShowDialog: function() {

        navigator.notification.alert(
            'Example of alert', // message
            this.alertDismissed, // callback
            'Custom alert', // title
            'Close this' // buttonName
        );
    },

    checkConnection: function() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        return (states[networkState]);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // ***********
        // Get Network status
        var connection = this.checkConnection();
        var connectionDOM = document.getElementById('network');
        connectionDOM.innerText = connection;
    }
};