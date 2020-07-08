import React, { useEffect } from "react";
import { fetchListRestaurant } from "../../redux/actions";
import { connect } from "react-redux";

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
                                <p></p>
                                <img
                                    src={item.restaurant.featured_image}
                                    alt="restaurants"
                                />
                                <p>{item.restaurant.name}</p>
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
