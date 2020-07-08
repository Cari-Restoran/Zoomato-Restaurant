import React, { useEffect } from "react";
import { fetchListRestaurant } from "../../redux/actions";
import { connect } from "react-redux";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";

function List(props) {
    useEffect(() => {
        props.dispatch(fetchListRestaurant());
        // eslint-disable-next-line
    }, []);
    console.log(props.restaurants);
    return (
        <div>
            <div>
                {props.restaurants !== undefined &&
                    props.restaurants.map((item) => {
                        return (
                            <div>
                                <Card>
                                    <CardImg
                                        top
                                        width="25%"
                                        src={item.restaurant.featured_image}
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle>
                                            {" "}
                                            <p>{item.restaurant.name}</p>
                                        </CardTitle>

                                        <CardText>
                                            {item.restaurant.location.address}
                                        </CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.list.restaurants,
    };
};
export default connect(mapStateToProps, null)(List);
