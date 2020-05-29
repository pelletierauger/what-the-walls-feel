xSheet = {
    // ailleurs00: {
    //     d: 6000,
    //     f: function(sum) {
    //         // var rN = getSum(xSheet, xSheet.grotte);
    //         septembre.run();
    //     }
    // },
    // test: {
    //     d: 3000,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.test);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         traffic3.run(rN);
    //     }
    // },
    // blank: {
    //     d: 5,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.blank);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         // traffic3.run(rN);
    //     }
    // },
    title: {
        d: 185,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.title);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            overture.run(rN);
        }
    },
    trafficFadeIn: {
        d: 1600,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.trafficFadeIn);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            traffic3FadeIn.run(rN);
        }
    },
//     trafficFadeIn2: { // This is a keeper.
//         d: 500,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.trafficFadeIn);
//             var coFade = cosineFade(sum, 100);
//             springsSlowerLessElastic.blend(sum, traffic3FadeIn, rN, coFade);
//         }
//     },
    nooTests: {
        d: 1200,
        f: sum => {
            var rN = getSum(xSheet, xSheet.trafficFadeIn);
            var coFade = cosineFade(sum, 600);
            noodlesHorizontal.mix(sum, traffic3FadeIn, rN, coFade);
        }
    },
//     trafficAndNoodles: {
//         d: 1800,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.trafficFadeIn);
//             var coFade = cosineFade(sum, 300);
//             // oscillators[183].run(0);
//             // drawBG();
//             // concerto.run();
//             noodlesHorizontal.mix(sum, traffic3FadeIn, rN + 0, coFade);
//         }
//     },
//     pillars: {
//         d: 650,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.trafficFadeIn);
//             var coFade = cosineFade(sum, 300);
//             pillarsInACavern.mix(sum, traffic3FadeIn, rN + 0, coFade);
//         }
//     },
    pillars2: {
        d: 650,
        f: sum => {
            var rN = getSum(xSheet, xSheet.nooTests);
            var coFade = cosineFade(sum, 100);
            curvierPillars.mix(sum, noodlesHorizontal, rN, coFade);
        }
    },
//     pillars3: {
//         d: 650,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.pillars2);
//             var coFade = cosineFade(sum, 100);
//             curvierPillarsEvenSmaller.mix(sum, curvierPillars, rN, coFade);
//         }
//     },
    blendyCav: {
        d: 450,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.pillars2);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            var coFade = cosineFade(sum, 100);
            blendyCavernB.mix(sum, curvierPillars, rN, coFade);
        }
    },
//     blendyCavs: {
//         d: 900,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.blendyCav);
//             // oscillators[183].run(0);
//             // drawBG();
//             // concerto.run();
//             var coFade = cosineFade(sum, 100);
//             blendyCavern.mix(sum + 100, blendyCavernB, rN, coFade);
//         }
//     },
    blendyCavs2: {
        d: 300,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.blendyCav);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            var coFade = cosineFade(sum, 100);
            blendyCavernC.mix(sum - 100, blendyCavernB, rN, coFade);
        }
    },
    blendyCavs3: {
        d: 340,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.blendyCavs2);
            // oscillators[183].run(0);
            // drawBG();
            // concerto.run();
            var coFade = cosineFade(sum, 100);
            blendyCavernD.mix(sum - 100, blendyCavernC, rN - 100, coFade);
        }
    },
    blendyMuscles: {
        d: 400,
        f: sum => {
            var rN = getSum(xSheet, xSheet.blendyCavs3);
            var coFade = cosineFade(sum, 100);
            muscleFibersRebuildingThemselves.mix(sum + 500, blendyCavernD, rN - 100, coFade);
        }
    },
    travellers2: {
        d: 900,
        f: sum => {
            var rN = getSum(xSheet, xSheet.blendyMuscles);
            var coFade = cosineFade(sum, 100);
            travellers2.blend(sum, muscleFibersRebuildingThemselves, rN + 500, coFade);
        }
    },
    jumpers: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2);
            var coFade = cosineFade(sum, 100);
            travellers4Bigger.mix(sum, travellers2, rN, coFade);
        }
    },
    travellers6: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.jumpers);
            var coFade = cosineFade(sum, 100);
            horizontalJumpingDots2.mix(sum + 1000, travellers4Bigger, rN, coFade);
        }
    },
