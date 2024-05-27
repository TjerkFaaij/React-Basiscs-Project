import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <div>
      {userRecipe ? (
        <RecipePage hit={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setUserRecipe} />;
        </>
      )}
    </div>
  );
};
