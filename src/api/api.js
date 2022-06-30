export const getAllLectures = () => {
  return fetch("https://speck-academy-api.herokuapp.com/api/lectures", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};
