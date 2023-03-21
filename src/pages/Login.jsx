import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import ImageListItem from "@mui/material/ImageListItem";

const Login = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://picsum.photos/100",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://picsum.photos/200",
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
      image: "https://picsum.photos/500",
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!",
      image: "https://picsum.photos/300",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <ImageListItem>
        <img
          src={`${props.item.image} ?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${props.item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={props.name}
          style={{height:"700px" }}
          loading="lazy"
        />
      </ImageListItem>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Login;
