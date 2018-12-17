const render = new Render()
const list = new List(render)
list.start()

$(".fa-plus").on("click", function () {
    const display = $("#input").css("display");
    console.log(display)
    if (display === "none") {
        $("#input").show()
    } else {
        $("#input").hide()
    }
})


$("#list").on("click", ".remove", function () {
    const id = $(this).closest("li").data("id")
    list.removeItem(id)
})

$("#list").on("click", ".li-text", function () {
    const id = $(this).closest("li").data("id")
    list.toggleCompleteItem(id)
})


$("#input").keypress(function (e) {
    const key = e.which;
    if (key == 13) {
        const input = $("#input").val()
        list.addItem(input)
    }
});
