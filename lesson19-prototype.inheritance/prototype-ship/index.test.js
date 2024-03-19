import { vehicle, ship } from './index';

it('should to start moving', () => {
  expect(ship.move()).toEqual('Argo is moving');
});
it('should to get anchor up', () => {
  expect(ship.startMachine()).toEqual('Argo lifting anchor up');
});
it('should to stop moving', () => {
  expect(ship.stop()).toEqual('Argo is stoping');
});
it('should to get anchor down', () => {
  expect(ship.stopMachine()).toEqual('Argo lifting anchor down');
});
