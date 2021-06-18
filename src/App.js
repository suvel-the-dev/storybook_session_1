import './App.css';
import AddRecipeBtn from './components/AddRecipeBtn';
import Recipe from './components/Recipe'
import { AppProvider } from './context/AppContext'


const recipeObj = {
  title: "Egg",
  category: "simple",
  categoryColor: "yellow",
  procedure: "1.Boil Maggie separately, 2.Boil egg, 3.Mix egg and masala with noodles"
}

let recipes = [];

for (let i = 0; i < 10; i++) { recipes.push(recipeObj) }

function App() {

  const handelAddRecipe = () => {
    // handelAddRecipe
  }

  return (
    <div class="container">
      <AppProvider>
        <div class="app">
          <div class="app__header">
            Logo
          </div>
          <div class="app__body">
            <div className="addRecipe__container">
              <AddRecipeBtn handelAddRecipe={handelAddRecipe} />
            </div>
            <div className='recipes__container' >
              {
                recipes.map(r => {
                  return (
                    <Recipe
                      title={r.title}
                      category={r.category}
                      categoryColor={r.categoryColor}
                      procedure={r.procedure}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
