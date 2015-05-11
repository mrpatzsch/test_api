// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  var key = "6bjgco74rs2j90o5mkhmsabuqe";
  var secret = "8fj76j23ppr00";


    function searchButton() {
      var dataString = 'city=' + city + '&stateProvinceCode=' + state + '&countryCode=US&numberOfResults=20&arrivalDate='+ arrive + '&departureDate=' + depart;
      $.ajax({
        type: "POST",
        url: 'index',
        data: dataString,
        }).done(function(resp) {
        resp.preventDefault();
        console.log("Ajax response is", data);
      });
    };
      var search = $('#q');
      search.on("submit", function(event) {
      }
      var $searchForm = $('#search');
  
      $searchForm.on("submit", function(event) {
        event.preventDefault();
        console.log("Form Submitted", $(this).serialize());

        var city = $('#city').val().split(' ').join('+');
        var state = $('#state').val();
        var arriveDate = $('#arrive').val();
        var departureDate = $('#depart').val();
        console.log("City is", city); 
      var string = 'city=' + city + '&stateProvinceCode=' + state + '&countryCode=US&numberOfResults=20&arrivalDate='+ arriveDate + '&departureDate=' + departureDate;
      console.log(string);
rest();
    function rest() {
      searchButton();
    //var city,
      //  state,
        //arrivalDate,
       // departureDate;
    //city = "San+Francisco";
    //state = "CA";
    //arrivalDate = "5/30/2015";
    //departureDate = "6/3/2015";
    var url = "http://api.ean.com/ean-services/rs/hotel/v3/list?minorRev=5&apiKey=p9ycn9cxb2zp3k3gfvbf5aym&sig=p9ycn9cxb2zp3k3gfvbf5aymQGyYzaSp1431025260622&cid=55505&locale=en_US&" + string + "&sort=DEFAULT&_type=json";
    console.log(url)
  $.ajax({
    type: "GET",
    dataType: 'jsonp',
    url: url,
    username: 'user',
    password: 'pass',
    crossDomain : true,
    xhrFields: {
    withCredentials: true
  }
  }).done(function(info) {
    $('#hotel').html("");
    var hotel = info.HotelListResponse.HotelList.HotelSummary;
    console.log("info is", info.HotelListResponse);
    for (var i = 0; i < hotel.length; i++) {
    $('#hotel').append("<div class=\"col-md-3\">" + "<a target='_blank' href='" + hotel[i].deepLink + "'><img src='" + "http://images.travelnow.com" + hotel[i].thumbNailUrl + "'><div class=\"col-md-6\">" + hotel[i].name + "</a>" + "<br>$" + hotel[i].lowRate);
    }
  });
};
rest()
  })
});
