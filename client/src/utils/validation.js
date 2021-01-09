const Validation = {
  isValidDeliveryForm: (deliveryForm) => {
    const {
      title,
      endTime,
      latitude,
      longitude,
      appLink,
      kakaoLink,
      fee,
    } = deliveryForm;

    console.log(deliveryForm);

    if (
      title.length === 0 ||
      endTime.length === 0 ||
      !latitude ||
      !longitude ||
      appLink.length === 0 ||
      kakaoLink.length === 0
    ) {
      return false;
    }

    if (isNaN(parseInt(fee))) {
      return false;
    }

    return true;
  },
};

export default Validation;
