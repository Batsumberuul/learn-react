let ingredients = [
  { name: "Salmon", amount: 1, measurement: "l lb" },
  { name: "Pine Nuts", amount: 1, measurement: "cup" },
  { name: "Butter Lettuce", amount: 2, measurement: "cups" },
  { name: "Yellow Squash", amount: 1, measurement: "med" },
  { name: "Olive Oil", amount: 0.5, measurement: "cup" },
  { name: "Garlic", amount: 3, measurement: "cloves" },
];

let steps = [
  "Preheat the oven to 350 degrees.",
  "Spread the olive oil around a glass baking dish.",
  "Add the salmon, garlic, and pine nuts to the dish.",
  "Bake for 15 minutes.",
  "Add the yellow squash and put back in the oven for 30 mins.",
  "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
];

let fishIngredients = [
  { name: "Whitefish", amount: 1, measurement: "l lb" },
  { name: "Cheese", amount: 1, measurement: "cup" },
  { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
  { name: "Tomatoes", amount: 2, measurement: "large" },
  { name: "Tortillas", amount: 3, measurement: "med" },
];
let fishsteps = [
  "Cook the fish on the grill until hot.",
  "Place the fish on the 3 tortillas.",
  "Top them with lettuce, tomatoes, and cheese",
];

const List = (props) => {
  const { name } = props;
  return <li>{name}</li>;
};
const Steps = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};
const FishList = (props) => {
  const { fishName } = props;
  return <li>{fishName}</li>;
};
const FishSteps = (props) => {
  const { fishText } = props;
  return <p>{fishText}</p>;
};

function RecipesPage(props) {
  return (
    <div>
      <h1>Delicious Recipes</h1>
      <h3>Baked Salmon</h3>
      {ingredients.map((ingredient, index) => {
        return <List key={index} name={ingredient.name} />;
      })}
      <h3>Cooking Instructions</h3>
      {steps.map((step, index) => {
        return <Steps text={step} />;
      })}
      <h3>Fish Tacos</h3>
      {fishIngredients.map((fishIngredient) => {
        return <FishList fishName={fishIngredient.name} />;
      })}
      <h3>Cooking Instructions</h3>
      {fishsteps.map((fishstep, index) => {
        return <FishSteps fishText={fishstep} />;
      })}
    </div>
  );
}
export default RecipesPage;
