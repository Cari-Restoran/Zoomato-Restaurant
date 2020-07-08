const GET_MENU = "GET_MENU";

const getMenu = (datas) => {
    return {
        type: GET_MENU,
        datas,
    };
};

const fetchMenu = () => async (dispatch) => {
    const url = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624";
    const option = {
        method:'GET',
        headers: {
            'Content-type':'application/json',
            'user-key' : '79153cbd47b4b1c0805bac2a97dc5fc8',
        }
    }
    const response = await fetch(url,option);
    const result = await response.json();
  
    dispatch(getMenu(result));
};

export { GET_MENU, getMenu, fetchMenu };