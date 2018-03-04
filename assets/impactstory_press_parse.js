jQuery.getJSON( "https://raw.githubusercontent.com/ohlalab/ohlalab.github.io/master/_data/ohla_impactstory.json",  function(data) {
    var output2017="<p class='social_media'>";
    var output2016="<p class='social_media'>";
    var output2015="<p class='social_media'>";
    var output2014="<p class='social_media'>";
    var output2013="<p class='social_media'>";
    var output2012="<p class='social_media'>";
    var the_early_years="<p class='social_media'>";

    var output2017_tweet=0
    var output2016_tweet=0
    var output2015_tweet=0
    var output2014_tweet=0
    var output2013_tweet=0
    var output2012_tweet=0
    var the_early_years_tweet=0

    var patt = new RegExp("twitter");

    for (var i in data.products){
    if(data.products[i].year == 2017){
        output2017+= "<strong>"+data.products[i]._title  +"</strong>"+ "<br>";// + ', ' + data.products[i].year +"</strong>"+ "<br>";
            for (var x in data.products[i].posts){
                if(data.products[i].posts[x].title !=""){
                    output2017 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                    else{
                        output2017_tweet +=  1 ;}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>"
                        ;}
            ;}

        if(data.products[i].year == 2016){
            output2016+= "<strong>"+data.products[i]._title  +"</strong>"+ "<br>"; //+ ', ' + data.products[i].year +"</strong>"+ "<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        output2016 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2016_tweet +=  1 ;}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>"
                            ;}
                ;}

        if(data.products[i].year == 2015){
            output2015+="<strong>"+data.products[i]._title  +"</strong>"+ "<br>";//+ ', ' + data.products[i].year+"</strong>"+ "<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        output2015 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2015_tweet += 1 ;}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}

        if(data.products[i].year == 2014){
            output2014+="<strong>"+data.products[i]._title  +"</strong>"+ "<br>";// + ', ' + data.products[i].year+ "</strong>"+"<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        output2014 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2014_tweet += 1 ;}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}

        if(data.products[i].year == 2013){
            output2013+= "<strong>"+data.products[i]._title  +"</strong>"+ "<br>"; //+ ', ' + data.products[i].year+"</strong>"+ "<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        output2013 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2013_tweet += 1 ;}// "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}

        if(data.products[i].year == 2012){
            output2012+="<strong>"+data.products[i]._title  +"</strong>"+ "<br>"; //+ ', ' + data.products[i].year+"</strong>"+ "<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        output2012 += "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            output2012_tweet +=  1 ;}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}

        if(data.products[i].year < 2012){
            the_early_years+= "<strong>"+data.products[i]._title +"</strong>"+ "<br>"; //+ ', ' + data.products[i].year+ "</strong>"+"<br>";
                for (var x in data.products[i].posts){
                    if(data.products[i].posts[x].title !=""){
                        the_early_years +=  "<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].title + "</a>"+"<br>";}
                        else{
                            the_early_years_tweet += 1 ;}//"<a href='"+data.products[i].posts[x].url+"' target= '_blank'>" + data.products[i].posts[x].url + "</a>"+"<br>";}
                            ;}
                ;}
            ;}

        var summary = "Some of the links below were automatically generated from data supplied by impactstory.com. <br> These news stories were grouped by the Article (in bold) that generated the media's attention.";
        document.getElementById("summary").innerHTML=summary;
        //
        document.getElementById("2017").innerHTML=output2017;
        //output2016+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + output2016_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2016</a></p>";
        document.getElementById("2016").innerHTML=output2016;
        //output2015+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + output2015_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2015</a></p>";
        document.getElementById("2015").innerHTML=output2015;
        //output2014+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + output2014_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2014</a></p>";
        document.getElementById("2014").innerHTML=output2014;
        //output2013+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + output2013_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2013</a></p>";
        document.getElementById("2013").innerHTML=output2013;
        //output2012+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + output2012_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2012</a></p>";
        document.getElementById("2012").innerHTML=output2012;
        //the_early_years+="<br><i class='fa fa-twitter fa-2x' aria-hidden='true'>" + the_early_years_tweet + "</i>" + "<a href='https://www.ohlalab.de/on_social_media'>Year 2005-2011</a></p>";
        document.getElementById("the_early_years").innerHTML=the_early_years;
    ;})
