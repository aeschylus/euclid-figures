import euclidFigures from '../../src/euclid-figures';

describe('euclidFigures', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(euclidFigures, 'greet');
      euclidFigures.greet();
    });

    it('should have been run once', () => {
      expect(euclidFigures.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(euclidFigures.greet).to.have.always.returned('hello');
    });
  });
});
