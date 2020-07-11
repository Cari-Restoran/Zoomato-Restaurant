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
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "user-key": "79153cbd47b4b1c0805bac2a97dc5fc8",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();

  dispatch(getList(result));
};

export { GET_LIST, getList, fetchListRestaurant };
