<template>
	<div class="wrap" :style="this.bgInit">
		<div class="container">
			<header>
				<h1>Cute <ico-cat-title></ico-cat-title>at</h1>
			</header>
			<section class="container">
				<div class="img_wrap" :class="{loading: this.loading}">
					<ico-loading class="cat-loading" v-if="this.loading"></ico-loading>
					<figure>
						<img :src="this.currentCat" alt="">
					</figure>
					<button type="button" class="btn-muted" title="음소거" :class="{muted: this.muted}" @click="toggleMuted">
						<ico-volumn></ico-volumn>
						음소거
					</button>
					<button type="button" class="btn-like" @click="addLike">
						<ico-like></ico-like>
					</button>
					<a class="btn-download" href="#" @click.prevent="downloadImage" title="저장하기">
						<ico-download></ico-download>
					</a>
				</div>
				<div class="btn-wrap">
					<button type="button" class="btn-next" @click="callCat('prev')" v-if="this.currentIndex > 0">
						<ico-cat></ico-cat>
						이전
					</button>
					<button type="button" class="btn-next" @click="callCat('next')">
						다음
						<ico-cat></ico-cat>
					</button>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import ColorThief from 'colorthief';
import IcoDownload from './components/IcoDownload.vue';
import IcoCat from './components/IcoCat.vue';
import IcoCatTitle from './components/IcoCatTitle.vue';
import IcoLoading from './components/IcoLoading.vue';
import IcoVolumn from './components/IcoVolumn.vue';
import IcoLike from './components/IcoLike.vue';

