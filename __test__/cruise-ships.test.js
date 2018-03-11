const CruiseShip = require('../src/cruise-ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('CruiseShip', () => {
  it('it can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('it has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('docks at different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new CruiseShip(itinerary);
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });
});

