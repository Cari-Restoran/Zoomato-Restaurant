const GET_LISTS = "GET_LISTS";

const getRestos = (restos) => {
  return {
    type: GET_LISTS,
    restos,
  };
};

const fetchRestos = () => async (dispatch) => {
  const url =
    "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "user-key": "b77406154571eb7b2700f17e34912c48",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  dispatch(getRestos(result));
};

export { GET_LISTS, getRestos, fetchRestos };
