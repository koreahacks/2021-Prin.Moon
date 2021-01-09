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

  isValidOTTForm: (OTTForm) => {
    const { title, kakaoLink, totalPeople, fee } = OTTForm;

    if (title.length === 0 || kakaoLink.length === 0) {
      return false;
    }

    if (isNaN(parseInt(fee))) {
      return false;
    }

    if (isNaN(parseInt(totalPeople))) {
      return false;
    }

    return true;
  },
};

export default Validation;
