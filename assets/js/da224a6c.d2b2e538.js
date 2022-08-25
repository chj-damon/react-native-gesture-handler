"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[881],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},245:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(3117),a=(r(7294),r(3905));const o={id:"force-gh",title:"ForceTouchGestureHandler (iOS only)",sidebar_label:"Force touch"},i=void 0,s={unversionedId:"gesture-handlers/api/force-gh",id:"version-2.4.0/gesture-handlers/api/force-gh",title:"ForceTouchGestureHandler (iOS only)",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/versioned_docs/version-2.4.0/gesture-handlers/api/force-gh.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/force-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/force-gh",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"force-gh",title:"ForceTouchGestureHandler (iOS only)",sidebar_label:"Force touch"},sidebar:"version-2.4.0/docs",previous:{title:"Pinch",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/pinch-gh"},next:{title:"NativeView",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/nativeview-gh"}},c={},l=[{value:"<code>minForce</code>",id:"minforce",level:3},{value:"<code>maxForce</code>",id:"maxforce",level:3},{value:"<code>feedbackOnActivation</code>",id:"feedbackonactivation",level:3},{value:"Event data",id:"event-data",level:2},{value:"<code>force</code>",id:"force",level:3},{value:"Static method",id:"static-method",level:2},{value:"<code>forceTouchAvailable</code>",id:"forcetouchavailable",level:3},{value:"Example",id:"example",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We recently released RNGH 2.0 with new Gestures system. Check out ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/#rngh-20"},"RNGH 2.0\nsection in Introduction")," for more information.")),(0,a.kt)("p",null,"A continuous gesture handler that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.\nThe handler ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates")," when pressure of touch if greater or equal than ",(0,a.kt)("inlineCode",{parentName:"p"},"minForce"),". It fails if pressure is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"maxForce"),"\nGesture callback can be used for continuous tracking of the touch pressure. It provides information for one finger (the first one)."),(0,a.kt)("p",null,"At the beginning of the gesture, the pressure factor is 0.0. As the pressure increases, the pressure factor increases proportionally. The maximum pressure is 1.0."),(0,a.kt)("p",null,"The handler is implemented using custom ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer"},"UIGestureRecognizer")," on iOS. There's no implementation provided on Android and it simply render children without any wrappers.\nSince this behaviour is only provided on some iOS devices, this handler should not be used for defining any crucial behaviors. Use it only as an additional improvement and make all features to be accessed without this handler as well."),(0,a.kt)("h1",{id:"properties"},"Properties"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler")," component:"),(0,a.kt)("h3",{id:"minforce"},(0,a.kt)("inlineCode",{parentName:"h3"},"minForce")),(0,a.kt)("p",null,"A minimal pressure that is required before handler can ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate"),". Should be a value from range ",(0,a.kt)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),". Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2"),"."),(0,a.kt)("h3",{id:"maxforce"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxForce")),(0,a.kt)("p",null,"A maximal pressure that could be applied for handler. If the pressure is greater, handler ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#failed"},"fails"),". Should be a value from range ",(0,a.kt)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),"."),(0,a.kt)("h3",{id:"feedbackonactivation"},(0,a.kt)("inlineCode",{parentName:"h3"},"feedbackOnActivation")),(0,a.kt)("p",null,"Boolean value defining if haptic feedback has to be performed on activation."),(0,a.kt)("h2",{id:"event-data"},"Event data"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler"),":"),(0,a.kt)("h3",{id:"force"},(0,a.kt)("inlineCode",{parentName:"h3"},"force")),(0,a.kt)("p",null,"The pressure of a touch."),(0,a.kt)("h2",{id:"static-method"},"Static method"),(0,a.kt)("h3",{id:"forcetouchavailable"},(0,a.kt)("inlineCode",{parentName:"h3"},"forceTouchAvailable")),(0,a.kt)("p",null,"You may check if it's possible to use ",(0,a.kt)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler.forceTouchAvailable")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/forcetouch/index.tsx"},"force touch handler example")," from Gesture Handler Example App."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<ForceTouchGestureHandler\n  minForce={0}\n  onGestureEvent={this._onGestureEvent}\n  onHandlerStateChange={this._onHandlerStateChange}>\n  <Animated.View\n    style={[\n      styles.box,\n      { transform: [{ scale: Animated.add(1, this.force) }] },\n    ]}\n  />\n</ForceTouchGestureHandler>\n")))}d.isMDXComponent=!0}}]);