//     jumpingDots: {
//         d: 150,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.travellers6);
//             var coFade = cosineFade(sum, 100);
//             fastJumpingDots.mix(sum + 1000, horizontalJumpingDots2, rN + 1000, coFade);
//         }
//     },
//     jumpingDots2: {
//         d: 700,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.travellers6);
//             var coFade = cosineFade(sum, 10);
//             fastJumpingDots2.mix(sum + 1000, horizontalJumpingDots2, rN + 1000, coFade);
//         }
//     },
    //-------------------  The Egg Sequence -----------------------------------------//
    eggs0: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers6);
            var coFade = cosineFade(sum, 100);
            eggs.mix(sum + 1000, horizontalJumpingDots2, rN + 1000, coFade);
        }
    },
    eggs1: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggs0);
            var coFade = cosineFade(sum, 100);
            electronicDecorativeEggs.mix(sum + 1000, eggs, rN + 1000, coFade);
        }
    },
    //     eggs2: {
    //         d: 500,
    //         f: sum => {
    //             var rN = getSum(xSheet, xSheet.eggs1);
    //             var coFade = cosineFade(sum, 100);
    //             harmoniousEggs.mix(sum + 1000, electronicDecorativeEggs, rN + 1000, coFade);
    //         }
    //     },
    //  Probably the conclusion of the Egg Sequence
    eggs2b: {
        d: 700,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggs1);
            var coFade = cosineFade(sum, 100);
            harmoniousEggs2.blend(sum + 1000, electronicDecorativeEggs, rN + 1000, coFade);
        }
    },
    eggsTests: {
        d: 500,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggs2b);
            var coFade = cosineFade(sum, 100);
            strangelyStabilizedEggs.mix(sum + 1000, harmoniousEggs2, rN + 1000, coFade);
        }
    },
    dynamicalLozenges: {
        d: 1000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggsTests);
            var coFade = cosineFade(sum, 100);
            surprisinglyStableDynamicalLozenges.mix(sum + 1000, strangelyStabilizedEggs, rN + 1000, coFade);
        }
    },
    //----------------------- A quiet, flowy sequence ------------------------------//
    oceanWaves: {
        d: 400,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggs3);
            var coFade = cosineFade(sum, 100);
            beautifulOceanWaves.mix(sum + 1000, surprisinglyStableDynamicalLozenges, rN + 1000, coFade);
        }
    },
    plantsSofter: {
        d: 800,
        f: sum => {
            var rN = getSum(xSheet, xSheet.oceanWaves);
            var coFade = cosineFade(sum, 200);
            plantsSofter.mix(sum + 1000, beautifulOceanWaves, rN + 1000, coFade);
        }
    },
    torn: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.plantsSofter);
            // oscillators[183].run(0);
            // drawBG();
            var coFade = cosineFade(sum, 100);
            tornSheetInTheWind.mix(sum, plantsSofter, rN + 1000, coFade);
            // concerto.run();
            // fasterSubtleTrunk.run();
        }
    },
    festive: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.plantsSofter);
            // oscillators[183].run(0);
            // drawBG();
            var coFade = cosineFade(sum, 100);
            newFestive.mix(sum, plantsSofter, rN + 1000, coFade);
            // concerto.run();
            // fasterSubtleTrunk.run();
        }
    },
    //     conclusion0: { //maybe
    //         d: 2000,
    //         f: sum => {
    //             var rN = getSum(xSheet, xSheet.jumpingDots);
    //             var coFade = cosineFade(sum, 100);
    //             biggerHungryClouds.mix(sum + 1000, fastJumpingDots, rN + 1000, coFade);
    //         }
    //     },
    //     conclusion: { //maybe
    //         d: 2000,
    //         f: sum => {
    //             var rN = getSum(xSheet, xSheet.jumpingDots);
    //             var coFade = cosineFade(sum, 100);
    //             biggerHungryClouds.mix(sum + 1000, fastJumpingDots, rN + 1000, coFade);
    //         }
    //     },
    
//  Experimental bigger scenes -------------------------------------------------- //
//     blurryFixed: {
//         d: 180,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.blurryFixed);
//             // oscillators[183].run(0);
//             // drawBG();
//             // concerto.run();
//             blurryCavern2.run(rN + drawCount);
//         }
//     },
//     blurry2: {
//         d: 903 - 168,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.blurry2);
//             // oscillators[183].run(0);
//             // drawBG();
//             // concerto.run();
//             blurryCavern2.run(rN);
//         }
//     },
//  ------------------------------------------------------------------------------ //
    // blurry: {
    //     d: 5000,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.blurry);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         blurryCavern.run(rN);
    //     }
    // },
    // title: {
    //     d: 185,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.title);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         overture.run(rN);
    //     }
    // },
    // wait: {
    //     d: 185,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.wait);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         traffic3Static.run(rN);
    //     }
    // },
    // fadeIn: {
    //     d: 3000,
    //     f: function(sum) {
    //         var rN = getSum(xSheet, xSheet.fadeIn);
    //         // oscillators[183].run(0);
    //         // drawBG();
    //         // concerto.run();
    //         traffic3FadeIn.run(rN);
    //     }
    // },
    //     muscleFibers: {
    //         d: 3000,
    //         f: function(sum) {
    //             var rN = getSum(xSheet, xSheet.fadeIn);
    //             // oscillators[183].run(0);
    //             // drawBG();
    //             // concerto.run();
    //             var coFade = cosineFade(sum, 300);
    // //             muscleFibersRebuildingThemselves.mix(sum, traffic3FadeIn, rN, coFade);
    // //             travellers5EvenBigger.mix(sum, traffic3FadeIn, rN, coFade);
    // //             travellers6.mix(sum, traffic3FadeIn, rN, coFade);
    //             concerto.mix(sum - 100, traffic3FadeIn, rN, coFade);
    //         }
    //     },
