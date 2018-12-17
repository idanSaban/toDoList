class Render{
    constructor(){
    }

    display(list){
        $("#input").val("");
        $("#list").empty()
        const source = $("#list-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ list })
        $("#list").append(newHTML)
    }

    }

