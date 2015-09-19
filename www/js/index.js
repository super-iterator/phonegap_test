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
        document.addEventListener('deviceready', app.onDeviceReady, true);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'


    batteryStatusChange : function  (info) {
        console.log(info);
        $("battery").append("Level: " + info.level + "<br>" + "Is Plugged: " + info.isPlugged);
    },

    pauseHandler : function(){
            //navigator.notification.alert("Application has been put in the background");
            alert("Application has been put in the background!");
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');



        document.addEventListener("batterystatus",app.batteryStatusChange,false);
        document.addEventListener("batterylow", app.batteryStatusChange, false);
        document.addEventListener("batterycritical", app.batteryStatusChange, false);

        // document.addEventListener('pause', app.pauseHandler, false);
        // document.addEventListener('resume', app.resumeHandler, false);
        // document.addEventListener('online', app.onlineHandler, false);
        // document.addEventListener('offline', app.offlineHandler, false);
        // document.addEventListener('searchbutton', app.searchButtonHandler, false);
        // document.addEventListener('endcallbutton', app.endCallButtonHandler, false);
        // document.addEventListener('volumeupbutton', app.volumeUpButtonHandler, false);
        // document.addEventListener('startcallbutton', app.startCallButtonHandler, false);
        // document.addEventListener('volumedownbutton', app.volumeDownButtonHandler, false);

        PhoneCallTrap.onCall(

            function(state) {
                console.log("CHANGE STATE: " + state);

                switch (state) {
                    case "RINGING":
                        alert("Phone is ringing: ");
                        break;
                    case "OFFHOOK":
                        alert("Phone is off-hook");
                        break;

                    case "IDLE":
                        alert("Phone is idle");
                        break;
                    }
        });


        $('#info').html("Cordova Version: " + device.cordova + "<br>");
        $('#info').append("Device model: " + device.model + "<br>");
        $('#info').append("Device Platform: " + device.platform + "<br>");
        $('#info').append("Device Version: " + device.version + "<br>");
        //alert("Welcome to my device ;)"); // Worked!
        //navigator.notification.alert("Your battery is SUPER low!"); // Worked!

        //navigator.notification.alert(window.plugins.battery-status.status() ); // didnt work
        //window.notification.alert('Time to charge it up!',function() {},'Low Batter','OK'); // didnt work





    },


    // Update DOM on a Received Event
    receivedEvent : function(id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
