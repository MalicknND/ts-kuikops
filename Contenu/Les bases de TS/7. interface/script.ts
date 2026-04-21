interface Rocket {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
}

// Même chose que :
// type Rocket = {
//   reactors: number;
//   vMax: number;
//   takeOff: (action: string) => void;
// };

interface Rocket {
  price: number;
  carburant: string;
}

class RocketImpl implements Rocket {
  reactors: number;
  vMax: number;
  price: number;
  carburant: string;

  constructor(
    reactors: number,
    vMax: number,
    price: number,
    carburant: string,
  ) {
    this.reactors = reactors;
    this.vMax = vMax;
    this.price = price;
    this.carburant = carburant;
  }

  takeOff(action: string): void {
    console.log(`Rocket is taking off with action: ${action}`);
  }
}

const myRocket = new RocketImpl(4, 20000, 5000000, "liquid");
myRocket.takeOff("ignition");
console.log(myRocket);
