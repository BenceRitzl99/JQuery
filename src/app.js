$("h1").html("Valami");

console.log($("h2").length);

$("#harom").css("background-color","blue");
$("#harom").css("color","white");

$("#mutatGomb").on("click",() => {
    console.log("működik")
    $("#harom").show(800)
});