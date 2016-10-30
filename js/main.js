'use strict';



$(document).ready(function () {
    Promise.resolve(
    $.ajax({
        type: 'GET',
        url:'https://api.worldofwarships.ru/wows/account/list/?application_id=c68d84fe932bb8a22503692fe61ceae5&search=Yuri',
    })
    )
    .then((players)=>{
            console.log(players);
            let template = Handlebars.compile( $('#template').html()  );
            $('.updates').append( template(players)  );
    })
    .catch ((e)=>{
        console.log("error");
    })
        setInterval("location.reload()", 100000);
    })
