let xSheetInit = false;

xSheet = {
    // ------------------------------------------------------------------------- //
    // Introduction
    // ------------------------------------------------------------------------- //   
    overture: {
        d: 185,
        f: sum => {
            var rN = getSum(xSheet, xSheet.title);
            overture.run(rN);
        }
    },
    traffic3FadeIn: {
        d: 1600 - 150 - 72 - 24 + 200 - 50,
        f: sum => {
            traffic3FadeIn.run(sum - 150);
        }
    },
    endOftraffic3FadeIn: {
        d: 72 - 5,
        f: sum => {
            var rN = getSum(xSheet, xSheet.traffic3FadeIn);
            var coFade = cosineFade(sum, 72);
            neutral.lerp(sum, traffic3FadeIn, rN - 150, coFade);
        }
    },
    noodlesHorizontal: {
        d: 1200 - 200 + 50 + 5 - 48,
        f: sum => {
            var rN = getSum(xSheet, xSheet.endOftraffic3FadeIn);
            var coFade = cosineFade(sum - 12, 600 - 100);
            noodlesHorizontal.lerp(sum + 55 * 0, neutral, rN - 150, coFade);
        }
    },
    neutral0: {
        d: 48 + 48,
        f: sum => {
            var rN = getSum(xSheet, xSheet.noodlesHorizontal);
            var coFade = cosineFade(sum, 48 + 48);
            neutral.lerp(sum, noodlesHorizontal, rN + 55 * 0, coFade);
        }
    },
    // ------------------------------------------------------------------------- //
    // The pillars sequence
    // ------------------------------------------------------------------------- //   
    curvyPillarsB: {
        d: 106,
        f: sum => {
            curvierPillarsB.run(sum);
        }
    },
    curvierPillarsBFlip: {
        d: 106,
        f: sum => {
            curvierPillarsBFlip.run(sum);
        }
    },
    curvierPillarsC: {
        d: 91,
        f: sum => {
            curvierPillarsC.run(sum - 10);
        }
    },
    curvierPillarsCFlip: {
        d: 91,
        f: sum => {
            curvierPillarsCFlip.run(sum - 10);
        }
    },
    curvierPillars: {
        d: 133,
        f: sum => {
            curvierPillars.run(sum - 5);
        }
    },
    curvierPillarsFlip: {
        d: 133 - 24,
        f: sum => {
            curvierPillarsFlip.run(sum - 5);
        }
    },
    blendyCavernB: {
        d: 450,
        f: sum => {
            var rN = getSum(xSheet, xSheet.curvierPillarsFlip);
            var coFade = cosineFade(sum, 48);
            blendyCavernB.lerp(sum, curvierPillarsFlip, rN - 5, coFade);
        }
    },
    // ------------------------------------------------------------------------- //
    // The travellers sequence
    // ------------------------------------------------------------------------- //   
    travellers2: {
        d: 300,
        f: sum => {
            var rN = getSum(xSheet, xSheet.blendyCavernB);
            var coFade = cosineFade(sum, 100);
            travellers2.lerp(sum, blendyCavernB, rN, coFade);
        }
    },
    travellers2B: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2);
            var coFade = cosineFade(sum, 24);
            travellers2B.lerp(sum, travellers2, rN, coFade);
        }
    },
    travellers2C: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2B);
            var coFade = cosineFade(sum, 24);
            travellers2C.lerp(sum, travellers2B, rN, coFade);
        }
    },
    travellers2CFlip: {
        d: 150,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2C);
            var coFade = cosineFade(sum, 24);
            travellers2CFlip.lerp(sum, travellers2C, rN, coFade);
        }
    },
    travellers2DFlip: {
        d: 48,
        f: sum => {
            var rN = getSum(xSheet, xSheet.travellers2CFlip);
            var coFade = cosineFade(sum, 12);
            travellers2DFlip.lerp(sum + 14, travellers2CFlip, rN, coFade);
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
    // ------------------------------------------------------------------------- //
    // The eggs sequence
    // ------------------------------------------------------------------------- //   
    yetMoreHungryClouds: {
        d: 125 - 33,
        f: sum => {
            yetMoreHungryClouds.run(sum - 33);
        }
    },
    yetMoreHungryCloudsB: {
        d: 123,
        f: sum => {
            yetMoreHungryCloudsB.run(sum);
        }
    },
    eggs: {
        d: 75,
        f: sum => {
            eggs.run(sum);
        }
    },
    eggsFlip: {
        d: 75,
        f: sum => {
            eggsFlip.run(sum);
        }
    },
    eggsC: {
        d: 75,
        f: sum => {
            eggsC.run(sum);
        }
    },
    eggsCFlip: {
        d: 75,
        f: sum => {
            eggsCFlip.run(sum);
        }
    },
    eggsD: {
        d: 70,
        f: sum => {
            eggsD.run(sum);
        }
    },
    eggsDFlip: {
        d: 70,
        f: sum => {
            eggsDFlip.run(sum);
        }
    },
    electronicDecorativeEggs: {
        d: 118 - 2,
        f: sum => {
            electronicDecorativeEggs.run(sum - 2);
        }
    },
    electronicDecorativeEggsFlip: {
        d: 118 - 2,
        f: sum => {
            electronicDecorativeEggsFlip.run(sum - 2);
        }
    },
    harmoniousEggs2: {
        d: 300 - 12,
        f: sum => {
            var rN = getSum(xSheet, xSheet.electronicDecorativeEggsFlip);
            harmoniousEggs2.run(rN - 28 + 153 - 12);
        }
    },
    harmoniousEggs2Flip: {
        d: 300 - 8,
        f: sum => {
            var rN = getSum(xSheet, xSheet.harmoniousEggs2);
            harmoniousEggs2Flip.run(rN - 28 - 8);
        }
    },
    // ------------------------------------------------------------------------- //
    // The river sequence
    // ------------------------------------------------------------------------- //   
    escherLikeStaircases: {
        d: 440 - 10 - 57 + 25 - 30 - 100,
        f: sum => {
            var rN = getSum(xSheet, xSheet.mellowFestive);
            var coFade = cosineFade(sum, 72 * 2);
            escherLikeStaircases.blend(sum, neutral, rN, coFade);
        }
    },
    escherLikeRiver: {
        d: 440 - 10 + 15 - 60 + 30 + 100,
        f: sum => {
            var rN = getSum(xSheet, xSheet.escherLikeStaircases);
            var coFade = cosineFade(sum, 150 + 30 + 100 + 100 + 50);
            escherLikeRiver.lerp(sum, escherLikeStaircases, rN, coFade);
        }
    },
    escherLikeRiver2: {
        d: 440 - 10 + 15 + 60,
        f: sum => {
            var rN = getSum(xSheet, xSheet.escherLikeRiver);
            var coFade = cosineFade(sum, 150 + 60 + 60 + 60 + 100 + 100);
            escherLikeRiver2.lerp(sum, escherLikeRiver, rN, coFade);
        }
    },
    plantsSofter: {
        d: 800 - 25 + 25,
        f: sum => {
            var rN = getSum(xSheet, xSheet.escherLikeRiver2);
            var coFade = cosineFade(sum, 200);
            plantsSofter.lerp(sum, escherLikeRiver2, rN, coFade);
        }
    },
    // ------------------------------------------------------------------------- //
    // The storm sequence
    // ------------------------------------------------------------------------- //
    middleOfTheMuscularDistanceField: {
        d: (911 + 24 * 8) - 120 - 100 + 8,
        f: sum => {
            var rN = getSum(xSheet, xSheet.plantsSofter);
            var coFade = cosineFade(sum, 300);
            middleOfTheMuscularDistanceField.lerp(sum, plantsSofter, rN, coFade);
        }
    },
    muscleFibersRebuildingThemselves: {
        d: 438 + 120 + 100 - 8,
        f: sum => {
            var rN = getSum(xSheet, xSheet.middleOfTheMuscularDistanceField);
            var coFade = cosineFade(sum, 185 + 100 - 8);
            muscleFibersRebuildingThemselves.lerp(sum - 270 + 120 + 100 - 8, middleOfTheMuscularDistanceField, rN, coFade);
        }
    },
    endOfStormyMuscles: {
        d: 196 + 39,
        f: sum => {
            var rN = getSum(xSheet, xSheet.muscleFibersRebuildingThemselves);
            var coFade = cosineFade(sum, 96 + 100);
            neutral.blend(sum, muscleFibersRebuildingThemselves, rN - 270 + 120 + 100 - 8, coFade);
        }
    },
    // ------------------------------------------------------------------------- //
    // The festive sequence
    // ------------------------------------------------------------------------- //   
    vanishingClouds: {
        d: 91,
        f: sum => {
            var rN = getSum(xSheet, xSheet.endOfStormyMuscles);
            var coFade = cosineFade(sum, 48);
            //             vanishingClouds.run(sum);
            vanishingClouds.lerp(sum, neutral, rN, coFade);
        }
    },
    vanishingCloudsSecondHalf: {
        d: 162,
        f: sum => {
            var rN = getSum(xSheet, xSheet.vanishingClouds);
            vanishingClouds.run(rN - 39);
        }
    },
    vanishingCloudsB: {
        d: 175 - 7,
        f: sum => {
            vanishingCloudsB.run(sum - 125);
        }
    },
    newerFestive: {
        d: 600 - 2 + 17 + 7 - 55,
        f: sum => {
            newerFestive.run(sum - 2);
        }
    },
    finalFestive: {
        d: 1593,
        f: sum => {
            var rN = getSum(xSheet, xSheet.newerFestive);
            var coFade = cosineFade(sum, 450);
            finalFestive.centerWipe(sum - 400, newerFestive, rN - 2, coFade);
        }
    },
    empty: {
        d: 450,
        f: sum => {
            empty.run(sum);
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
    var coFade = map(Math.cos(fadeSmooth), 1, -1, 0, 1);
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