export default {
	data(){
		return{
			cats: [],	// 이전, 다음 고양이들의 정보를 담을 배열
			bgInit: '',	// background 정보 초기화
			loading: false,	// 고양이 이미지 로딩중일 때 true
			muted: true,	// 음소거 toggle
			currentIndex: 0,	// cats 배열에서 현재 노출되는 이미지의 index
			currentCat: '',	// 현재 노출되는 고양이 정보 url
			likes: []	// 좋아요 누른 고양이 정보
		}
	},
	created(){
		this.addCat();

		const likeArr = [];

		if(localStorage.length){
			for (let idx = 0; idx < localStorage.length; idx++) {
				likeArr.push(
					localStorage.getItem(
						localStorage.key(idx)
					)
				);
			}
		}

		this.likes = likeArr;

		console.log(this.likes);
	},
	methods: {
		callCat(direction){
			if(!this.loading){
				this.loading = true;
				
				if(direction == 'prev'){
					this.currentIndex--;
					this.currentCat = this.cats[this.currentIndex].url;
					this.changeColor();
				}else if(direction == 'next'){
					this.currentIndex++;

					if(this.currentIndex == this.cats.length){
						this.addCat();
					}else{
						this.currentCat = this.cats[this.currentIndex].url;
						this.changeColor();
					}
				}

				this.cryCat();
			}
		},
		addCat(){
			if(!this.loading){
				this.loading = true;
			}

			fetch('https://cataas.com/cat?json=true')
			.then((response) => response.json())
			.then((data) => {
				const catObj = {
					type: data.mimetype.replace('image/', ''),
					url: 'https://cataas.com' + data.url,
					fileName: data.file
				};

				this.cats.push(catObj);
				this.currentCat = catObj.url;
				this.changeColor();
			})
			.catch(() => {
				alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
			});
		},
		cryCat(){
			if(!this.muted){
				const audio = new Audio('https://cdn.jsdelivr.net/gh/fe-jw/vue/cutecat/src/assets/cat.mp3');
				audio.play();
			}
		},
		addLike(){
			const key = Date.now();
			localStorage.setItem(key, this.currentCat);

			/**
			 * TODO
			 * 좋아요 리스트 확인 버튼 추가
			 * 리스트 UI추가
			 * 로컬 스토리이에 저장된 좋아요 리스트 조회
			 * 10개 단위로 노출
			 */
		},
		changeColor(){
			const colorThief = new ColorThief();
			const img = new Image();

			img.crossOrigin = 'Anonymous';
			img.src = this.currentCat;

			img.addEventListener('load', () => {
				const color = colorThief.getColor(img);

				this.bgInit = `--bg-img: url(${img.src});--bg-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6)`;
				this.loading = false;
			});

			img.addEventListener('error', () => {
				if(confirm('오류가 발생했습니다. 다시 시도하시겠습니까?')){
					this.loading = false;
					this.callCat();
				}
			});
		},
		toggleMuted(){
			this.muted = !this.muted;
		},
		async downloadImage(){
			const blob = await (await fetch(this.cats[this.currentIndex]).url).blob();
			const url = URL.createObjectURL(blob);
			Object.assign(document.createElement('a'), { href: url, download: this.cats[this.currentIndex].fileName }).click();
			URL.revokeObjectURL(url);
		}
	},
	components: {
		'ico-download': IcoDownload,
		'ico-cat': IcoCat,
		'ico-cat-title': IcoCatTitle,
		'ico-loading': IcoLoading,
		'ico-volumn': IcoVolumn,
		'ico-like': IcoLike
	}
}
</script>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:5px;}
body    {margin:0;padding:0;line-height:1.2;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.6rem;font-weight:300;color:#fff;}
button	{border:0;border-radius:0;cursor:pointer;}

@media all and (min-width: 768px)	{
	html	{font-size:10px;}
}
</style>

<style lang="scss" scoped>
.flex	{display:flex;justify-content:center;align-items:center;}
.wrap   {
	--bg-color: rgba(0, 0, 0, 0.6);

	@extend .flex;width:100%;height:100vh;height:100dvh;background:#111 var(--bg-img) no-repeat 50% 50%;background-size:cover;
	&:before	{content:'';width:100vw;height:100vh;height:100dvh;position:fixed;left:0;top:0;background-color:var(--bg-color);backdrop-filter:blur(6px);transition:background-color 0.3s;}
	.container	{position:relative;}
    header	{@extend .flex;
		h1	{@extend .flex;padding:0.5rem 4.0rem;font-size:6.0rem;font-weight:800;background-color:rgba(#000, 0.5);
			svg	{width:7.0rem;height:7.0rem;margin-right:-1.0rem;
				:deep(path)	{stroke:#fff;}
			}
		}
	}
	.img_wrap	{margin-top:3.0rem;position:relative;
		&:before	{opacity:0;visibility:hidden;content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:radial-gradient(ellipse at center,  rgba(#000, 1) 0%,rgba(#000, 0) 100%);transition:all 0.2s;z-index:10;}
		&.loading	{
			&:before	{opacity:1;visibility:visible;}
		}
		.cat-loading	{width:10.0rem;height:10.0rem;margin:-5.0rem 0 0 -5.0rem;position:absolute;left:50%;top:50%;animation:loading 0.2s linear infinite alternate;}
		figure	{overflow:hidden;width:70vw;min-width:320px;max-width:1280px;height:70vh;height:70dvh;border:0.2rem solid #fff;border-radius:2.0rem;box-sizing:border-box;}
		img	{width:100%;height:100%;vertical-align:top;object-fit:cover;
			&[src='']	{visibility:hidden;}
		}
		.btn-muted	{width:8.0rem;height:8.0rem;position:absolute;left:2.0rem;bottom:2.0rem;border-radius:50%;border:1px solid #fff;font-size:0;color:transparent;background-color:rgba(#000, 0.5);
			svg	{width:60%;height:60%;}
			&.muted	{
				&:before	{content:'';width:100%;height:0.2rem;position:absolute;right:0;top:50%;background-color:#fff;transform:rotate(-45deg) scale(0.7);}
			}
		}
		.btn-like	{width:8.0rem;height:8.0rem;position:absolute;left:50%;bottom:2.0rem;border-radius:50%;border:1px solid #fff;font-size:0;color:transparent;background-color:rgba(#000, 0.5);transform:translateX(-50%);
			svg	{width:60%;height:60%;}
		}
		.btn-download	{@extend .flex;width:8.0rem;height:8.0rem;position:absolute;right:2.0rem;bottom:2.0rem;border-radius:50%;border:1px solid #fff;background-color:rgba(#000, 0.5);box-sizing:border-box;
			svg	{width:60%;height:60%;}
		}
	}
	.btn-wrap	{display:flex;justify-content:space-between;max-width:500px;margin:2.0rem auto 0;
		button	{@extend .flex;width:calc(50% - 1.0rem);height:8.0rem;border:0.2rem solid #000;border-radius:0.8rem;line-height:1.2;font-family:inherit;font-size:2.4rem;font-weight:600;color:#000;background-color:#fff;
			svg	{width:3.0rem;height:3.0rem;margin:0 1.0rem;}
			&:only-child	{width:100%;}
		}
	}
}

// CSS Animation
@keyframes loading {
	from	{transform:rotate(-10deg);}
	50%	{transform:rotate(0);}
	to	{transform:rotate(10deg);}
}
</style>