const GET_LIST = "GET_LIST";

const getList = (data) => {
    return {
        type: GET_LIST,
        data,
    };
};

const fetchListRestaurant = () => async (dispatch) => {
    const url =
        "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city";

    const response = await fetch(url);
    const result = await response.json();

    dispatch(getList(result));
};

export { GET_LIST, getList, fetchListRestaurant };
