const CruiseShip = require('../src/cruise-ships.js');

describe('CruiseShip', () => {
  it('it can be instantiated', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
});

/* //describe ('addPassengers', () => {
   // it('adds the passengers to the ship', () =>{
        const CruiseShip = new CruiseShip();
        const mockCruiseShip = jest.fn();
        CruiseShip.addPassengers(mockCruiseShip);
        expect(CruiseShip.passengers).toContain([mockCruiseShip]) //an array goes here
    });
});*/
