//back to top div with two buttons
//$("#section5").css('overflow','scroll');

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("box-follow-1").style.display = "block";
			document.getElementById("box-follow-2").style.display = "block";
        } else {
            document.getElementById("box-follow-1").style.display = "none";
			document.getElementById("box-follow-2").style.display = "none";
        }
    }
	
//pop-up to subcribe the form
var modal = document.getElementById('section5');	
var btn = document.getElementById("btn-subcribe-follow");
var btn2 = document.getElementById("btn-cover");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function () {modal.style.display = "block";}
span.onclick = function() {
    modal.style.display = "none";
};$(".close").click(function(){	document.getElementById('section5').style.display = "none";});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//pop-up hien len khi bam send

$('#form-dang-ky').submit(function(e) {
  e.preventDefault();
  showLoading();
  var data = {
    full_name: $("#id-name").val(),
    gender: $("input[type='radio']:checked").val(),
    age: $("#id-age option:selected").text(),
 mobile:$("#id-mobile").val(),
 email:$("#id-email").val(),
 address:$("#id-address").val(),
 company_name:$("#id-linkedin").val(),
 kinh_doanh:$("#id-industry option:selected").text(),
 vi_tri:$("#id-title option:selected").text(),
 mentor:$("#id-fav-mentor option:selected").text(),
 question:$("textarea#id_cauhoi").val()
};
$.ajax({
    type: "POST",
    url: "sendmail.php",
    data: data,
    success: function(){
    	hideLoading();
        showDialog();
    }
});
    // show animation
    return false; // allow regular form submission

});

var showLoading = function(){
	$("#loadingpanel").show();
};

var hideLoading = function(){
	$("#loadingpanel").hide();	
}

var showDialog = function(){
    $("#bgdlg").fadeIn(300);     
  }
  
  $("#dong").click(function(){
	  $('#bgdlg').fadeOut(300);
  });

	

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

//GOOGLE MAP
function initializeMap(){
	
  var styles = [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ];
// 	 var styles = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#212121"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#777777"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.country",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.locality",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#181818"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1b1b1b"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#2c2c2c"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8a8a8a"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#373737"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#3c3c3c"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#4e4e4e"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#000000"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#3d3d3d"
//       }
//     ]
//   }
// ];
	 var lat = 10.7899557;
var lon = 106.702066;

  var options = {
  mapTypeControlOptions: {
    mapTypeIds: ['Styled']
  },
    center: new google.maps.LatLng(lat, lon-0.0025),
    zoom: 18,
    scrollwheel: false,
    disableDefaultUI: true, 
    mapTypeId: 'Styled'
  };
  var div = document.getElementById('section8');
  var map = new google.maps.Map(div, options);
  var marker = new google.maps.Marker({
        map: map,
        icon: "image/gem-center.png",
        // label: {
        //   text: 'GEM CENTER',
        //   color: 'white',
        // },
        position: new google.maps.LatLng(lat, lon)
    });
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
  map.mapTypes.set('Styled', styledMapType);
}

//var i=0;
//document.getElementById("noidungtieude").innerHTML = thongtintieude[i];
//document.getElementById("noidung").innerHTML = thongtin[i];

//bx-slider-3metner
$(document).ready(function(){
  $('.slider1').bxSlider({
	 	pager: false,
		minSlides: 1,
		moveSlides: 1,
		slideWidth: 300,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 100,
		prevText: '<div id="side_prev"><img src="image/slider-btn-back.png" /></div>',
		nextText: '<div id="side_next"><img src="image/slider-btn.png" /></div>',		onSliderLoad: function () {        $('.slider1>div:not(.bx-clone)').eq(1).addClass('active-slide');    },    onSlideAfter: function ($slideElement, oldIndex, newIndex) {        $('.slide').removeClass('active-slide');        $($slideElement).next().addClass('active-slide');            }     
		/*onSlideNext: function (){
			if (i===2) {i=0} else {	i+=1;}
			document.getElementById("noidungtieude").innerHTML = thongtintieude[i];
			document.getElementById("noidung").innerHTML = thongtin[i];
		},
		onSlidePrev: function () {
			if (i===0) {i=2} else {i-=1;}
			document.getElementById("noidungtieude").innerHTML = thongtintieude[i];
			document.getElementById("noidung").innerHTML = thongtin[i];
		},*/

  });
  
  $("#bgdlg").hide();
});





