const Port = require('../src/Port.js');

describe('Port', () => {
  it('it can be instantiated', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
  });
  it('the port has a name', () => {
    const port = new Port('Dover');
    expect(port.portName).toEqual('Dover');
  });
});
