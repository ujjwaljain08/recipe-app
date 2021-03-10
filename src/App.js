import './App.css';
 
import React,{useState,useEffect} from "react";
import Recipe from "./Recipe"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    flexWrap:"wrap",
    margin:"10px auto",
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  
   
}));




function App() {
  const APP_ID="884343c5";
  const APP_KEY="9e98853b5dd89825f90779f797c2b08f";
  const [recipes, setRecipes] = useState([]);
  const [Input, setinput] = useState("Vegetarian"); 
  

  useEffect(() => {
    getRecipe();
  },[])
 


  const  getRecipe=async ()=>{
    const baseURL=`https://api.edamam.com/search?q=${Input}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response=await fetch(baseURL)
    const data=await response.json();
    console.log(data.hits)
    setRecipes(data.hits);
  }


  const classes = useStyles();
  
  return (
   <div>
        
       <Paper component="form" className={classes.root}>
         
        <InputBase
          className={classes.input}
          placeholder="Search Your Recipe"
          type="text" value={Input} 
          onChange={(e)=>setinput(e.target.value)}
          
      />
      
      <IconButton type="button" className={classes.iconButton} aria-label="search">
        <BookmarkIcon />
      </IconButton>
      <IconButton type="button"  onClick={getRecipe} className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

      </Paper>
    
      <Grid container>
        
      {
        recipes.map((recipe)=>(
          <Grid item xs={12} sm={6} lg={4} container
          direction="row"
          justify="space-around"
          alignItems="center"
         >
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          healthLabels={recipe.recipe.healthLabels}
          />
          </Grid>
        ))
      }
      </Grid>
  
      </div>
  );
}

export default App;