//     cavern: {
//         d: 2000,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.cavern);
//             // oscillators[183].run(0);
//             // drawBG();
//             // concerto.run();
//             var coFade = cosineFade(sum, 300);
//             // cavern.mix(sum, traffic3FadeIn, rN, coFade);
//             cavern.run(rN + 100);
//         }
//     },
    //     pillars4: { d: 650, f: sum => {
    //             var rN = getSum(xSheet, xSheet.pillars3);
    //             var coFade = cosineFade(sum, 100);
    //             intricateFastPillars.mix(sum, curvierPillarsEvenSmaller, rN, coFade);
    //         }
    //     },
//     muscles: {
//         d: 2000,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.pillars3);
//             var coFade = cosineFade(sum, 100);
//             muscleFibersRebuildingThemselves.mix(sum, curvierPillarsEvenSmaller, rN, coFade);
//         }
//     },
    distanceMuscles: {
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 300);
            middleOfTheMuscularDistanceField.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    distanceMuscles2: {
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 300);
            laceInTheDistanceField.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    distanceMuscles3: {
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 300);
            laceInTheVerticalMiddle.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    distanceMuscles4: {
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 10);
            noodlesHorizontal.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    springsSlowerLessElastic: { // This is a keeper.
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 300);
            springsSlowerLessElastic.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    exploring: {
        d: 4000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscles);
            var coFade = cosineFade(sum, 300);
            newBreakingApartAndGatheringAgain.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
        }
    },
    fasterSubtleTrunk: {
        d: 2000,
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
            var coFade = cosineFade(sum, 10);
            concerto.mix(sum, fasterSubtleTrunk, rN, coFade);
            // concerto.run();
            // fasterSubtleTrunk.run();
        }
    },
//     endTests0: {
//         d: 3000,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
//             // oscillators[183].run(0);
//             // drawBG();
//             var coFade = cosineFade(sum, 10);
// //             surprisinglyStableDynamicalLozenges.mix(sum, fasterSubtleTrunk, rN, coFade);
// //             cicadas.mix(sum, fasterSubtleTrunk, rN, coFade);
// //             escherLikeStaircases.mix(sum, fasterSubtleTrunk, rN, coFade);
//             tinyJumpers.mix(sum, fasterSubtleTrunk, rN, coFade);
//             // concerto.run();
//             // fasterSubtleTrunk.run();
//         }
//     },
    endTests: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            // oscillators[183].run(0);
            // drawBG();
            var coFade = cosineFade(sum, 10);
//             surprisinglyStableDynamicalLozenges.mix(sum, fasterSubtleTrunk, rN, coFade);
//             cicadas.mix(sum, fasterSubtleTrunk, rN, coFade);
            balancedDynamicalIntricate.mix(sum, fasterSubtleTrunk, rN, coFade);
            // concerto.run();
            // fasterSubtleTrunk.run();
        }
    },
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

function getCurrentXSheetScene(sheet) {
    var tL = Object.size(sheet);
    for (var i = 0; i < tL; i++) {
        var sum = 0;
        for (var ii = 0; ii < i; ii++) {
            sum += sheet.key(ii).d;
        }
        if (drawCount >= sum && drawCount < sum + sheet.key(i).d) {
            var name = Object.getOwnPropertyNames(sheet);
            return (name[i]);
        }
    }
}

function getCurrentSceneBoundaries(sheet) {
    var scene = xSheet[getCurrentXSheetScene(xSheet)];
    var sumOfPreviousScenes = getSum(xSheet, scene);
    var elapsed = drawCount - sumOfPreviousScenes;
    var remaining = scene.d - elapsed;
    return "| " + elapsed + " ... " + remaining + " | (" + scene.d + ")";
}