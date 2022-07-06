import React from "react";

const Home = ({ name, click }) => {
  return (
    <h1 onClick={click}>THIS IS HOME: {name} </h1>
  )
}

export default Home;