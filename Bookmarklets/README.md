# Bookmarklets
ブックマークレット スクリプト

# ConstantPost
定型投稿
```javascript
javascript:(function(){var a=document.getElementById("post_textbox");if(void 0==a)alert('The object "ID: post_textbox" cannot be found.');else{var b=document.getElementsByClassName("send-button theme");1>b.length&&alert('The object "Class: send-button theme" cannot be found.');a.value="Test";a.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}));b[0].click()}})();
```

# ScheduledPost
スケジュール投稿
```javascript
javascript:(function(){var d=function(){document.getElementById("post_textbox");void 0==a&&alert('The object "ID: post_textbox" cannot be found.')},a=d();if(void 0!=a){var b=new Date(Date.now()),e=new Date(b.getFullYear(),b.getMonth(),b.getDate(),10,0,0);void 0!=document.scheduled&&(alert("The schedule will be cancelled."),clearTimeout(document.scheduled),document.scheduled=void 0,a.removeAttribute("disabled"));if(b.getTime()>e.getTime())alert("The time has passed. Cannot be set.");else{a.disabled=
"true";document.scheduled=setTimeout(function(){var c=d();if(void 0!=c){var f=document.getElementsByClassName("send-button theme");1>f.length?alert('The object "Class: send-button theme" cannot be found.'):(c.value="Test ("+g+")",c.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),f[0].click(),c.removeAttribute("disabled"))}},e.getTime()-Date.now());var g=prompt("Please input an option.")}}})();
```

# Closure Compiler
https://closure-compiler.appspot.com/
