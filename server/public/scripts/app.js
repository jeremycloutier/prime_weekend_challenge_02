$(document).ready(function(){
    getData();

});

function getData(){
    var data = [];

    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){
            console.log(data.people);
            appendDivs(data.people);
        }
    });
}

function appendDivs(people){
    for(var i = 0; i < people.length; i++){
        $('#peopleContainer').append("<p class='name'>" + people[i].name + "<br>" + people[i].location + "<br>" + people[i].animal + "</p>");
    }
}