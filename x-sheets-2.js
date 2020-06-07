let xSheetInit = false;

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
    noodles: {
        d: 1200,
        f: sum => {
            var rN = getSum(xSheet, xSheet.trafficFadeIn);
            var coFade = cosineFade(sum, 600);
            noodlesHorizontal.mix(sum, traffic3FadeIn, rN, coFade);
        }
    },
    neutral0: {
        d: 48,
        f: sum => {
            var rN = getSum(xSheet, xSheet.noodles);
            var coFade = cosineFade(sum, 48);
            neutral.mix(sum, noodlesHorizontal, rN, coFade);
        }
    },
    curvyPillarsB: {
        d: 106,
        f: sum => {
            curvierPillarsB.run(sum);
        }
    },
    curvyPillarsBf: {
        d: 106,
        f: sum => {
            curvierPillarsBFlip.run(sum);
        }
    },
    curvyPillarsC: {
        d: 91,
        f: sum => {
            curvierPillarsC.run(sum - 10);
        }
    },
    curvyPillarsCf: {
        d: 91,
        f: sum => {
            curvierPillarsCFlip.run(sum - 10);
        }
    },
    curvyPillars: {
        d: 133,
        f: sum => {
            curvierPillars.run(sum - 5);
        }
    },
    curvyPillarsFlip: {
        d: 133 - 24,
        f: sum => {
            curvierPillarsFlip.run(sum - 5);
        }
    },
    blendyCav: {
        d: 450,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.curvyPillarsFlip);
            var coFade = cosineFade(sum, 48);
            blendyCavernB.mix(sum, curvierPillarsFlip, rN - 5, coFade);
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
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.blendyMuscles);
            var coFade = cosineFade(sum, 100);
            travellers2.mix(sum, muscleFibersRebuildingThemselves, rN + 500, coFade);
        }
    },
    travellers2B: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2);
            var coFade = cosineFade(sum, 24);
            travellers2B.mix(sum, travellers2, rN, coFade);
        }
    },
    travellers2C: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2B);
            var coFade = cosineFade(sum, 24);
            travellers2C.mix(sum, travellers2B, rN, coFade);
        }
    },
    travellers2CFlip: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2C);
            var coFade = cosineFade(sum, 24);
            travellers2CFlip.mix(sum, travellers2C, rN, coFade);
        }
    },
//     travellersToNeutral: {
//         d: 12,
//         f: sum => {
//             var rN = getSum(xSheet, xSheet.travellers2CFlip);
//             var coFade = cosineFade(sum, 12);
//             neutral.mix(sum, travellers2CFlip, rN, coFade);
//         }
//     },
    travellers2DFlip: {
        d: 48,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2CFlip);
            var coFade = cosineFade(sum, 12);
