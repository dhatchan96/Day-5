class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const distanceCost = distanceInKm * this.costPerKm;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
      return totalCost;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(5, 1.5, 0.2, 2.5); 
  const distance = 10;
  const time = 20; 
  const totalPrice = calculator.calculatePrice(distance, time);
  console.log("Total Price:", totalPrice);