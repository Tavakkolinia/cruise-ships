function CruiseShip(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
}


CruiseShip.prototype.setSail = function () {
  this.currentPort = false;
};
CruiseShip.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.currentPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
};
const ship = new CruiseShip();
const port = new Port('Dover');


module.exports = CruiseShip;