//             travellers2D.run(sum);
            travellers2DFlip.mix(sum + 14, travellers2CFlip, rN, coFade);
        }
    },
    travellers2D: {
        d: 48,
        f: sum => {
            travellers2D.run(sum);
        }
    },
    travellers2EC: {
        d: 48 - 6,
        f: sum => {
            travellers2EC.run(sum - 14);
        }
    },
    travellers2ED: {
        d: 48 - 6,
        f: sum => {
            travellers2ED.run(sum - 14 - 16);
        }
    },
    travellers4BiggerFlip: {
        d: 36,
        f: sum => {
            travellers4BiggerFlip.run(sum - 8 - 5 - 17);
        }
    },
    travellers4Bigger: {
        d: 36,
        f: sum => {
            travellers4Bigger.run(sum - 8 - 5);
        }
    },
    travellers2EB: {
        d: 48 - 14,
        f: sum => {
            travellers2EB.run(sum - 14);
        }
    },
    travellers2E: {
        d: 48 - 14,
        f: sum => {
            travellers2E.run(sum - 14);
        }
    },
    padding: {
        d: 100,
        f: sum => {
            neutral.run(sum);
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
    clouds: {
        d: 125,
        f: function(sum) {
            yetMoreHungryClouds.run(sum);
        }
    },
    cloudsB: {
        d: 137,
        f: function(sum) {
            yetMoreHungryCloudsB.run(sum);
        }
    },
    eggs0: {
        d: 75,
        f: sum => {
            eggs.run(sum);
        }
    },
    eggs0f: {
        d: 75,
        f: sum => {
            eggsFlip.run(sum);
        }
    },
    eggs0b: {
        d: 75,
        f: sum => {
            eggsB.run(sum);
        }
    },
    eggs0bf: {
        d: 75,
        f: sum => {
            eggsBFlip.run(sum);
        }
    },
    eggs0c: {
        d: 75,
        f: sum => {
            eggsC.run(sum);
        }
    },
    eggs0cf: {
        d: 75,
        f: sum => {
            eggsCFlip.run(sum);
        }
    },
    eggs0d: {
        d: 75,
        f: sum => {
            eggsD.run(sum);
        }
    },
    eggs0df: {
        d: 75,
        f: sum => {
            eggsDFlip.run(sum);
        }
    },
    eggs1: {
        d: 118,
        f: sum => {
            electronicDecorativeEggs.run(sum);
        }
    },
    eggs1f: {
        d: 118,
        f: sum => {
            electronicDecorativeEggsFlip.run(sum);
        }
    },
    harEggs2: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.eggs1f);
            harmoniousEggs2.run(rN - 28 + 153);
        }
    },
    harEggs2Flip: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.harEggs2);
            harmoniousEggs2Flip.run(rN - 28);
        }
    },
    //-------------------  End of the Egg Sequence -----------------------------------------//
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
    distanceMuscles: {
        d: 2000,
        f: sum => {
            var rN = getSum(xSheet, xSheet.plantsSofter);
            var coFade = cosineFade(sum, 300);
            middleOfTheMuscularDistanceField.blend(sum, plantsSofter, rN + 1000, coFade);
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
            var rN = getSum(xSheet, xSheet.distanceMuscles3);
            var coFade = cosineFade(sum, 300);
            bigTravelInABrokenLand.blend(sum, laceInTheVerticalMiddle, rN, coFade);
        }
    },
    //     distanceMuscles4: {
    //         d: 2000,
    //         f: sum => {
    //             var rN = getSum(xSheet, xSheet.muscles);
    //             var coFade = cosineFade(sum, 10);
    //             noodlesHorizontal.mix(sum, muscleFibersRebuildingThemselves, rN, coFade);
    //         }
    //     },
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
        d: 200,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            fasterSubtleTrunk.run(sum);
        }
    },
    newSubtleTrunk: {
        d: 224,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            var coFade = cosineFade(sum, 48);
            newSubtleTrunk.mix(rN, fasterSubtleTrunk, rN, coFade);
        }
    },
//     concerto: {
//         d: 400,
//         f: function(sum) {
//             var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
//             var coFade = cosineFade(sum, 48);
//             concerto.mix(sum, newSubtleTrunk, rN, coFade);
//         }
//     },
    concertoEnd: {
        d: 500,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet.fasterSubtleTrunk);
            var coFade = cosineFade(sum, 48);
            mellowFestive.mix(sum, newSubtleTrunk, rN, coFade);
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
if (xSheetInit) {
    xSheetDuration = sumXSheet(xSheet);
    if (clipping && clipType.type == "scene") {
        clipScene(clipType.ind, clipType.startOffset, clipType.endOffset);
    } else if (clipping && clipType.type == "sequence") {
        clipSequence(clipType.firstInd, clipType.lastInd, clipType.startOffset, clipType.endOffset);
    }
    updateView();
}

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

function jumpToScene(scene, startOffset = 0) {
    if (typeof scene == "string") {
        drawCount = getSum(xSheet, xSheet[scene]) + startOffset;
    } else if (typeof scene == "number") {
        let list = Object.getOwnPropertyNames(xSheet);
        drawCount = getSum(xSheet, xSheet[list[scene]]) + startOffset;
    }
    repositionSong = true;
    if (!looping) {
        drawCount--;
        redraw();
    }
}

function jump(frame) {
    drawCount = frame;
    repositionSong = true;
    if (!looping) {
        drawCount--;
        redraw();
    }
}

function jumpRelative(delta) {
    drawCount += delta;
    repositionSong = true;
    if (!looping) {
        drawCount--;
        redraw();
    }
}

