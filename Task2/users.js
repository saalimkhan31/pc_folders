let rootCountry = document.querySelector("#selectCountry");
let rootState = document.querySelector("#selectState");

let countries = {
  india: {
    delhi: ["meerut", "gurgaon", "delhi_Ncr", "shergarh"],
    maharshtra: ["nagpur", "mumbai", "pune", "solapur", "nashik"],
    madhyaPradesh: ["bhopal", "indore", "jhansi", "gwalior"],
    uttarPradesh: ["agra", "lucknow", "kanpur", "mathura"],
    rajasthan: ["jaipur", "udaipur", "kota", "bikaner", "ajmer", "jaisalmer"],
    gujrat: ["gandhinagar", "ahmedabad", "rajkot", "surat", "vadodra"],
    bihar: ["patna", "muzaffarpur", "gaya", "darbhanga", "nalanda"],
    jharkhand: ["ranchi", "dhanbad", "jamshedpur", "deoghar"],
    westBengal: ["kolkata", "siliguri", "asansol", "durgapur", "malda"],
    oddisa: ["bhubaneshwar", "cuttack", "puri", "bhadrak"],
    chattisgarh: ["raipur", "bilaspur", "ambikapur", "bhilai"],
    andhraPradesh: ["vellore", "guntur", "vijaywada", "tirupati"],
    telangana: ["hyderabad", "karimnagar", "khammam", "nalgonda"],
    karnataka: ["mysore", "mangalore", "bangalore", "udupi"],
    tamilNadu: ["chennai", "madurai", "coimbatore", "tiruppur"],
    kerala: ["kochi", "tirivandrum", "thrissur", "kannur"],
    goa: ["panjim", "vascodagama", "bicholim", "ponda"],
    himachalPradesh: ["shimla", "manali", "solan", "dharamshala"],
    punjab: ["mohali", "ludhiana", "jalandhar", "amritsar"],
    assam: ["guwahati", "dibrugarh", "haflong", "tezpur"],
    jammuKashmir: ["srinagar", "gulmarg", "pulwama", "kargil"],
    uttarakhand: ["dehradun", "haridwar", "roorkee", "nainital"],
    haryana: ["faridabad", "gurugaram", "panipat", "chandigarh"],
  },

  australia: {
    victoria: ["melbourne", "geelong", "ballarat"],
    queensland: ["brisbane", "townsville", "mackay"],
    tasmania: ["hobart", "burnie", "perth"],
  },
  usa: {
    california: ["irvine", "oakland", "stockton"],
    texas: ["houston", "dallas", "austin"],
    washington: ["seattle", "olympia", "vancouver"],
  },
};

function generateOptions(options, div) {
  for (let i = 0; i < options.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.textContent = options[i];
    div.appendChild(optionEl);
  }
}

let countryList = Object.keys(countries);
generateOptions(countryList, rootCountry);

let selectedCountry = "";

function countryVal() {
  selectedCountry = rootCountry.value;
  console.log(selectedCountry);
  let stateList = Object.keys(countries[selectedCountry]);
  console.log(stateList);
  let state = document.querySelector("#selectState");
  generateOptions(stateList, state);
}

let selectedState = "";

function stateVal() {
  selectedState = rootState.value;
  console.log(selectedState);
  let cityList = Object.values(countries[selectedCountry][selectedState]);
  console.log(cityList);
  let city = document.querySelector("#selectCity");
  generateOptions(cityList, city);
}
