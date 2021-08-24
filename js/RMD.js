var RMD = {
    minAge: 70,
    maxAge: 115,
    maxDistributionPeriods: 1.9,
    distributionPeriods: [
        /*70s*/ 27.4, 26.5, 25.6, 24.7, 23.8, 22.9, 22.0, 21.2, 20.3, 19.5,
        /*80s*/ 18.7, 17.9, 17.1, 16.3, 15.5, 14.8, 14.1, 13.4, 12.7, 12.0,
        /*90s*/ 11.4, 10.8, 10.2, 9.6, 9.1, 8.6, 8.1, 7.6, 7.1, 6.7, 
        /*100s*/6.3, 5.9, 5.5, 5.2, 4.9, 4.5, 4.2, 3.9, 3.7, 3.4,
        /*110s*/3.1, 2.9, 2.6, 2.4, 2.1, 1.9 
    ],
    getRmdPercentage: function(age) {
        if (age < this.minAge) {
            return 0;
        }
        if (age > this.maxAge) {
            return 1/this.maxDistributionPeriods;
        }
        return 1/this.distributionPeriods[age - this.minAge];
    }
};