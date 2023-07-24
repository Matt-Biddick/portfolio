import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/pricing.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import lazyLoading from "./utils/lazy-loading";

mobileNav();
darkMode();
lazyLoading();

// Get the select element and price elements
var currencySelect = document.getElementById("currency");
var priceElements = document.getElementsByClassName("price");

// Define the price values for each currency
var prices = {
  EUR: {
    location1: "€349",
    location2: "€599",
    location3: "€1249",
  },
  GBP: {
    location1: "£299",
    location2: "£509",
    location3: "£889",
  },
  CHF: {
    location1: "₣339",
    location2: "₣579",
    location3: "₣1209",
  },
  USD: {
    location1: "$379",
    location2: "$659",
    location3: "$1149",
  },
  NZD: {
    location1: "$619",
    location2: "$1059",
    location3: "$1859",
  },
  AUD: {
    location1: "$569",
    location2: "$979",
    location3: "$1719",
  },
};

// Function to update the displayed prices based on the selected currency
function updatePrices() {
  var selectedCurrency = currencySelect.value;

  // Loop through each price element and update its value
  for (var i = 0; i < priceElements.length; i++) {
    var location = priceElements[i].dataset.location;
    priceElements[i].textContent = prices[selectedCurrency][location];
  }
}

// Add an event listener to the select element
currencySelect.addEventListener("change", updatePrices);

// Update the prices initially
updatePrices();
