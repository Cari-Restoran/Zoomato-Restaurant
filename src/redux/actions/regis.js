function regis(formData, history) {
  return async (dispatch) => {
    const url = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users";
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 201) {
      alert("Pendaftaran berhasil");
      history.push("/");
    }
  };
}

export { regis };
