# Nuxt 프로젝트 테스트

## css
* nuxt config 파일에서 reset.scss 적용
	```js
	export default defineNuxtConfig({
		css: ['assets/css/reset.scss']
	})
	```
* 컴포넌트는 각각의 vue 파일에서 작성

## components
* 폴더명도 components 명에 포함 가능(nuxt 공홈에서도 사용중)
	* ex) main/Swiper.vue
	* ex) svg/Copy.vue
	```html
	<template>
		<div>
			<main-swiper />
			<main-posts />
		</div>
	</template>
	```

## composable
* 이벤트 등록과 해제를 자동으로 해주는 composable 생성
	```js
	export const useMyEvent = (eventName, fn) => {
		onMounted(() => {
			window.addEventListener(eventName, fn);
		});
		
		onUnmounted(() => {
			window.removeEventListener(eventName, fn);
		});
	};
	```

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

### meta 태그 설정
* `nuxt.config.ts` 에서 디폴트 meta 설정
	 ```js
	 export default defineNuxtConfig({
		app: {
			head: {
				title: 'JW nuxt-post',
				charset: 'utf-8',
				meta: [
					{ name: 'description', content: 'JW nuxt-post 프로젝트입니닷' },
					{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' },
					{ name: 'format-detection', content: 'telephone=no' }
				]
			}
		}
	 })
	```
* 각 페이지에서 useSeoMeta()로 설정
	```js
	<script setup>
	useSeoMeta({
		title: 'JW nuxt-post:: ' + data.value.title,
		description: data.value.body
	});
	</script>
	```

### 테마 변경
* `ChangeTheme.vue` 에서 버튼 클릭 시 commonStore에 있는 theme 데이터 변경
* 전체를 감싸는 #app에 dataset theme 설정

### 포스팅 리스트
* 모바일 5개, PC 10개
	* => commonStore에 있는 isMobile 값에 따라 `v-for` 반복 횟수 설정