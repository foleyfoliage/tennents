    //Blank var for window info
    var infoWindow = null;
    //My Location
    var map = null;

    $(document).ready(function () { initMap(); });

    //Map init for center location and styling
    function initMap() {

        var centerMap = new google.maps.LatLng(55.862097, -4.253072); //Should use myLat & myLng

        var myOptions = {

            zoom: 15,
            center: centerMap,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": -30
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#353535"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#656565"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#505050"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#808080"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#454545"
                        }
                    ]
                }
            ]}

        map = new google.maps.Map(document.getElementById('map'), myOptions);

        setMarkers(map, sites);

        infowindow = new google.maps.InfoWindow({
            content: "loading..."
        });

    }

   var marker;

    function autoUpdate() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var newPoint = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

            if (marker) {
                // Marker already created - Move it
                marker.setPosition(newPoint);
            }
            else {
                // Marker does not exist - Create it
                marker = new google.maps.Marker({
                    position: newPoint,
                    map: map
                });
            }

            // Center the map on the new position
            map.setCenter(newPoint);
        });

        // Call the autoUpdate() function every 5 seconds
        setTimeout(autoUpdate, 5000);
    }

    autoUpdate();

    //Information about bars, ie name, location and reference to bar info
    var sites = [
        ['Bar1', 55.8602006, -4.2333251, 1,
		'<table border="2" bordercolor="#F0E0C8" align="center">' +
            '<tr>' +
                '<th colspan="3" rowspan="3"><img src="js/bar/dry.jpg"/></th>' +
            '</tr>' +
            '<tr>' +
                '<tr>Drygate</tr>' +
				'<tr>' +
                '<br />' +
				'</tr>' +
                '<td>Drygate Brewing Co is a multi-purpose venue.<br />We have a 120 cover Brewhouse restaurant & bar at<br />ground level with views into our craft brewery.</td>' +
				'<tr>' +
                '<td>Average rating: 4/5</td>' +
				'</tr>' +
            '</tr>' +
        '<table>'
        , 5],   //drygate id = 0
        ['Bar2', 55.8592967, -4.2500376, 2, '<table border="2" bordercolor="#F0E0C8" align="center">' +
            '<tr>' +
                '<th colspan="3" rowspan="3"><img src="js/bar/beir.jpg"/></th>' +
            '</tr>' +
            '<tr>' +
                '<tr>Beirhalle</tr>' +
				'<tr>' +
                '<br />' +
				'</tr>' +
                '<td>Underground beer hall serving up two-for-one pizzas,<br />hundreds of beers from around the world and<br />DJ sets on weekends.</td>' +
				'<tr>' +
                '<td>Average rating: 4/5</td>' +
				'</tr>' +
            '</tr>' +
        '<table>', 5],   // id = 1
        ['Bar3', 55.869842, -4.275047, 3, '<table border="2" bordercolor="#F0E0C8" align="center">' +
            '<tr>' +
                '<th colspan="3" rowspan="3"><img src="js/bar/west.png"/></th>' +
            '</tr>' +
            '<tr>' +
                '<tr>West on the corner</tr>' +
				'<tr>' +
                '<br />' +
				'</tr>' +
                '<td>WEST On The Corner is part of the Glasgow WEST brewery,<br />bar and restaurant family. Our little corner of Bavaria<br />in Glasgow serves breakfast, lunch and dinner.</td>' +
				'<tr>' +
                '<td>Average rating: 4/5</td>' +
				'</tr>' +
            '</tr>' +
        '<table>', 5],   // id = 2
        ['Bar4', 55.8602659, -4.2303066, 4, '<table border="2" bordercolor="#F0E0C8" align="center">' +
            '<tr>' +
                '<th colspan="3" rowspan="3"><img src="js/bar/ten.jpg"/></th>' +
            '</tr>' +
            '<tr>' +
                '<tr>Tennents brewery</tr>' +
				'<tr>' +
                '<br />' +
				'</tr>' +
                '<td>Scotland\'s favourite pint we\'ve been welcomed <br />into your homes for years. <br />Now it\'s your turn to come to ours. <br />Book a tour of Wellpark Brewery in Glasgow.</td>' +
				'<tr>' +
                '<td>Average rating: 4/5</td>' +
				'</tr>' +
            '</tr>' +
        '<table>', 5 ],   // id = 3
        ['Bar5', 55.862097, -4.253072, 5, '<table border="2" bordercolor="#F0E0C8" align="center">' +
            '<tr>' +
                '<th colspan="3" rowspan="3"><img src="js/bar/wax.jpg"/></th>' +
            '</tr>' +
            '<tr>' +
                '<tr>Waxy o\'conners</tr>' +
				'<tr>' +
                '<br />' +
				'</tr>' +
                '<td>With 3 floors, 6 bars and 9 different areas,<br /> Waxy\'s is one of Glasgow\'s most unique bars. <br />With so many areas to choose from, <br />Waxy\'s is an ideal venue for all</td>' +
				'<tr>' +
                '<td>Average rating: 4/5</td>' +
				'</tr>' +
            '</tr>' +
        '<table>', 5]// id = 4
    ];

    //Recursive function for adding custom map markers
    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites[0],
                zIndex: sites[3],
                html: sites[4],
                icon: 'images/pint.png'
            });

            //Listener for user clicking on icon
            google.maps.event.addListener(marker, "click", function () {
                //alert(this.html);
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }
