import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
};

// 공통 API 함수 정리
const fetchList = pageName => {
	return axios.get(`${config.baseUrl}${pageName}/1.json`);
};
const fetchUserInfo = id => {
	return axios.get(`${config.baseUrl}user/${id}.json`);
};
const fetchItemInfo = id => {
	return axios.get(`${config.baseUrl}item/${id}.json`);
};

export {
	fetchList,
	fetchUserInfo,
	fetchItemInfo
}