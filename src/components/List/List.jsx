import React, { useEffect } from "react";
import { fetchListRestaurant } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Styled from "styled-components";

const Cards = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 25%;
margin: 20px;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
@media (max-width: 908px) {
    width: 80%;
}
`;
const Container = Styled.div`
padding: 2px 16px;
display: flex;
flex-direction: column;
}
`;
const Title = Styled.h3`
font-size: 24px;
text-align: center;
`;
const Button = Styled.button`
a{
    color: black;
    text-decoration: none;
}
width: 50%;
align-self: center;
margin-bottom: 10px;
`;
const Image = Styled.img`
width: 80%;
margin: 20px 40px 0 40px;
`;
const FlexWrap = Styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
box-sizing: border-box;
`;

function List(props) {
  useEffect(() => {
    props.dispatch(fetchListRestaurant());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Title as="h1">Cari Makan</Title>
      <FlexWrap>
        {props.restaurants !== undefined &&
          props.restaurants.map((item) => {
            return (
              <Cards key={item.restaurant.id}>
                <Image
                  src={item.restaurant.featured_image}
                  alt="Card image cap"
                />
                <Container>
                  <Title>{item.restaurant.name}</Title>

                  <Button>
                    {" "}
                    <Link to={`/restaurants/${item.restaurant.id}`}>
                      Detail
                    </Link>
                  </Button>
                </Container>
              </Cards>
            );
          })}
      </FlexWrap>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.list.restaurants,
  };
};
export default connect(mapStateToProps, null)(List);
