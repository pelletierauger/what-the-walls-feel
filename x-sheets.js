xSheet = {
    // ailleurs00: {
    //     d: 6000,
    //     f: function(sum) {
    //         // var rN = getSum(xSheet, xSheet.grotte);
    //         septembre.run();
    //     }
    // },
    fadeIn: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fadeIn);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            fadeIn.run(rN);
        }
    },
    fasterSubtleTrunk: {
        d: 300,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            fasterSubtleTrunk.run(rN);
        }
    },
    concerto: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            // oscillators[183].run(0);
            // drawBG();
            var coFade = cosineFade(sum, 100);
            concerto.mix(sum, fasterSubtleTrunk, rN, coFade);
            // concerto.run();
            // fasterSubtleTrunk.run();
        }
    },
    // ailleurs0: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN0 = getSum(xSheet, xSheet.test);
    //         var rN = getSum(xSheet, xSheet.ailleurs0);
    //         var coFade = cosineFade(sum, 100);
    //         implosion7.run(rN0, oscillators[183], rN0, coFade);
    //     }
    // },
    // ailleurs: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN0 = getSum(xSheet, xSheet.test);
    //         var rN = getSum(xSheet, xSheet.ailleurs);
    //         var coFade = cosineFade(sum, 100);
    //         implosion6.run(rN, implosion7, rN0 + 1070 * 0, coFade);
    //     }
    // },
    // ailleurs2: {
    //     d: 600,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.ailleurs);
    //         var coFade = cosineFade(sum, 400);
    //         implosion5.run(rN, implosion6, rN, coFade);
    //     }
    // },
    // ailleurs3: {
    //     d: 600,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.ailleurs);
    //         var rN0 = getSum(xSheet, xSheet.ailleurs3);
    //         var coFade = cosineFade(sum, 400);
    //         //          By tying the equation with rN0 instead of "0",
    //         //          we are stabilizing the function with itself.
    //         //          It doesn't rely directly on drawCount.
    //         //          7200 just happened to be the sum of all frames
    //         //          at the moment where I wrote this unstabilized function.
    //         implosion6.run(rN0 - 7200, implosion5, rN, coFade);
    //         //             lo(rN0);
    //         //             lo("");
    //     }
    // },
    // cavern3: {
    //     d: 600,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.cavern3);
    //         nouvelleGrotte.run(rN - 7800);
    //         //             lo(rN);
    //     }
    // },
    // cavern2: {
    //     d: 200,
    //     f: function(sum) {
    //         var rN0 = getSum(xSheet, xSheet.cavern3) - 7800;
    //         var rN = getSum(xSheet, xSheet.cavern2);
    //         var coFade = cosineFade(sum, 100);
    //         grotte2.run(rN + 100, nouvelleGrotte, rN0, coFade);
    //     }
    // },
    // // cavern: {
    // //     d: 600,
    // //     f: function(sum) {
    // //         var rN = getSum(xSheet, xSheet.cavern2);
    // //         var coFade = cosineFade(sum, 100);
    // //         grotte.run(rN + 400, grotte2, rN + 100, coFade);
    // //     }
    // // },
    // lemRi5: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi5);
    //         lemonRibbon5.run(rN);
    //     }
    // },
    // lemRib: {
    //     d: 400,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi5);
    //         var rN2 = getSum(xSheet, xSheet.lemRib);
    //         var coFade = cosineFade(sum, 200);
    //         selfDigestingCircle.run(rN2 + 200, lemonRibbon5, rN, coFade);
    //     }
    // },
    // lemRi4: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var rN2 = getSum(xSheet, xSheet.lemRib);
    //         var coFade = cosineFade(sum, 100);
    //         lemonRibbon4.run(rN - 9300, selfDigestingCircle, rN2 + 200, coFade);
    //     }
    // },
    // lemRi1: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 200);
    //         lemonRibbon.run(rN - 9300, lemonRibbon4, rN - 9300, coFade);
    //     }
    // },
    // tanFie: {
    //     d: 200,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 200);
    //         tangentField.run(rN - 9300, lemonRibbon, rN - 9300, coFade);
    //     }
    // },
    // liquef: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 200);
    //         liquefieur.run(rN - 9300, tangentField, rN - 9300, coFade);
    //     }
    // },
    // pasMal1: {
    //     d: 100,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 80);
    //         pasMalCool.run(rN - 9300, liquefieur, rN - 9300, coFade);
    //     }
    // },
    // spiToE2: {
    //     d: 100,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         // info2.html(coFade);
    //         // info3.html("spiraToupEntre.x : " + spiraToupEntre.x);
    //         var coFade = cosineFade(sum, 80);
    //         spiraToupEntre.run(rN - 9300, pasMalCool, rN - 9300, coFade);
    //     }
    // },
    // // spiToE: {
    // //     d:  100,
    // //     f:  function(sum){
    // //             var rS = getSum(xSheet,xSheet.spiToE);
    // //             var coFade = cosineFade(sum, 80);
    // //             // info2.html(coFade);
    // //             // info3.html("spiraToupEntre.x : " + spiraToupEntre.x);
    // //             spiraToupEntre.run(rS, pasMalCool, 0, coFade);
    // //         }
    // // },
    // intere: {
    //     d: 300,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         // var rS = getSum(xSheet,xSheet.spiToE);
    //         var coFade = cosineFade(sum, 200);
    //         // info3.html("interessant.x : " + interessant.x);
    //         interessant.run(rN - 9300, spiraToupEntre, rN - 9300, coFade);
    //     }
    // },
    // jusDeb: {
    //     d: 200,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 100);
    //         justeDebile.run(rN - 9300, interessant, rN - 9300, coFade);
    //     }
    // },
    // spiExt: {
    //     d: 100,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 100);
    //         spiraleExtraMagique2.run(rN - 9300, justeDebile, rN - 9300, coFade);
    //     }
    // },
    // spiTou: {
    //     d: 200,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 100);
    //         spiraleToupie.run(rN - 9300, spiraleExtraMagique2, rN - 9300, coFade);
    //     }
    // },
    // // forMag: {
    // //     d:  300,
    // //     f:  function(sum){
    // //             var coFade = cosineFade(sum, 50);
    // //             formuleMagique.run(0, spiraleToupie, 0, coFade);
    // //         }
    // // },
    // newDim: {
    //     d: 200,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.newDim);
    //         var rN2 = getSum(xSheet, xSheet.lemRi4);
    //         var coFade = cosineFade(sum, 50);
    //         nouvelleDimension.run(rN, spiraleToupie, rN2 - 9300, coFade);
    //     }
    // },
    // spiEt: {
    //     d: 150,
    //     f: function(sum) {
    //         var rS = getSum(xSheet, xSheet.spiEt);
    //         var rN = getSum(xSheet, xSheet.newDim);
    //         var coFade = cosineFade(sum, 50);
    //         spiraleEtrange.run(rS + 20, nouvelleDimension, rN, coFade);
    //     }
    // },
    // newDim2: {
    //     d: 400,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.newDim2);
    //         var rS = getSum(xSheet, xSheet.spiEt);
    //         var coFade = cosineFade(sum, 30);
    //         nouvelleDimension2.run(rN - 11750, spiraleEtrange, rS + 20, coFade);
    //     }
    // },
    // modDim: {
    //     d: 2050,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.newDim2);
    //         var coFade = cosineFade(sum, 50);
    //         modulatedDimension.run(rN - 11750, nouvelleDimension2, rN - 11750, coFade);
    //     }
    // },
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

