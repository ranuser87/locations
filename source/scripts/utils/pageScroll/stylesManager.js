/*
	@constructor 
	@classdesc - set/unset css-styles to wrapped element
*/
class StylesManager {
	constructor(element) {
		this._element = element;
	}

	/*
		@param {object} rules {styleRuleName: styleRuleValue}
	*/
	set(rules) {
		Object.keys(rules).forEach((ruleName)=>{
			let ruleValue = rules[ruleName];
			this._element.style[ruleName] = ruleValue;
		});
	}

	/*
		@param {array} rules [styleRuleName]
	*/
	unset(rules) {
		rules.forEach((ruleName)=>{
			this._element.style[ruleName] = "";	
		})	
	}
}

export default StylesManager;