const CruiseShip = require('../src/cruise-ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('CruiseShip', () => {
  describe('with a port and itinerary', () => {
    let ship;
    let port;
    let calais;
    let dover;
    beforeEach(() => {
      port = {
        name: 'Dover',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };


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
      expect(port.removeShip).toHaveBeenCalledWith(ship);
    });
    it('docks at different port', () => {
      dover = {
        name: 'Dover',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      calais = {
        name: 'Calais',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      const itinerary = new Itinerary([dover, calais]);
      ship = new CruiseShip(itinerary);
      ship.dock();
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it('gets added to port of instantiation', () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });
  });
});

