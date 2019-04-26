const Friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/Friends", function (req, res) {
        res.json(Friends);
    });

    app.post("/api/Friends", function (req, res) {
        let migos = req.body;
        let match = {
            name: "",
            photo: "",
            scoreDiff: 0
        };
        console.log(migos);

        var userScores = migos.scores;

        var diff;
        for (var i = 0; i < Friends.length; i++) {
            var currentFriend = Friends[i];
            diff = 0;
            console.log(currentFriend);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                diff += Math.abs(currentFriend.scores[j] - parseInt(userScores[j]));
            }
            console.log("diff =" + diff);


            if (match.scoreDiff < diff) {
                match.name = currentFriend.name;
                match.photo = currentFriend.photo;
                match.scoreDiff = diff;
            }
        }



        console.log(match);
        console.log(migos);
        Friends.push(migos);
        res.json(match);
    });








};