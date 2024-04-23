class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalCost;
    }
}

const calculator = new UberPriceCalculator(13, 0.6, 3.7, 1.9);
const distance = 10; 
const time = 20; 
const price = calculator.calculatePrice(distance, time);
console.log("Total price:", price);
