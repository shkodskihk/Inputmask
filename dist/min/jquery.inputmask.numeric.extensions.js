(function(g){g.extend(g.inputmask.defaults.aliases,{numeric:{mask:function(a){0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat);a.repeat=0;var c=a.prefix,c=c+"[+]"+("~{1,"+a.integerDigits+"}");void 0!=a.digits&&(isNaN(a.digits)||0<parseInt(a.digits))&&(c+="["+a.radixPoint+"={"+a.digits+"}]");return c+=a.suffix},placeholder:"",greedy:!1,numericInput:!1,isNumeric:!0,digits:"*",groupSeparator:"",radixPoint:".",groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,integerDigits:"*",defaultValue:"",
prefix:"",suffix:"",postFormat:function(a,c,e,d){if(""==d.groupSeparator)return c;var b=a.slice();g.inArray(d.radixPoint,a);e||b.splice(c,0,"?");b=b.join("");if(d.autoGroup||e&&-1!=b.indexOf(d.groupSeparator)){for(var f=g.inputmask.escapeRegex.call(this,d.groupSeparator),b=b.replace(RegExp(f,"g"),""),f=b.split(d.radixPoint),b=f[0],h=RegExp("([-+]?[\\d?]+)([\\d?]{"+d.groupSize+"})");h.test(b);)b=b.replace(h,"$1"+d.groupSeparator+"$2"),b=b.replace(d.groupSeparator+d.groupSeparator,d.groupSeparator);
1<f.length&&(b+=d.radixPoint+f[1])}a.length=b.length;d=0;for(f=b.length;d<f;d++)a[d]=b.charAt(d);b=g.inArray("?",a);e||a.splice(b,1);return e?c:b},onKeyDown:function(a,c,e){g(this);if(e.autoGroup&&a.keyCode==e.keyCode.DELETE||a.keyCode==e.keyCode.BACKSPACE)return e.postFormat(c,0,!0,e),{refreshFromBuffer:!0}},regex:{integerPart:function(a){return/[-+]?\d+/}},definitions:{"~":{validator:function(a,c,e,d,b){if(!d&&"-"===a){var f=c.join("").match(b.regex.integerPart(b));if(0<f.length)return"+"==c[f.index]?
(c.splice(f.index,1),{pos:f.index,c:"-",refreshFromBuffer:!0,caret:e}):"-"==c[f.index]?(c.splice(f.index,1),{refreshFromBuffer:!0,caret:e-1}):{pos:f.index,c:"-",caret:e+1}}f=d?RegExp("[0-9"+g.inputmask.escapeRegex.call(this,b.groupSeparator)+"]").test(a):/[0-9]/.test(a);return!1==f||d||a==b.radixPoint?f:{pos:b.postFormat(c,e,"-"==a||"+"==a?!0:!1,b),refreshFromBuffer:!0}},cardinality:1,prevalidator:null},"=":{validator:function(a,c,e,d,b){return!d&&"-"===a&&(d=c.join("").match(b.regex.integerPart(b)),
0<d.length)?"+"==c[d.index]?(c.splice(d.index,1),{pos:d.index,c:"-",refreshFromBuffer:!0,caret:e}):"-"==c[d.index]?(c.splice(d.index,1),{refreshFromBuffer:!0,caret:e-1}):{pos:d.index,c:"-",caret:e+1}:/[0-9]/.test(a)},cardinality:1,prevalidator:null},"+":{validator:function(a,c,e,d,b){c="[";!0===b.allowMinus&&(c+="-");!0===b.allowPlus&&(c+="+");return RegExp(c+"]").test(a)},cardinality:1,prevalidator:null}},insertMode:!0,autoUnmask:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:"0"}})})(jQuery);
