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
            <h1>hello</h1>
        </div>
    );
}

export default connect()(List);
