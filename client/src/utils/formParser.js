const formParser = {
  chageDeliveryFormToJSON: (deliveryForm) => {
    return {
      ...deliveryForm,
      memo: deliveryForm.memo.length === 0 ? null : deliveryForm.memo,
      fee: parseInt(deliveryForm.fee),
    };
  },
  changeOTTFormToJSON: (OTTForm) => {
    return {
      ...OTTForm,
      fee: parseInt(OTTForm.fee),
      memo: OTTForm.memo.length === 0 ? null : OTTForm.memo,
      totalPeople: parseInt(OTTForm.totalPeople),
    };
  },
};

export default formParser;
