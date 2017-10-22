import React from "react";

export default ({ matchIngredients, ingredients = [] }) => {
  return (
    <span>
      pasujących składników: {matchIngredients} z {ingredients.length}
    </span>
  );
};
