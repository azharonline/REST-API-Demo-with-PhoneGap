/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        //All your code goes here becaue this is where your app comes after all the loading is complete and device ready event is fired.
        var xmlhttp;

                    xmlhttp = new XMLHttpRequest();

                    xmlhttp.onreadystatechange = function() {
                        //xmlhttp.readyState is 0 when the request is Unsent
                        //xmlhttp.readyState is 1 when the request is Open
                        //xmlhttp.readyState is 3 when the request is Loading
                        //xmlhttp.readyState is 4 when the request is Done
                        //Refer https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState for more.
                        if (xmlhttp.readyState == 4) {
                            if (xmlhttp.status == 200) {
                                console.log("Server success callback");
                                alert("Received the data from remote web server! The data received is : " + xmlhttp.responseText);
                                console.log("Received the data from remote web server! The data received is : " + xmlhttp.responseText);
                                //Tip: Connect your Android device(version 4.2 and higher) and type this in Chrome browser to be able to inspect your app: chrome://inspect/#devices
                            } else if (xmlhttp.status == 400) {
                                console.log("Server responded with 400 Bad Request error. Means there was an error with your request and server couldn't understand it!");
                            } else {
                                console.log("Some other error.");
                            }
                        }
                    };
                    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
//                    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xmlhttp.send();
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
