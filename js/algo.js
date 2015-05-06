module.exports = {
    creditWeightedMean: function(modules) {
        return this.markRatio(modules) * 20;
    },

    markRatio: function(modules) {
        var receivedMarks = modules.reduce(function(prev, cur) {
            if (isNaN(cur.score)) return prev;
            return prev + cur.score;
        },0 );
        var possibleMarks = modules.reduce(function(prev, cur) {
            if (isNaN(cur.score) || isNaN(cur.possible)) return prev;
            return prev + 20;
        }, 0);

        return receivedMarks/possibleMarks;
    },

    possibleCredits: function(modules) {
        return modules.reduce(function(prev, cur) {
            if (isNaN(cur.score) || isNaN(cur.possible)) return prev;
            return prev + cur.possible;
        }, 0);
    },

    creditsEarned: function(modules) {
        return this.markRatio(modules) * this.possibleCredits(modules);
    },

    stat: function(modules) {
        return {
            earned: this.creditsEarned(modules).toFixed(2),
            mean: this.creditWeightedMean(modules).toFixed(2),
            possible: this.possibleCredits(modules).toFixed(2)
        }
    }
};