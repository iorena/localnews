$(window).load(function() {
    var mapOptions = {        //set up the map
        center: { lat: 60.671, lng: 24.938},
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
             }
             console.log(ylenews[0].description);
             //document.getElementById("news").appendChild(ylenews);
    });
});
