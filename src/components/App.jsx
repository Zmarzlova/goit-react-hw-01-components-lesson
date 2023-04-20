import { RecipeList } from "./RecipeList/RecipeList";
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./RecipeList/GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Component } from "react";


export class App extends Component {
  state = {
    recipes: initialRecipes,
  }

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }))
  }
  

  render() {
    return (
    <Layout>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
      <GlobalStyle />
    </Layout>
  );
}
}

