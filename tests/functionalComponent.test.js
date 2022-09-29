const yargs = require("yargs");
const argv = yargs(process.argv).argv;
const Component = require(argv.component).default;

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
