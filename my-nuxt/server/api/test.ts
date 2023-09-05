export default defineEventHandler(() => {
	return {
		'hello': {
			'ko': '안녕하세요',
			'en': 'Hello',
			'zh-hans': '你好'
		},
		'bye': {
			'ko': '안녕히가세요',
			'en': 'Goodbye',
			'zh-hans': '拜拜'
		},
		'reward_1': [
			{
				'ko': '물',
				'en': 'water',
				'zh-hans': '水'
			},
			{
				'ko': '불',
				'en': 'fire',
				'zh-hans': '火'
			},
			{
				'ko': '바람',
				'en': 'wind',
				'zh-hans': '风'
			},
			{
				'ko': '흙',
				'en': 'soil',
				'zh-hans': '土'
			}
		],
		'txt_1': {
			'ko': '중간체는 제거',
			'en': 'no zh-hans'
		},
		'txt_2': {
			'ko': '영문은 제거',
			'zh-hans': 'no en'
		},
		'btn_1': {
			'ko': {
				'-1': '보상 받기',	// off
				'0': '보상 받기',	// on
				'1': '완료'	// complete
			},
			'en': {
				'-1': 'collect',
				'0': 'collect',
				'1': 'complete'
			},
			'zh-hans': {
				'-1': '领取',
				'0': '领取',
				'1': '完成'
			}
		}
	}
});