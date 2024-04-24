/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'OneBar\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-battery-empty-solid': '&#xf244;',
		'icon-battery-full-solid': '&#xf240;',
		'icon-battery-half-solid': '&#xf242;',
		'icon-battery-quarter-solid': '&#xf243;',
		'icon-battery-three-quarters-solid': '&#xf241;',
		'icon-bolt-solid': '&#xf0e7;',
		'icon-chart-pie-solid': '&#xf200;',
		'icon-folder-open-solid': '&#xf07c;',
		'icon-keyboard-solid': '&#xf231;',
		'icon-memory-solid': '&#xf538;',
		'icon-wifi': '&#xeba3;',
		'icon-wifi-1': '&#xeba1;',
		'icon-wifi-2': '&#xeba2;',
		'icon-wifi-off': '&#xeba0;',
		'icon-volume-high': '&#xeca4;',
		'icon-volume-medium': '&#xeca3;',
		'icon-volume-low': '&#xeca2;',
		'icon-volume-mute': '&#xeca1;',
		'icon-volume-mute2': '&#xeca0;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
