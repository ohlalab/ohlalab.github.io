  jQuery.getJSON( "https://profiles.impactstory.org/api/person/0000-0001-7265-0449",  function(data) {
      var output2017="<p class='social_media'>";
      var output2016="<p class='social_media'>";
      var output2015="<p class='social_media'>";
      var output2014="<p class='social_media'>";
      var output2013="<p class='social_media'>";
      var output2012="<p class='social_media'>";
      var the_early_years="<p class='social_media'>";

      var output2017_tweet=""
      var output2016_tweet=""
      var output2015_tweet=""
      var output2014_tweet=""
      var output2013_tweet=""
      var output2012_tweet=""
      var the_early_years_tweet=""

      var patt = new RegExp("twitter");

      for (var i in data.products){
        if(data.products[i].year == 2017){
            output2017+= "<strong>"+data.products[i]._title + ', ' + data.products[i].year +"</strong>"+ "<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                     output2017 += "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2017_tweet += "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}

          if(data.products[i].year == 2016){
              output2016+= "<strong>"+data.products[i]._title + ', ' + data.products[i].year +"</strong>"+ "<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                       output2016 += "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              output2016_tweet += "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}

          if(data.products[i].year == 2015){
              output2015+="<strong>"+data.products[i]._title + ', ' + data.products[i].year+"</strong>"+ "<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                          output2015 +=  "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              output2015_tweet +=  "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}

          if(data.products[i].year == 2014){
              output2014+="<strong>"+data.products[i]._title + ', ' + data.products[i].year+ "</strong>"+"<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                          output2014 +=  "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              output2014_tweet += "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}

          if(data.products[i].year == 2013){
              output2013+= "<strong>"+data.products[i]._title + ', ' + data.products[i].year+"</strong>"+ "<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                        output2013 +=  "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              output2013_tweet +=  "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}

          if(data.products[i].year == 2012){
              output2012+="<strong>"+data.products[i]._title + ', ' + data.products[i].year+"</strong>"+ "<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                         output2012 +=  "";}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              output2012_tweet +=  "<a class='small_tweet_link'href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}

          if(data.products[i].year < 2012){
              the_early_years+= "<strong>"+data.products[i]._title + ', ' + data.products[i].year+ "</strong>"+"<br>";
                  for (var x in data.products[i].posts){
                      if(data.products[i].posts[x].title !=""){
                          the_early_years +=  "";}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                          else{
                              the_early_years_tweet += "<a class='small_tweet_link' href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                              ;}
                  ;}
              ;}

          output2017+= "<br>" + output2017_tweet + "</p>";
          document.getElementById("2017").innerHTML=output2017;
          output2016+= "<br>" + output2016_tweet + "</p>";
          document.getElementById("2016").innerHTML=output2016;
          output2015+="<br>" + output2015_tweet + "</p>";
          document.getElementById("2015").innerHTML=output2015;
          output2014+="<br>" + output2014_tweet + "</p>";
          document.getElementById("2014").innerHTML=output2014;
          output2013+="<br>" + output2013_tweet + "</p>";
          document.getElementById("2013").innerHTML=output2013;
          output2012+="<br>" + output2012_tweet + "</p>";
          document.getElementById("2012").innerHTML=output2012;
          //the_early_years+="<br>" + the_early_years + "</p>";
          //document.getElementById("the_early_years").innerHTML=the_early_years;




      ;})
