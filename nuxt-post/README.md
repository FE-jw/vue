# Nuxt 프로젝트 테스트

## css
* nuxt config 파일에서 reset.scss 적용
* 컴포넌트는 각각의 vue 파일에서 작성

## components
* 폴더명도 components 명에 포함할 수 있음(nuxt 공홈에서도 사용중)
	* ex) main/Swiper.vue => `<main-swiper />`
	* ex) svg/Copy.vue => `<svg-copy />`

## layout
* 전체 페이지 동일한 layout 적용
	* layouts/default.vue

## store
* common
	* 전체 페이지에서 영향을 주고 받을 데이터 관리
* menu
	* 햄버거 버튼 메뉴 상태 관리
* pop
	* 팝업 on/off 상태와 텍스트 관리