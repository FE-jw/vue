# Vue
MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리  

ViewModel은 DOM Listeners를 통해 사용자에게 이벤트를 전달받고 MODEL을 업데이트한다.  
그 뒤 Data Bindings를 이용해서 화면에 반영한다.

---

* Vue 컴포넌트 통신 방식
뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖는다.  
따라서, 컴포넌트 간 데이터를 주고 받기 위해선 아래와 같이 규칙을 따라야 한다.
	* 상위 -> 하위: props 전달 (데이터 내려줌)
		```html
		<app-header v-bind:프롭스_속성_이름="상위_컴포넌트의_데이터_이름"></app-header>
		<app-header v-bind:propsdata="message"></app-header>
		```

	* 하위 -> 상위: 이벤트 발생

* Vue 컴포넌트 등록하기
	```js
	// 전역 컴포넌트: Vue.component('컴포넌트 이름', 컴포넌트 내용);
	Vue.component('app-header', {
		template: '<h1>Header</h1>'
	});

	// 지역 컴포넌트
	// 특정 컴포넌트 하단에 어떤 컴포넌트가 등록됐는지 components 속성으로 확인 가능하기 때문에 보통 지역 컴포넌트를 사용
	new Vue({
		el: '#app',
		// 지역 컴포넌트 등록 방식
		components: {
			// '컴포넌트 이름': 컴포넌트 내용
			'app-footer': {
				template: '<footer>footer</footer>'
			}
		}
	});
	```

* 기존 웹 개발 방식과 Vue.js 비교
	```js
	// 기존 웹 개발 방식
	var div = document.querySelector('#app');
	var str = 'Hello World!';
	div.innerHTML = str;

	str = 'Hello World!!!';	// 데이터 변경 시 화면에는 반영이 안 됨
	div.innerHTML = str;	// 다시 대입해야 함
	```
	```js
	// Vue Reactivity
	var div = document.querySelector('#app');
	var viewModel = {};

	/*
		// 객체의 동작을 재정의 하는 API
		Object.defineProperties(대상 객체, 객체의 속성, {
			// 정의할 내용
		});
	*/

	// 즉시 실행 함수
	(function(){
		function init(){
			Object.defineProperty(viewModel, 'str', {
				// 속성에 접근했을 때의 동작을 정의
				get: function(){
					console.log('viewModel 접근');
				},
				// 속성에 값을 할당했을 때의 동작을 정의
				set: function(newValue){
					console.log('viewModel 할당', newValue);
					render(newValue);
				}
			});
		}
		
		function render(value){
			div.innerHTML = value;
		}

		init();
	})();
	```