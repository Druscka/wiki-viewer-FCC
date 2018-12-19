

function search_wiki(){

  var apiLink = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&prop=extracts|info&exsentences=1&exintro=true&generator=search&origin=*&inprop=url&gsrsearch=';
  var theLink = 'https://en.wikipedia.org/wiki/'

  console.log("first");
  var output = $('#text').val();
  $('.content').addClass('transition1');
  $('.results').addClass('transition2');

  if ($('#text').val().length !==0) {

    var wholeLink = apiLink + output;
    console.log(wholeLink);
    $.getJSON(wholeLink, function(x){
       for (var i=0; i < 10; i++){
          var pageId = Object.keys(x.query.pages)[i];
          var fullUrl = x.query.pages[pageId].fullurl;
          console.log(fullUrl);
          $('.results').append("<a href='" + fullUrl + "'><div class='output alert alert-primary' role='alert'><h2>" + x.query.pages[pageId].title + "</h2><p>" + x.query.pages[pageId].extract + "</p></div></a>");
          }
       console.log($('.results'));

     });


  }
  else {
    alert("You need to fill in the Search field!");
  }

}
