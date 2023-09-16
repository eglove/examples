export type Car = {
  make: string;
  mileage: number;
  model: string;
  year: number;
};

export type Analysis = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

export function analyzeCarMileage(cars: Car[]): Analysis {
  let totalMileage = 0;
  let highestMileageCar = cars[0];
  let lowestMileageCar = cars[0];

  for (const car of cars) {
    if (car.mileage > highestMileageCar.mileage) {
      highestMileageCar = car;
    }

    if (car.mileage < lowestMileageCar.mileage) {
      lowestMileageCar = car;
    }

    totalMileage += car.mileage;
  }

  return {
    averageMileage: Number((totalMileage / cars.length).toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
