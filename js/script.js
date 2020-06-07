"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "도움말",
		"Subtitle": "몇몇 도움이 될만한 링크들",
		"Message": "<p><a href='https://monogatari.io/documentation/'>문서</a> - 네가 알고 싶은 모든 것.</p><p><a href='https://monogatari.io/demo/'>데모</a> - 간단한 데모.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
		"환영합니다!",
		{
			"Input": {
				"Text": "이름이 뭐야??",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "이름을 입력해야 합니다!"
			}
		},

		"h 안녕! {{player.Name}} Monogatari에 잘 왔어!",

		{
			"Choice": {
				"Dialog": "h 이미 문서를 읽고 왔니?",
				"Yes": {
					"Text": "예",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "아니오",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"h 그거 멋진걸!",
		"h 그건 네가 멋진 게임을 만들 준비가 되어있다는 의미야!",
		"h 난 네가 무슨 이야기를 들려줄 지 정말 기대 돼!",
		"끝"
	],

	"No": [

		"h 너는 지금 당장 시작할 수 있어.",

		"display message Help",

		"h 바로 멋진 게임을 만들어봐!",
		"h 난 네가 무슨 이야기를 들려줄 지 정말 기대 돼!",
		"끝"
	]
};