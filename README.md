# Vue
MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리  

ViewModel은 DOM Listeners를 통해 사용자에게 이벤트를 전달받고 MODEL을 업데이트한다.  
그 뒤 Data Bindings를 이용해서 화면에 반영한다.

---

* Vue 컴포넌트 등록하기
	```js
	// Vue.component('컴포넌트 이름', 컴포넌트 내용);
	Vue.component('app-header', {
		template: '<h1>Header</h1>'
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