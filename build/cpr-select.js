/*!
 * cpr-select
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.5
 */
!function(e){function t(i){if(s[i])return s[i].exports;var n=s[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){"use strict";function i(e,t){for(var s,i=!0;i;){i=!1;var n=e,o=t;if(!n)return!1;if(s=n.className.indexOf(o)>-1)return s;e=n.parentElement,t=o,i=!0}}var n=function(e){return e&&e.__esModule?e["default"]:e},o=n(s(1)),l=s(2).findIndex,c=void 0,a=void 0,r=o.createClass({displayName:"CanopySelect",componentWillMount:function(){document.body.addEventListener("click",this.state.close)},componentWillUnmount:function(){document.body.removeEventListener("click",this.state.close)},getInitialState:function(){var e=this,t=null;return this.props.selected&&(t=l(this.props.options,{key:this.props.selected})),{selectedIndex:t,dialogDisplayed:!1,top:0,focused:!1,close:function(t){i(t.target,"cp-select-outer")||e.setState({dialogDisplayed:!1,focused:!1})}}},displayDialog:function(e){this.setState({dialogDisplayed:!0})},onKeyDown:function(e){var t=e.which,s=this.state.selectedIndex;9!==t&&e.preventDefault(),13===t?this.selectItem(s):38===t?this.setState({dialogDisplayed:!0,selectedIndex:s?s-1:0}):40===t?s===this.props.options.length-1?this.setState({dialogDisplayed:!0}):this.setState({dialogDisplayed:!0,selectedIndex:s?s+1:0}):27===t?this.setState({dialogDisplayed:!1}):this.highlightByText(e.which)},triggerItemChange:function(){this.props.onChange&&this.props.onChange.call(null,this.props.options[this.state.selectedIndex].key,this.props.options[this.state.selectedIndex],this.state.selectedIndex)},selectItem:function(e,t){var s=this;setTimeout(function(){s.setState({selectedIndex:e,focused:!0,dialogDisplayed:!1}),setTimeout(s.triggerItemChange)})},positionDialogAndGetTop:function(e,t){var s=e.length-t;return t>5&&6>s?e.length<11?-2+(36*t*-1-10)+"px":(this.positionDialog(t),-215-36*(5-s)+"px"):t>5?(this.positionDialog(t),"-203px"):-1+(36*t*-1-10)+"px"},positionDialog:function(e){var t=this;setTimeout(function(){var s=o.findDOMNode(t).querySelector(".cp-select__menu");s&&(s.scrollTop=36*e-192)})},focusSelect:function(){this.state.focused||this.setState({focused:!0})},onBlur:function(){this.setState({focused:!1})},highlightByText:function(e){c+=String.fromCharCode(e);var t=this.getIndexFromString(c);t>-1&&this.setState({selectedIndex:t}),a=setTimeout(function(){c=""},1e3)},getIndexFromString:function(e){var t=this;return e=e.toLowerCase(),l(this.props.options,function(s){return 0===t.getViewValue(s).toLowerCase().indexOf(e)})},getViewValue:function(e){return e.value||e},getDialog:function(e,t){var s=this;if(e){var i=function(){var e=s.state.selectedIndex,i=t.map(function(t,i){return o.createElement("li",{key:t.key,className:e===i?"+selected":"",onMouseDown:s.selectItem.bind(s,i)},o.createElement("a",null,t.value))});return setTimeout(function(){o.findDOMNode(s).querySelector(".cp-select__hidden-input").focus()},100),{v:o.createElement("div",null,o.createElement("ul",{className:"cp-select__menu cps-dropdown-menu",style:{top:s.positionDialogAndGetTop(t,e)}},i))}}();if("object"==typeof i)return i.v}},render:function(){var e="cp-select",t=this.props.options[this.state.selectedIndex];return this.props.disabled&&(e+=" +disabled"),this.state.focused&&(e+=" +focus"),o.createElement("div",{className:"cp-select-outer",role:"select"},o.createElement("input",{className:"cp-select__hidden-input",onFocus:this.focusSelect,onBlur:this.onBlur,onKeyDown:this.onKeyDown}),o.createElement("div",{className:e,onClick:this.displayDialog},o.createElement("div",{className:"cp-select__selected"},t?t.value:this.props.placeholder),o.createElement("div",{className:"cp-select__icon"})),this.getDialog(this.state.dialogDisplayed,this.props.options))}});window.CanopySelect||(window.CanopySelect=r),e.exports=r},function(e,t){e.exports=React},function(e,t){e.exports=_}]);