function mainSearch(query) {
  $.getJSON('http://en.wikipedia.org//w/api.php?action=query&format=json&callback=?&list=search&utf8=1&srsearch=' + query + '&utf8=',
            function(json){
                //variables
                var pageURL = 'https://en.wikipedia.org/wiki/' + (json.query.search[0].title);
                var snipnum = json.query.search[0].snippet.split("(disambiguation).").length - 1; 
            
                //updates
                console.log(json.query.search[0].snippet);
                
                $('#log').html(json.query.search[0].snippet.split("(disambiguation).")[snipnum]); 
                $('#ttl').html(json.query.search[0].title);
                $('#ref').attr("href", pageURL);
                
      //$('#logurl').attr("href", )
  })};

