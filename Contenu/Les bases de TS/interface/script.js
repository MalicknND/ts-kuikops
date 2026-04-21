class RocketImpl {
    reactors;
    vMax;
    price;
    carburant;
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action) {
        console.log(`Rocket is taking off with action: ${action}`);
    }
}
const myRocket = new RocketImpl(4, 20000, 5000000, "liquid");
myRocket.takeOff("ignition");
console.log(myRocket);
export {};
//# sourceMappingURL=script.js.map