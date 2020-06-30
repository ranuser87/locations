import StylesManager from "./stylesManager";

/*
	@constructor
	@classdesc - class able to lock/unlock webpage scroll
*/
class PageScroll {

	constructor() {
		this._body;
		this._isLocked = false;
		this._scrollbarWidth;
		this._cachedScrollTop;
		this._cacheScrollTop = this._cacheScrollTop.bind(this);
		this._bodyStylesManager;
	}

	_getScrollbarWidth() {
		return window.innerWidth - document.documentElement.clientWidth;
	}

	_cacheScrollTop() {
		this._cachedScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	}

	getCachedScrollTop() {
		return this._cachedScrollTop;
	}

	lock() {
		window.removeEventListener("scroll", this._cacheScrollTop);
		this._bodyStylesManager.set({
			position: "fixed",
			top: `-${this._cachedScrollTop}px`,
			left: 0,
			right: 0,
			bottom: 0,
			paddingRight: `${this._scrollbarWidth}px`
		});
		this._isLocked = true;
	}

	unlock() {
		this._bodyStylesManager.unset([
			"position", "top", "left", "right", "bottom", "paddingRight"
		]);
		this._isLocked = false;
		window.scrollTo(0, this._cachedScrollTop);
		window.addEventListener("scroll", this._cacheScrollTop);	
	}

	_addEvents() {
		window.removeEventListener("load", this._cacheScrollTop);
		window.removeEventListener("scroll", this._cacheScrollTop);
		window.addEventListener("load", this._cacheScrollTop);
		window.addEventListener("scroll", this._cacheScrollTop);
	}

	init() {
		this._addEvents();
		this._cacheScrollTop();
		this._scrollbarWidth = this._getScrollbarWidth();
		this._bodyStylesManager = new StylesManager(document.body);
		return this;
	}
}

export default PageScroll;