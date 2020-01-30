//----------------------Information Div-----------------------------------------//

var infoDiv;
var sliderInfo1, sliderInfo2, sliderInfo3, sliderInfo4, sliderInfo5;
var info1, info2, info3, info4, info5;
var sliders = [];
var sheetSlider;
var sumSheet = sumXSheet(xSheet);

function toggleInfoDiv() {
    if (drawingGeometry) {
        drawingGeometry = false;
        infoDiv.style("display", "none");
    } else {
        drawingGeometry = true;
        infoDiv.style("display", "block");
    }
}

function setupInfoDiv() {
    if (!drawingGeometry) {
        infoDiv.style("display", "none");
    } else {
        infoDiv.style("display", "block");
    }
}

function createInfoDiv() {
    infoDiv = createDiv('');
    infoDiv.style('position', 'absolute');
    infoDiv.style('right', '0');
    infoDiv.style('bottom', '35px');
    infoDiv.style('padding', '10px');
    infoDiv.style('padding-top', '0px');
    infoDiv.style('margin-left', '10px');
    infoDiv.style('opacity', '1.0');
    infoDiv.style('z-index', '20');
    // infoDiv.style('background', '#222222');
    infoDiv.style('font-family', 'Inconsolata');
    infoDiv.style('line-height', '0.1em');
    infoDiv.style('font-size', '0.7em');
    infoDiv.style('color', '#000000');
    infoDiv.style('background', "#CDCDCD");
    // info5 = createP('this is some text');
    // info5.parent(infoDiv);
    // info4 = createP('this is some text');
    // info4.parent(infoDiv);
    // info3 = createP('this is some text');
    // info3.parent(infoDiv);
    // info2 = createP('this is some text');
    // info2.parent(infoDiv);
    // info1 = createP('this is some text');
    // info1.parent(infoDiv);

    sliderInfo1 = createP('Slider 1');
    sliderInfo1.parent(infoDiv);
    sheetSlider = createSlider(0, sumSheet, drawCount);
    sheetSlider.parent(infoDiv);

    sliders.push(sheetSlider);

    for (var i = 0; i <  sliders.length; i++) {
        sliders[i].style('width', '686px');
        sliders[i].style('margin-top', '-2px');
        sliders[i].style('margin-bottom', '-5px');
    }

    sheetSlider.input(function() {
        setSheetSlider();
    });
    // setSheetSlider();

    function setSheetSlider() {
        drawCount = sheetSlider.value();
        sliderInfo1.html("drawCount : " + drawCount + " (" + sheetSlider.value() + ")");
    }

}

function togInf() {
    if (!drawingGeometry) {
        infoDiv.style("display", "block");
        drawingGeometry = true;
    } else {
        infoDiv.style("display", "none");
        drawingGeometry = false;
    }
}