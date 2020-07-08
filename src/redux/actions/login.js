const GET_USER_LOGIN = "GET_USER_LOGIN";

const getUserLogin = (data) => {
  return {
    type: GET_USER_LOGIN,
    data,
  };
};

function login(formData, history) {
  return async (dispatch) => {
    const url = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users";
    const response = await fetch(url);
    const result = await response.json();

    const validateUser = result.filter((user) => {
      return formData.email === user.email;
    });

    if (validateUser.length > 0) {
      if (validateUser[0].password !== formData.password) {
        alert("Email atau Password Anda Salah!");
      } else {
        dispatch(getUserLogin(validateUser[0]));
        alert("Succesfully login! You will redirect to your homepage");
        history.push("/userPage");
      }
    } else {
      alert("Email Anda belum terdatar");
    }
  };
}

export { login, GET_USER_LOGIN };
