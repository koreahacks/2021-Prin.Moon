const { kakao } = window;

const GeoCoder = {
  getLatLngFromAddress: (address) => {
    return new Promise((resolve, reject) => {
      // 주소로 좌표를 검색합니다
      if (address === "") {
        resolve([]);
      }
      const places = new kakao.maps.services.Places();
      places.keywordSearch(address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          return resolve(result);
        }
      });
    });
  },
};

export default GeoCoder;
