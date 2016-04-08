function mainSearch(query) {
  $.getJSON('http://en.wikipedia.org//w/api.php?action=query&format=json&callback=?&list=search&utf8=1&srsearch=' + query + '&utf8=',
            function(json){
      console.log(json.query.search[0]);
  })};
