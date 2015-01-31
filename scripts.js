

$(window).load(function() {
    var position = new google.maps.LatLng(60.671, 24.938);

    var mapOptions = {        //set up the map
        center: position,
        zoom: 8
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var ylenews;   //download news 
    $.getJSON("/get",
        function(data) {
             ylenews = data;
             for (var i = 0; i < 10; i++)
             {
                 $("#news").append(ylenews[i].title);
                 $("#news").append("<p>");

                 var offset = new google.maps.LatLng(60.671, 22.938 + 0.5*i);

                 var marker = new google.maps.Marker({
                     position: offset,
                     map: map
                 });

                 var info = new google.maps.InfoWindow({
                     content: ylenews[i].title
                 });

                 info.open(map, marker);

             }
             console.log(ylenews[0].description);
             //document.getElementById("news").appendChild(ylenews);
    });
});
