const CruiseShip = require('../src/cruise-ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('CruiseShip', () => {
  describe('with a port and itinerary', () => {
    let ship;
    let port;
    beforeEach(() => {
      port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      ship = new CruiseShip(itinerary);
    });
    it('it can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('it has a starting port', () => {
      expect(ship.currentPort).toBe(port);
    });
    it('can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(port.ships).not.toContain(ship);
    });
    it('docks at different port', () => {
      expect(port.ships).toContain(ship);
    });
  });
  it('gets added to port of instantiation', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    expect(port.ships).toContain(ship);
  });
});

