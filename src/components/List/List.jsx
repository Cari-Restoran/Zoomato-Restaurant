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
`;
const Container = Styled.div`
padding: 2px 16px;
}
`;
const Title = Styled.h2`
font-size: 24px;
`;
const Address = Styled.p`
font-size: 20px;
`;
const Image = Styled.img`
width: 80%;
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
    console.log(props.restaurants);
    return (
        <div>
            <FlexWrap>
                {props.restaurants !== undefined &&
                    props.restaurants.map((item) => {
                        return (
                            <Cards>
                                <Image
                                    src={item.restaurant.featured_image}
                                    alt="Card image cap"
                                />
                                <Container>
                                    <Title>{item.restaurant.name}</Title>

                                    <button>
                                        {" "}
                                        <Link
                                            to={`/restaurants/${item.restaurant.id}`}
                                        >
                                            Detail
                                        </Link>
                                    </button>
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
