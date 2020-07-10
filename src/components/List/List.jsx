import React, { useEffect } from "react";
import { fetchListRestaurant } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Styled from "styled-components";

const Cards = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 15px;
width: 30%;
background-color: #e43444;
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

padding: 10px;
`;

const Image = Styled.img`
transform-origin: 50% 65%;
transition: transform 5s, filter 3s ease-in-out;
filter: brightness(150%);
width: 100%;
height: 190px;
objecy-fit: cover;
`;
const FlexWrap = Styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
box-sizing: border-box;
background-color: white;
`;
const ColorBlack = Styled.div`
background-color: white;
`;

const HoverZoom = Styled.div`

width: 100%;
height: 190px;
overflow: hidden;
&:hover ${Image}{
    filter: brightness(100%);
    transform: scale(3);
}
}
`;
function List(props) {
    useEffect(() => {
        props.dispatch(fetchListRestaurant());
        // eslint-disable-next-line
    }, []);
    console.log(props.restaurants);
    return (
        <ColorBlack>
            <Title as="h1" style={{ background: "rgba(244, 64, 76, 0.5)" }}>
                Temukan Restoran Favoritmu
            </Title>
            <FlexWrap>
                {props.restaurants !== undefined &&
                    props.restaurants.map((item) => {
                        return (
                            <Cards key={item.id}>
                                <Link
                                    style={{
                                        color: "black",
                                        borderRadius: "15px",
                                    }}
                                    to={`/restaurants/${item.restaurant.id}`}
                                >
                                    <HoverZoom>
                                        <Image
                                            src={item.restaurant.featured_image}
                                            alt="Card image cap"
                                        />
                                    </HoverZoom>
                                </Link>
                                <Container>
                                    <Title>{item.restaurant.name}</Title>
                                </Container>
                            </Cards>
                        );
                    })}
            </FlexWrap>
        </ColorBlack>
    );
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.list.restaurants,
    };
};
export default connect(mapStateToProps, null)(List);
