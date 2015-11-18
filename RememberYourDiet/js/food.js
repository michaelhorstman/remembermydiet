var food = {
	"Salmon": "Per ounce Salmon contains 6.3g of Protein, 3g of good fats, 18mg of good cholesterol, 15.8mg of Sodium, with 0 carbs and 0 sugars making it a great source of protein!",
	"Whole Eggs": "Protein",
	"Chicken": "Protein",
}

$ (".food-source li").click (function (){
	console.log($(this))
	$(".right-panel p").html(food[$(this).html()])
	})



$(".food-source li").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
});





// food["Salmon"] -good
// 	food.Salmon -bad