var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {

    center: {
      lat: 40.7127837,
      lng: -74.0059413
    },
    zoom: 11
  });
}


// var zip_code = '10312';
//
// // adding google api key for ajaxcall
//
// var url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
//
// url += '?query=' + zip_code + "&key=AIzaSyDZn0VpcoL0RV2ywc0vMm86yEcfJ6-WOok";
//
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });


// var nytimesUrl = ' '+ theCity +'';
//
//
//
// $.getJSON( "ajax/test.json", function( data ) {
//
//   $nytimes-header.text();
//
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });



// from the nytimes api doc
// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "ab8ef0adc1f04b4cafdb7a131d2c34d1"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
