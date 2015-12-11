var food = {
	"Salmon": "Per ounce Salmon contains 6.3g of Protein, 3g of good fats, 18mg of good cholesterol, 15.8mg of Sodium, with 0 carbs and 0 sugars making it a great source of protein!",
	"Whole Eggs": "One large egg contains 6.29g of protein, 4.97g of fat, and a whopping 212mg of cholesterol",
	"Chicken": "Sizes can vary in a chicken breast, but on average, a baked chicken breast contains 43g of protein, only 5g of fat, 119mg of cholesterol, and only 231 calories making it a solid protein to calorie ratio(lean meat).",
	"Beef": "Beef contains per 1/4 lb patty of 90/10% - 22g of protein, 9g of fat, 71mg of cholesterol, and 175 calories. Beef is also low in Sodium. It is also a good source of Niacin, Phosphorus and Selenium, and a very good source of Vitamin B12 and Zinc.",
	"Russet Potatoes": "One large russet potatoe (with Skin) contains 64g of carbohydrates, 7g of fiber, 8g of protein, and 290 calories. Russet potatoes also contain 64% of your daily vitamin C (more than an Orange)!",
	"Whole Grain Pancakes": "One medium whole-grain pancake contains 11.62 carbs, 4.03g of fat, 3.15g of protein, and only 92 calories.",
	"Whole Grain Cereal": "Whole grain cereals vary, so for this example I will use 'Wheaties - The Breakfast of Champions'. One bowl of Wheaties contains 22g of carbs, 3g of protein, 1g of fat, 0mg of cholesterol, and is a good source of iron, vitamin A and C."
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