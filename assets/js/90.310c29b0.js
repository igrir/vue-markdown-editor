(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{523:function(e,t,n){!function(e){"use strict";var t="CodeMirror-activeline-background";function n(e){for(var n=0;n<e.state.activeLines.length;n++)e.removeLineClass(e.state.activeLines[n],"wrap","CodeMirror-activeline"),e.removeLineClass(e.state.activeLines[n],"background",t),e.removeLineClass(e.state.activeLines[n],"gutter","CodeMirror-activeline-gutter")}function i(e,i){for(var a=[],r=0;r<i.length;r++){var o=i[r],s=e.getOption("styleActiveLine");if("object"==typeof s&&s.nonEmpty?o.anchor.line==o.head.line:o.empty()){var c=e.getLineHandleVisualStart(o.head.line);a[a.length-1]!=c&&a.push(c)}}(function(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0})(e.state.activeLines,a)||e.operation((function(){n(e);for(var i=0;i<a.length;i++)e.addLineClass(a[i],"wrap","CodeMirror-activeline"),e.addLineClass(a[i],"background",t),e.addLineClass(a[i],"gutter","CodeMirror-activeline-gutter");e.state.activeLines=a}))}function a(e,t){i(e,t.ranges)}e.defineOption("styleActiveLine",!1,(function(t,r,o){var s=o!=e.Init&&o;r!=s&&(s&&(t.off("beforeSelectionChange",a),n(t),delete t.state.activeLines),r&&(t.state.activeLines=[],i(t,t.listSelections()),t.on("beforeSelectionChange",a)))}))}(n(416))}}]);