var myapp = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        myapp.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var takePhotoBtn = document.getElementById("takephoto");
        var getPhotoBtn = document.getElementById("getphoto");
        takePhotoBtn.onclick = function(){
          alert("拍照");
          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
              destinationType: Camera.DestinationType.FILE_URI });
          
          function onSuccess(imageURI) {
              var image = document.getElementById('myImage');
              image.src = imageURI;
          }
          
          function onFail(message) {
              alert('Failed because: ' + message);
          }
        }
        getPhotoBtn.onclick = function(){
          alert("相册选取");
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType:Camera.PictureSourceType.PHOTOLIBRARY
          });
          
          function onSuccess(imageURI) {
              var image = document.getElementById('myImage');
              image.src = imageURI;
          }
          
          function onFail(message) {
              alert('Failed because: ' + message);
          }
        }
        
        var getUser = document.getElementById("getUser");
        var list = document.getElementById("list")
        getUser.onclick = function(){
           var options = new ContactFindOptions();
            options.filter = "";
             options.multiple = true;  // return multiple results
        filter = ["name"]; // return contact.displayName field

        // find contacts
        navigator.contacts.find(filter, onSuccess, onError, options);
            function onSuccess(contacts) {
        // display the address information for all contacts
        for (var i = 0; i < contacts.length; i++) {
            var oli = document.createElement("li");
            oli.innerHTML = i + ":"+JSON.stringify(contacts[i].name)
            list.appendChild(oli);
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        alert('onError!');
    }
        
        }
    }
};
