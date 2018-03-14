const Port = require('../src/Port.js');



describe('Port', () => {
  it('it can be instantiated', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
  });
  it('the port has a name', () => {
    const port = new Port('Dover');
    expect(port.portName).toEqual('Dover');
  });
  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});
