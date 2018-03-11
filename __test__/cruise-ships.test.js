const CruiseShip = require('../src/cruise-ships.js');
const Port = require('../src/cruise-ships.js');

describe('CruiseShip', () => {
  it('it can be instantiated', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
  it('it has a starting port', () => {
    const port = new Port('Dover');
    const ship = new CruiseShip(port);
    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const port = new Port('Dover');
    const ship = new CruiseShip(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('docks at different port', () => {
    const dover = new Port('Dover');
    const ship = new CruiseShip(dover);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  })
});

