let ingredients = [
  { name: "Salmon", amount: 1, measurement: "l lb" },
  { name: "Pine Nuts", amount: 1, measurement: "cup" },
  { name: "Butter Lettuce", amount: 2, measurement: "cups" },
  { name: "Yellow Squash", amount: 1, measurement: "med" },
  { name: "Olive Oil", amount: 0.5, measurement: "cup" },
  { name: "Garlic", amount: 3, measurement: "cloves" },
];

const List = (props) => {
  const { name } = props;
  return <li>{name}</li>;
};

export default function RecipesPage(props) {
  let num = 1;
  return (
    <div>
      {ingredients.map((ingredient, index) => {
        return <List key={index} name={ingredient.name} />;
      })}
    </div>
  );
}
