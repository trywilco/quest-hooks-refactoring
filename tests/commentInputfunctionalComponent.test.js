import CommentInput from "./components/Item/CommentInput";

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

test(`Component is a functional Component`, () => {
  expect(isFunctionalComponent(CommentInput.WrappedComponent)).toBeTruthy();
});
