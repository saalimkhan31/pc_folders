let rootCountry = document.querySelector("#selectCountry");
let rootState = document.querySelector("#selectState");
let rootCity = document.querySelector("#selectCity");

let countries = {
  india: {
    maharshtra: {
      nagpur: {
        area1: "sadar",
        area2: "burdi",
        area3: "jafarNagar",
        area4: "mahal",
      },
      mumbai: {
        area1: "kurla",
        area2: "kalyan",
        area3: "bandra",
        area4: "cst",
      },
    },
  },

  australia: {
    victoria: {
      perth: {
        area1: "melbourne",
        area2: "geelong",
        area3: "ballarat",
        area4: "philip",
      },
      tasmania: {
        area1: "kits",
        area2: "broad",
        area3: "nelsonSquare",
        area4: "geroge",
      },
    },
  },
  usa: {
    california: {
      boston: {
        area1: "irvine",
        area2: "oakland",
        area3: "stockton",
        area4: "poland",
      },
      chicago: {
        area1: "marina",
        area2: "stPaul",
        area3: "harris",
        area4: "mockton",
      },
    },
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
  // console.log(selectedCountry);
  let stateList = Object.keys(countries[selectedCountry]);
  // console.log(stateList);
  let state = document.querySelector("#selectState");
  generateOptions(stateList, state);
}

let selectedState = "";

function stateVal() {
  selectedState = rootState.value;
  // console.log(selectedState);
  let cityList = Object.keys(countries[selectedCountry][selectedState]);
  // console.log(cityList);
  let city = document.querySelector("#selectCity");
  generateOptions(cityList, city);
}

let selectedCity = "";

function cityVal() {
  selectedCity = rootCity.value;
  // console.log(selectedCity);
  let areaList = Object.values(
    countries[selectedCountry][selectedState][selectedCity]
  );
  console.log(areaList);
  let area = document.querySelector("#selectArea");
  generateOptions(areaList, area);
}
