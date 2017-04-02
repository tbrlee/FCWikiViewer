//SearchBar Handler
$(function() {
    var searchField = $('#query');
    var icon = $('#search-btn');
    
   
    //focus event handler
    searchField.on('focus', function() {
        $(this).animate({
            width: '100%',
        }, 400);        
        icon.animate({
            right: '10px'
        }, 400);
    });
    
    //blur event handler
    searchField.on('blur', function() {
        if(searchField.val() == '') {
            searchField.animate({
                width: '45%'
            },400, function() {});
            icon.animate({
                right: '360px'
            },400, function() {});
        }
    });
    
 /*
    $('#search-form').submit(function(e) {
        e.preventDefault();    
    });
   */
    $("#search-btn").click(function() {
        var searchFound = $("#query").val(); //Get search articles from search bar
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchFound+"&format=json&callback=?"; 

        
        $.ajax({
            type:"GET",
            url:url,
            asynch:false,
            dataType: "json",
            success: function(data){

                /*
                console.log(data[1][0]);
                console.log(data[2][0]);
                console.log(data[3][0]);
                */
                $("#results").empty();
                for(var i=0; i < data[1].length; i++) {
                $("#results").prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                }
            },
            error: function(errorMessage) {
                alert("Error");
            }

        });    
    
    });
});