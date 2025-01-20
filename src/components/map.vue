<template>
  <div>
    <h2>찾아오시는 길</h2>
    <!-- <img id="mapHead" src="@/assets/images/mapPicture.jpg"> -->
    <div id="map"></div>
    <h3>광화문(사업장)</h3>
    <p>서울특별시 종로구 새문안로5길 37, 8,9층(도렴동, 도렴빌딩)</p>
    <p>TEL 02-6263-1902 FAX 02-532-2318</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // map 객체 설정
      map: null,
    };
  },
  setup() {},
  created() {},
  mounted() {
  	// api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  unmounted() {},
  methods: {
  	// api 불러오기
    loadScript() {
      const script = document.createElement("script");
      const appkey = import.meta.env.VUE_APP_KAKAO_MAP_KEY;
      script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey="+ appkey +"&autoload=false";
      script.onload = () => window.kakao.maps.load(this.loadMap); 

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map"); 
      const options = {
        center: new window.kakao.maps.LatLng(37.573653, 126.974186), 
        level: 3
      };
      this.map = new window.kakao.maps.Map(container, options); 
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
        37.573653,
        126.974186
      );

    var content = `
                  <style>
                      .label {
                          display: flex; 
                          justify-content: space-between; 
                          align-items: center; 
                          background-color: #007BFF; 
                          color: white; 
                          padding: 10px 20px; 
                          border-radius: 8px; 
                          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
                          cursor: pointer; 
                          transition: background-color 0.3s ease; 
                          margin-bottom: 125px;
                      }
                  </style>
                  <div class="label">
                      <span class="left"></span>
                      <span class="center">정부24 광화문(사업장)</span>
                      <span class="right"></span>
                  </div>`;
      var customOverlay = new kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content   
      });

      customOverlay.setMap(this.map);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(this.map);
    },
  },
};

</script>


<style scoped>
  #map {width: 100%; height: 500px;}

  #mapHead {
      display: inline-block; /* 독립적인 요소로 표시 */
  }
</style>