var xSheet2 = {
    1: {
        d: 2000,
        f: function(sum) {
            modulatedDimension.run();
            simple.output(modulatedDimension, 1);
        }
    },
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function cosineFade(sum, dur) {
    var fade = map(drawCount, sum, sum + dur, 1, 0);
    var fadeCons = constrain(fade, 0, 1);
    var fadeSmooth = fadeCons * PI;
    var coFade = map(cos(fadeSmooth), 1, -1, 0, 1);
    return coFade;
}

function runXSheet(sheet) {
    var tL = Object.size(sheet);

    if (drawCount < sheet.key(0).d) {
        sheet.key(0).f();
    } else {
        for (var i = 1; i < tL; i++) {
            var sum = 0;
            for (var ii = 0; ii < i; ii++) {
                sum += sheet.key(ii).d;
            }

            if (drawCount >= sum && drawCount < sum + sheet.key(i).d) {
                sheet.key(i).f(sum);
            }
        }
    }
}

function getSum(sheet, prop) {
    var tL = Object.size(sheet);
    var propLocation = 0;
    var sum = 0;
    for (var i = 0; i <  tL; i++) {
        if (sheet.key(i) === prop) {
            propLocation = i;
        }
    }
    for (var ii = 0; ii < propLocation; ii++) {
        sum += sheet.key(ii).d;
    }
    return sum;
}

function queryXSheet(sheet) {
    var tL = Object.size(sheet);

    for (var i = 0; i < tL; i++) {
        var sum = 0;
        for (var ii = 0; ii < i; ii++) {
            sum += sheet.key(ii).d;
        }
        if (drawCount >= sum && drawCount < sum + sheet.key(i).d) {
            var name = Object.getOwnPropertyNames(sheet);
            return ("Scene #" + i + ", " + name[i]);
        }
    }
}

function sumXSheet(sheet) {
    var tL = Object.size(sheet);
    var sum = 0;
    for (var i = 0; i < tL - 1; i++) {
        sum += sheet.key(i).d;
    }
    return sum;
}