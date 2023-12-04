// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function NewsCard() {
//   return (

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top"  />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <span>User Name</span>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">ssss</Button>
//           </Card.Body>
//         </Card>
//   );
// }

// export default NewsCard;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AddNewsComment from './AddNewsComment';
import { Form } from 'react-bootstrap';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <span style={{ fontSize: '10px' }}>2</span>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to unfavorite">
          <span style={{ fontSize: '10px' }}>2</span>
          <HeartBrokenIcon />
        </IconButton>
        <IconButton aria-label="comment">

        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <AddNewsComment />

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <div className='d-flex justify-content-between'> <Form.Label style={{fontSize:'10px'}}>Heading</Form.Label><Form.Label style={{fontSize:'10px',color:'grey'}}><DeleteSweepOutlinedIcon /></Form.Label></div>
              <Form.Control className='border rounded p-2' type="text" placeholder="commant" readOnly/>
            </Form.Group>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
