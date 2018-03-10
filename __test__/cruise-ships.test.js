const CruiseShip = require('../src/cruise-ships.js');

describe('CruiseShip', () => {
  it('it can be instantiated', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
  it('it has a starting port', () => {
    const ship = new CruiseShip('Portovenere');
    expect(ship.startingPort).toBe('Portovenere');
  });
  it('can set sail', () => {
    const ship = new CruiseShip();
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

