function CruiseShip(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.currentPort.addShip(this);

}

CruiseShip.prototype.setSail = function () {
  this.currentPort.removeShip(this);
  this.currentPort = false;
};
CruiseShip.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.currentPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = CruiseShip;

