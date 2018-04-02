/* globals window */
(function exportCruiseShip() {
  function CruiseShip(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
  }

  CruiseShip.prototype.setSail = function () {
    this.currentPort.removeShip(this);
    this.currentPort = false;
    this.renderMessageBox(`Now departing ${ship.currentPort.name}`);
  };
  CruiseShip.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.currentPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CruiseShip;
  } else {
    window.CruiseShip = CruiseShip;
  }
}());

