expect.extend({
  toBeArrayOfObjectWith(received, ...keys) {
    const hasValidProperties = (object) => keys.reduce(
      (
        accumulator, current,
      ) => accumulator && Object.prototype.hasOwnProperty.call(object, current),
      true,
    );

    const failingElement = received.reduce((accumulator, current) => {
      if (!hasValidProperties(current)) {
        return current;
      }

      return accumulator;
    }, null);

    const { printReceived, printExpected } = this.utils;

    return {
      pass: failingElement === null,
      message: () => (
        `expected ${printReceived(failingElement)} to 
        ${failingElement === null ? 'not' : ''} has 
        ${printExpected(keys.join(', '))} as property`
      ),
    };
  },
});
