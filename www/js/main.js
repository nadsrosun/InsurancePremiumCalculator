// Page Navigation
function pageNavigation(page)
{
    switch (page) {
        case 'calculator':
            window.location = "calculator.html";
            break;
        case 'about':
            window.location = "about.html";
            break;
        case 'locate':
            window.location = "locate.html";
            break;
        case 'help':
            window.location = "help.html";
            break;
        case 'setting':
            window.location = "setting.html"
            break;
    }
}

// Populate Model base on Made selected
function populateModel()
{
    var toyota = ["Belta", "Corolla", "Allion"];
    var nissan = ["Sunny", "March", "Urvan", "Bluebird"];
    var honda  = ["Civic", "Fit", "Accord"];

    var makeElement  = document.getElementById("calculator-make");
    var modelElement = document.getElementById("calculator-model");
    var makeValue    = makeElement.options[makeElement.selectedIndex].value;

    // JQuery mobile customization
    modelButton = document.getElementById("calculator-model-button");
    modelSpan   = modelButton.getElementsByTagName("span");

    switch (makeValue) {
        case 'toyota':
            modelElement.options.length = 0;
            for (i = 0; i < toyota.length; i++) {
                createOption(modelElement, toyota[i], toyota[i]);
            }
            modelSpan[0].innerHTML = toyota[0];
            buildModelList(toyota);
            break;
        case 'nissan':
            console.log('test');
            modelElement.options.length = 0;
            for (i = 0; i < nissan.length; i++) {
                createOption(modelElement, nissan[i], nissan[i]);
            }
            modelSpan[0].innerHTML = nissan[0];
            buildModelList(nissan);
            break;
        case 'honda':
            modelElement.options.length = 0;
            for (i = 0; i < honda.length; i++) {
                createOption(modelElement, honda[i], honda[i]);
            }
            modelSpan[0].innerHTML = honda[0];
            buildModelList(honda);
            break;
    }
}

// Create dynamic dropdownlist
function createOption(ddl, text, value) {
    console.log('test2');
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}

// Create Vehicle Model Dropdown
function buildModelList(makeArray)
{
    modelList = document.getElementById('calculator-model-menu');
    modelList.innerHTML = '';

    for (i = 0; i < makeArray.length; i++) {
        // Create href element
        var a = document.createElement("a");
        a.href = "#"
        a.innerHTML = makeArray[i];
        a.setAttribute("tabindex", "-1");
        a.setAttribute("class", "ui-btn");

        // Create li element
        var li = document.createElement("li");
        li.setAttribute("data-option-index", i);
        li.setAttribute("data-icon", "false");
        li.setAttribute("role", "option");
        li.setAttribute("aria-selected", "false");

        // First child
        if (i == 0) {
            a.setAttribute("class", "ui-btn ui-btn-active");
            li.setAttribute("class", "ui-first-child");
            li.setAttribute("aria-selected", "true");
        }

        // Last child
        if ((makeArray.length - i) == 1) {
            li.setAttribute("class", "ui-last-child");
        }

        li.appendChild(a);
        modelList.appendChild(li);
    }
}

