'use strict'
/**
 * Generates color based on string.
 *
 * @param {String}
 * @return {String} HEX color
 */
module.exports = (string) => {
	// unicode value
	var val = 0;
	var	str = '';
	var	arr = string.trim().toLowerCase().split(' ');

	arr.forEach((value) => {
		val += value.trim().substr(0, 1).charCodeAt(0);
		str += value.trim().substr(0, 1)
	});

	var strNum = '0.' + val;
	var color = Math.floor(parseFloat(strNum) * 16777215).toString(16);
	
	return {
		string: str,
		color: color
	}
};