function clipScene(scene, startOffset = 0, endOffset = 0) {
    let start, end, ind;
    let list = Object.getOwnPropertyNames(xSheet);
    if (typeof scene == "string") {
        start = getSum(xSheet, xSheet[scene]);
        end = start + xSheet[scene].d;
        for (let i = 0; i < list.length; i++) {
            if (list[i] == scene) {
                ind = i;
            }
        }
    } else if (typeof scene == "number") {
        start = getSum(xSheet, xSheet[list[scene]]);
        end = start + xSheet[list[scene]].d;
        ind = scene;
    }
    clip(start + startOffset, end + endOffset, {
        type: "scene",
        ind: ind,
        startOffset: startOffset,
        endOffset: endOffset
    });
    updateView();
}

function clipSequence(start, end, startOffset = 0, endOffset = 0) {
    let list = Object.getOwnPropertyNames(xSheet);
    let frameStart = getSum(xSheet, xSheet[list[start]]);
    let frameEnd = getSum(xSheet, xSheet[list[end]]) + xSheet[list[end]].d;
    clip(frameStart + startOffset, frameEnd + endOffset, {
        type: "sequence",
        firstInd: start,
        lastInd: end,
        startOffset: startOffset,
        endOffset: endOffset
    });
    updateView();
}

function displayTimeline() {
    var list = Object.getOwnPropertyNames(xSheet);
    var totalDuration;
    var lastScene = xSheet[list[list.length - 2]];
    totalDuration = getSum(xSheet, lastScene) + lastScene.d;
    var norm = 1 / totalDuration * 1372;
    var durSoFar = 0;
    timelineCtx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    timelineCtx.fillRect(0, 0, 1372, 100);
    for (let i = 0; i <  list.length - 1; i++) {
        var dur = xSheet[list[i]].d;
        if (i % 2 == 0) {
            timelineCtx.fillStyle = 'rgb(255, 255, 255)';
        } else {
            timelineCtx.fillStyle = 'rgb(235, 235, 235)';
        }
        timelineCtx.fillRect(durSoFar * norm, 0, dur * norm, 100);
        durSoFar += dur;
    }
    if (clipping) {
        timelineCtx.strokeStyle = 'rgb(0, 0, 0)';
        timelineCtx.strokeRect(clipMin * norm, 40, (clipMax - clipMin) * norm, 45);
    }
    sheetSlider.elt.min = 0;
    sheetSlider.elt.max = xSheetDuration;
}

function displaySequence(start, end) {
    var listOfScenes = Object.getOwnPropertyNames(xSheet);
    var list = [];
    var totalDuration = 0;
    for (let i = start; i <= end; i++) {
        list.push(i);
        totalDuration += xSheet[listOfScenes[i]].d;
    }
    viewDur = totalDuration;
    var norm = 1 / totalDuration * 1372;
    var durSoFar = 0;
    timelineCtx.fillStyle = 'rgb(255, 255, 255)';
    timelineCtx.fillRect(0, 0, 1372, 100);
    for (let i = 0; i < list.length; i++) {
        var dur = xSheet[listOfScenes[list[i]]].d;
        if (i % 2 == 0) {
            timelineCtx.fillStyle = 'rgb(255, 255, 255)';
        } else {
            timelineCtx.fillStyle = 'rgb(235, 235, 235)';
        }
        timelineCtx.fillRect(durSoFar * norm, 0, dur * norm, 100);
        durSoFar += dur;
    }
    var minVal = getSum(xSheet, xSheet[listOfScenes[start]]);
    viewMin = minVal;
    var maxVal = getSum(xSheet, xSheet[listOfScenes[start]]) + totalDuration;
    if (clipping) {
        timelineCtx.strokeStyle = 'rgb(0, 0, 0)';
        timelineCtx.strokeRect((clipMin - minVal) * norm, 40, (clipMax - clipMin) * norm, 45);
    }
    sheetSlider.elt.min = minVal;
    sheetSlider.elt.max = maxVal;
}

function showSequence(start, end) {
    viewType = {
        type: "sequence",
        start: start,
        end: end
    };
    displaySequence(start, end);
}

function showTimeline() {
    viewType = {
        type: "timeline"
    };
    displayTimeline();
}

function updateView() {
    if (viewType.type == "sequence") {
        displaySequence(viewType.start, viewType.end);
    } else {
        displayTimeline();
    }
}