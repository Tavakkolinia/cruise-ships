function CruiseShip(currentPort) {
  this.currentPort = currentPort;
}
function Port(portName) {
  this.portName = portName;
}
CruiseShip.prototype.setSail = function () {
  this.currentPort = false;
};
CruiseShip.prototype.dock = function (port) {
  this.currentPort = port;
};
const ship = new CruiseShip();
const port = new Port('Dover');


module.exports = CruiseShip;

