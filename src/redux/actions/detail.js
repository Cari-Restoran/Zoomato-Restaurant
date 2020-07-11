const GET_DETAIL = "GET_DETAIL";

const getDetail = (datas) => {
    return {
        type: GET_DETAIL,
        datas,
    };
};

const fetchDetail = (id) => async (dispatch) => {
    console.log(id)
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`;
    const option = {
        method:'GET',
        headers: {
            'Content-type':'application/json',
            'user-key' : '79153cbd47b4b1c0805bac2a97dc5fc8',
        }
    }
    const response = await fetch(url,option);
    const result = await response.json();
  
    dispatch(getDetail(result));
};

export { GET_DETAIL, getDetail, fetchDetail };