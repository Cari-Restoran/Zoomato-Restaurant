import React, { useEffect } from "react";
import { fetchListRestaurant } from "../../redux/actions";
import { connect } from "react-redux";

function List(props) {
    useEffect(() => {
        props.dispatch(fetchListRestaurant());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div>{props.restaurant.map()}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
    };
};
export default connect(mapStateToProps)(List);
