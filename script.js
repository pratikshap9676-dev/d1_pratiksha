const prices = [500, 1200, 800, 1500, 2000];

function checkPrices() {

    let result = "";

    for (let price of prices) {

        if (price > 1000) {
            result += "Price above ₹1000: ₹" + price + "<br>";
        }

    }

    document.getElementById("result").innerHTML = result;
}