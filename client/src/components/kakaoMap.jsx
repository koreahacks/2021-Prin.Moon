import React, { useEffect, useRef } from "react";
const { kakao, innerHeight } = window;

const mapStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
};

function KakaoMap({ lat, lng }) {
  const mapContainer = useRef();
  useEffect(() => {
    kakao &&
      kakao.maps.load(() => {
        let el = mapContainer.current;
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(lat, lng),
        });

        let markerPosition = new kakao.maps.LatLng(lat, lng);

        let markers = [];

        // 마커를 생성합니다
        markers.push(new kakao.maps.Marker({ position: markerPosition }));

        // 마커가 지도 위에 표시되도록 설정합니다
        markers.map((marker) => marker.setMap(map));
      });
  }, [lat, lng]);

  return (
    <div style={{ height: innerHeight / 3 }}>
      <div id="map" style={mapStyle} ref={mapContainer}></div>
    </div>
  );
}
export default KakaoMap;
