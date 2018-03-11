const Port = require('../src/cruise-ships.js');
const CruiseShip = require('../src/cruise-ships.js');

describe('Port', () => {
  it('it can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('the port has a name', () => {
    const port = new Port('Dover');
    const ship = new CruiseShip(port);
    expect(ship.portName).toEqual('Dover');
  });
});

