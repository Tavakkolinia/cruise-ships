/* globals window */
(function exportPort() {
  function Port(portName) {
    this.portName = portName;
    this.ships = [];
  }
  Port.prototype.addShip = function (ship) {
    this.ships.push(ship);
  };
  Port.prototype.removeShip = function (ship, ships) {
    this.ships.splice(ship, 1);
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());

