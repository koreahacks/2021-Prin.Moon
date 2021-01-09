const formParser = {
  chageDeliveryFormToJSON: (deliveryForm) => {
    return {
      ...deliveryForm,
      memo: deliveryForm.memo.length === 0 ? null : deliveryForm.memo,
      fee: parseInt(deliveryForm.fee),
    };
  },
};

export default formParser;
