const file = process.argv[process.argv.length - 1];
const Component = require(file).default;

function isFunctionalComponent(Component) {
  return (
    typeof Component === "function" && // can be various things
    !(
      (
        Component.prototype && // native arrows don't have prototypes
        Component.prototype.isReactComponent
      ) // special property
    )
  );
}

test(`Componenet is a functional Componenet`, () => {
  expect(isFunctionalComponent(Component)).toBeTruthy();
});
