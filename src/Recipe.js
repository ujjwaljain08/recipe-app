import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AppBar} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
 
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
        margin:30,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    }, 
    space: {
        margin: theme.spacing(1),
      },
      appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
     
  }));


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function Recipe({title,colories,image,ingredients,healthLabels}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [Save, setSave] = useState([]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleSave=()=>{
        
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

  const [expanded, setExpanded] = React.useState(false);
      
    return (
        <div>
            
            
             {/* Card */}
        <Card className={classes.root} p={4}>

        <CardHeader style={{height:"40px",padding:"50px"}}
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent >
       
          {
              healthLabels.map(tags=>(
                <Chip  variant="outlined" className={classes.space}  label={tags} style={{color:"pink",backgroundColor:"black"}} />
                 
              ))
          }
      
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          onClick={handleClickOpen}>
          <MoreVertIcon />
        </IconButton>
      </CardActions>
     
    </Card>
            {/* Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>



        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Detailed Recipe 
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
              <ol>
                  {
                      ingredients.map(ingredient=>(
                       <li> <ListItemText primary={ingredient.text} /> </li>
                     
                    ))
                  }
              </ol>
              <Divider />
              <Divider />
          </ListItem>
        </List>
      </Dialog>
       
</div>
    )
}
