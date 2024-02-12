document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")})})


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 300;
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();});}}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index]; 
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();});}}
function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);} else {
			bodyLock();}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));}})}}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();}}}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;}}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	unlock = false;
	setTimeout(function () {
		unlock = true;}, timeout);}
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length>0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';}}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');}, timeout);}
document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open')
		popupClose(popupActive);}});
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;}
			return null;};}})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;}})();


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
         event.preventDefault();
         imgId = imgItem.dataset.id;
         slideImage();});});
function slideImage(){
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;}
window.addEventListener('resize', slideImage);

/* Чётко, но на телефонах надо выключить эту фичу */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
   document.getElementById("header").style.top = "0";} else {
      document.getElementById("header").style.top = "-83px";}
   prevScrollpos = currentScrollPos;}