function calculate()
{
    var result = 0;

    var makeElement   = document.getElementById("calculator-make");
    var modelElement  = document.getElementById("calculator-model");
    var resultElement = document.getElementById('result-amt');

    var makeValue   = makeElement.options[makeElement.selectedIndex].value;
    var modelValue  = modelElement.options[modelElement.selectedIndex].value;
    var engineValue = document.getElementById("calculator-engine-capacity").value;
    var yearValue   = document.getElementById("calculator-year-registered").value;

    var physicalDamage = document.getElementById('checkbox-1').checked;
    var passengerCover = document.getElementById('checkbox-2').checked;
    var cycloneTempest = document.getElementById('checkbox-3').checked;
    var riotsStrikes   = document.getElementById('checkbox-4').checked;

    switch (makeValue) {
        case 'toyota':
            if (modelValue == "Belta" && yearValue >= 2000) {
                if (engineValue < 1000) {
                    if (yearValue >= 2011) {
                        result = 13000;
                    } else {
                        result = 7500;
                    }
                } else {
                    if (yearValue >= 2011) {
                        result = 16000;
                    } else {
                        result = 8000;
                    }
                }
            } else if (modelValue == "Corolla") {
                if (yearValue > 1900 && yearValue <2000) {
                    result = 4500;
                } else if (yearValue >= 2000 && yearValue < 2007) {
                    result = 9000;
                } else if (yearValue >=2007 && yearValue < 2012) {
                    result = 12000;
                } else if (yearValue >= 2012) {
                    result = 16000;
                }
            } else if (modelValue == "Allion") {
                if (yearValue >= 2004 && yearValue < 2007) {
                    result = 8000;
                } else if (yearValue >= 2007 && yearValue < 2011) {
                    result = 11500;
                } else if (yearValue >= 2012) {
                    result = 16000;
                }
            }
            break;
        case 'nissan':
            if (modelValue == "Sunny") {
                if (engineValue > 1200){
                    if (yearValue > 1900 && yearValue <2000) {
                        result = 4000;
                    } else if (yearValue >= 2000 && yearValue < 2007) {
                        result = 7000;
                    } else if (yearValue >=2007 && yearValue < 2012) {
                        result = 10000;
                    } else if (yearValue >= 2012) {
                        result = 14500;
                    }
                }
            } else if (modelValue == "March") {
                if (engineValue < 1000) {
                    if (yearValue > 1900 && yearValue <2000) {
                        result = 4500;
                    } else if (yearValue >= 2000 && yearValue < 2007) {
                        result = 9000;
                    } else if (yearValue >=2007 && yearValue < 2012) {
                        result = 11000;
                    } else if (yearValue >= 2012) {
                        result = 15500;
                    }
                }
            } else if (modelValue == "Urvan") {
                if (engineValue >4500) {
                    if (yearValue > 1900 && yearValue <2000) {
                        result = 9000;
                    } else if (yearValue >= 2000 && yearValue < 2007) {
                        result = 15000;
                    } else if (yearValue >=2007 && yearValue < 2012) {
                        result = 20000;
                    } else if (yearValue >= 2012) {
                        result = 24000;
                    }
                }
            } else if (modelValue == "Bluebird") {
                if (engineValue > 1200){
                    if (yearValue > 1900 && yearValue <2000) {
                        result = 4000;
                    } else if (yearValue >= 2000 && yearValue < 2007) {
                        result = 6000;
                    } else if (yearValue >=2007 && yearValue < 2012) {
                        result = 10000;
                    } else if (yearValue >= 2012) {
                        result = 16500;
                    }
                }
            }
            break;
        case 'honda':
            if (modelValue == "Civic") {
                if (yearValue > 1900 && yearValue <2000) {
                    result = 4500;
                } else if (yearValue >= 2000 && yearValue < 2007) {
                    result = 9000;
                } else if (yearValue >=2007 && yearValue < 2012) {
                    result = 14000;
                } else if (yearValue >= 2012) {
                    result = 17000;
                }
            } else if (modelValue == "Fit") {
                if (yearValue >= 2000 && yearValue < 2007) {
                    result = 9000;
                } else if (yearValue >=2007 && yearValue < 2012) {
                    result = 12000;
                } else if (yearValue >= 2012) {
                    result = 16000;
                }
            } else if (modelValue == "Accord") {
                if (yearValue > 1900 && yearValue <2000) {
                    result = 4500;
                } else if (yearValue >= 2000 && yearValue < 2007) {
                    result = 9000;
                } else if (yearValue >=2007 && yearValue < 2012) {
                    result = 14000;
                } else if (yearValue >= 2012) {
                    result = 17000;
                }
            }
            break;
    }

    if (physicalDamage || passengerCover || cycloneTempest || riotsStrikes) {
        result = result + (result * 0.20);
    }

    if (result == 0) {
        resultElement.innerHTML = "No result matched!"
    } else {
        resultElement.innerHTML = "Rs "+result;
    }

}