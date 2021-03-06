var fs = require('fs');
let computedInput = "";
let fileName = "montage009";

let sequences = [{
        path: `/Volumes/Volumina/frames/wtwf/montage/test005/sketch-`,
        start: 0,
        end: 0,
        copies: 12
    },
    {
        path: `/Volumes/Volumina/frames/wtwf/montage/test009/sketch-`,
        start: 1,
        end: 13593,
        copies: 1
    }, {
        path: `/Volumes/Volumina/frames/wtwf/montage/test005/sketch-`,
        start: 0,
        end: 0,
        copies: 12
    }
];

for (s of sequences) {
    for (let f = s.start; f <= s.end; f++) {
        var formattedF = "" + f;
        while (formattedF.length < 5) {
            formattedF = "0" + formattedF;
        }
        let line = `file '${s.path}${formattedF}.png'\n`;
        for (let i = 0; i < s.copies; i++) {
            computedInput += line;
        }
    }
}

fs.writeFile(fileName + '.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log(fileName + '.txt written successfully.');
    }
});