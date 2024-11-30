export const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export const load = key => {
  try {
    const dataFromLS = localStorage.getItem(key);

    return dataFromLS === null ? undefined : JSON.parse(dataFromLS);
  } catch (err) {
    console.log(err);
  }
};
