# [Vue](https://v3-docs.vuejs-korea.org/guide/introduction.html)
MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리  

ViewModel은 DOM Listeners를 통해 사용자에게 이벤트를 전달받고 MODEL을 업데이트한다.  
그 뒤 Data Bindings를 이용해서 화면에 반영한다.

---

* watch: 특정 data가 변경될 때마다 실행된다. 매번 실행하기에 부담스러운 비교적 무거운 로직이 들어가는 경우가 많다.

	```js
	new Vue({
		el: '#app',
		data: {
			num: 10
		},
		watch: {
			num: function(){
				// num(data)가 변경되면 실행
				this.logText();
			}
		},
		methods: {
			logText: function(){
				console.log('changed');
			}
		}
	});
	```

* computed: 특정 data를 가공한 값을 반환한다. 캐싱되고 빠른 계산이 가능하다.

	```js
	new Vue({
		el: '#app',
		data: {
			num: 10
		},
		computed: {
			doubleNum: function(){
				return this.num * 2;
			}
		},
		watch: {
			num: function(newValue){
				this.fetchUserByNumber(newValue);
			}
		},
		methods: {
			fetchUserByNumber: function(num){
				console.log(num);
			}
		}
	});
	```

* Vue의 템플릿 문법
	* 데이터 바인딩: `{{ 콧수염 }}`
	
		```html
		<div>{{ message }}</div>
		```
		
	* 디렉티브: `v-` 로 시작

		```html
		<div v-if="show">Hello</div>
		<p v-bind:id="uuid">{{ num }}</p>
		```

		* v-if는 DOM 자체가 생성, 제거되지만 v-show는 `display:none;` 시키는 방식

		* [input data](https://vuejs.org/guide/essentials/forms.html#text)

			```html
			<input v-model="message" placeholder="edit me" />
			<p>{{ message }}</p>
			```
			```js
			new Vue({
				el: '#app',
				data: {
					message: ''
				}
			});
			```


* Axios(액시오스)  
vue에서 권고하고 있는 HTTP 통신 라이브러리  
Promise 기반의 통신 라이브러리이며 상대적으로 다른 라이브러리에 비해 문서화가 잘되어 있고 API다 다양하다.

	* 자바스크립트 비동기 처리 패턴
		* https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
		* https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
		* https://joshua1988.github.io/web-development/javascript/js-async-await/
	* HTTP 프로토콜
		* https://joshua1988.github.io/web-development/http-part1/

* Vue 라우터

	```js
	const LoginComponent = {
		template: `<div>Login</div>`
	};

	const router = new VueRouter({
		// 페이지 라우팅 정보
		routes: [
			{
				path: '/login',	// 페이지의 url
				component: LoginComponent	// 해당 url에서 표시될 컴포넌트
			}
		]
	});

	new Vue({
		el: '#app',
		router: router
	});
	```

	* router-view: url에 따라 뿌려질 영역

		```html
		<div id="app">
			<router-view></router-view>
		</div>
		```

	* router-link

		```html
		<div id="app">
			<nav>
				<router-link to="/login">Login</router-link>
				<router-link to="/main">Main</router-link>
			</nav>
			<router-view></router-view>
		</div>
		```

* Vue 컴포넌트 통신 방식  
뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖는다.  
따라서, 컴포넌트 간 데이터를 주고 받기 위해선 아래와 같이 규칙을 따라야 한다.
	* 상위 -> 하위: props 전달 (데이터 내려줌)

		```html
		<app-header v-bind:프롭스_속성_이름="상위_컴포넌트의_데이터_이름"></app-header>
		<app-header v-bind:propsdata="message"></app-header>
		```

	* 하위 -> 상위: 이벤트 발생(emit)

		```js
		// 하위 컴포넌트에서 'pass' 라는 이벤트 발생
		const appHeader = {
			template: '<button v-on:click="passEvent">click me</button>',
			methods: {
				passEvent: function(){
					this.$emit('pass');
				}
			}
		};
		```

		```html
		<!-- 상위 컴포넌트에서 이벤트 받기 -->
		<!-- <component v-on:하위_컴포넌트에서_발생한_이벤트="상위_컴포넌트의_메소드"></component> -->
		<app-header v-on:pass="logText"></app-header>
		<app-content v-on:increase="increaseNum" v-on:decrease="decreaseNum"></app-content>
		```

		```js
		// 'logText'는 상위 컴포넌트 methods에서 정의함
		new Vue({
			el: '#app',
			components: {
				'app-header': appHeader
			},
			methods: {
				logText: function(){
					console.log('Hi');
				},
				increaseNum: function(){
					console.log(++this.num);
				},
				decreaseNum: function(){
					console.log(--this.num);
				}
			},
			data: {
				num: 10
			}
		});
		```

	* 동위 레벨: 상위 컴포넌트에 이벤트를 전달하고 props를 내려줌


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