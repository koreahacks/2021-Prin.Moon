const date = {
  getCurrentDate: () =>
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toJSON()
      .slice(0, 19),
};

export default date;
