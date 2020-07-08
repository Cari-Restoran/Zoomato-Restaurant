const GET_MENU = "GET_MENU";

const getMenu = (datas) => {
  return {
    type: GET_MENU,
    datas,
  };
};

const fetchMenu = (id) => async (dispatch) => {
  console.log(id);
  //   const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`;
  const url = `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${id}`;
  const option = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "user-key": "79153cbd47b4b1c0805bac2a97dc5fc8",
    },
  };
  const response = await fetch(url, option);
  const result = await response.json();

  dispatch(getMenu(result));
};

export { GET_MENU, getMenu, fetchMenu };
