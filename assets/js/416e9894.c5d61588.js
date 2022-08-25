"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7096,7559,8417,1700],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.3.0/api/gestures/base-gesture-callbacks",title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.3.0/api/gestures/base-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/base-gesture-callbacks",draft:!1,tags:[],version:"2.3.0",frontMatter:{}},l={},d=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,r.kt)("h3",{id:"onbegincallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,r.kt)("h3",{id:"onstartcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,r.kt)("h3",{id:"onendcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,r.kt)("h3",{id:"onfinalizecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,r.kt)("h3",{id:"ontouchesdowncallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,r.kt)("h3",{id:"ontouchesmovecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,r.kt)("h3",{id:"ontouchesupcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,r.kt)("h3",{id:"ontouchescancelledcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}c.isMDXComponent=!0},2593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.3.0/api/gestures/base-gesture-config",title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.3.0/api/gestures/base-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/base-gesture-config",draft:!1,tags:[],version:"2.3.0",frontMatter:{}},l={},d=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>withTestId(testID)</code>",id:"withtestidtestid",level:3},{value:"<code>runOnJS(value: boolean)</code>",id:"runonjsvalue-boolean",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,r.kt)("h3",{id:"enabledvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,r.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,r.kt)("strong",{parentName:"p"},"never")," become ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#cancelled"},"cancel")," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/long-press-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/tap-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"hitslopsettings"},(0,r.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,r.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,r.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,r.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#props"},"hitSlop")," property."),(0,r.kt)("h3",{id:"withrefref"},(0,r.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,r.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old\nAPI."),(0,r.kt)("h3",{id:"withtestidtestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"withTestId(testID)")),(0,r.kt)("p",null,"Sets a ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," property for gesture object, allowing for querying for it in tests."),(0,r.kt)("h3",{id:"runonjsvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"runOnJS(value: boolean)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not.\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),". ",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,r.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),".",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}c.isMDXComponent=!0},6620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.3.0/api/gestures/base-gesture-event-data",title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.3.0/api/gestures/base-gesture-event-data.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/base-gesture-event-data",draft:!1,tags:[],version:"2.3.0",frontMatter:{}},l={},d=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"Current ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,r.kt)("h3",{id:"numberofpointers"},(0,r.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,r.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}c.isMDXComponent=!0},3074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),o=n(6620),i=n(2593),s=n(4054);const l={id:"long-press-gesture",title:"Long press gesture",sidebar_label:"Long press gesture"},d=void 0,u={unversionedId:"api/gestures/long-press-gesture",id:"version-2.3.0/api/gestures/long-press-gesture",title:"Long press gesture",description:"A discrete gesture that activates when the corresponding view is pressed for a sufficiently long time.",source:"@site/versioned_docs/version-2.3.0/api/gestures/long-press-gesture.md",sourceDirName:"api/gestures",slug:"/api/gestures/long-press-gesture",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/long-press-gesture",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"long-press-gesture",title:"Long press gesture",sidebar_label:"Long press gesture"},sidebar:"version-2.3.0/docs",previous:{title:"Tap gesture",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/tap-gesture"},next:{title:"Rotation gesture",permalink:"/react-native-gesture-handler/docs/2.3.0/api/gestures/rotation-gesture"}},c={},p=[{value:"Config",id:"config",level:2},{value:"Properties specific to <code>LongPressGesture</code>:",id:"properties-specific-to-longpressgesture",level:3},{value:"<code>minDuration(value: number)</code>",id:"mindurationvalue-number",level:3},{value:"<code>maxDistance(value: number)</code>",id:"maxdistancevalue-number",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>LongPressGesture</code>:",id:"event-attributes-specific-to-longpressgesture",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"<code>duration</code>",id:"duration",level:3},{value:"Example",id:"example",level:2}],h={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A discrete gesture that activates when the corresponding view is pressed for a sufficiently long time.\nThis gesture's state will turn into ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#end"},"END")," immediately after the finger is released.\nThe gesture will fail to recognize a touch event if the finger is lifted before the ",(0,r.kt)("a",{parentName:"p",href:"#mindurationms"},"minimum required time")," or if the finger is moved further than the ",(0,r.kt)("a",{parentName:"p",href:"#maxdist"},"allowable distance"),"."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("h3",{id:"properties-specific-to-longpressgesture"},"Properties specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"LongPressGesture"),":"),(0,r.kt)("h3",{id:"mindurationvalue-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"minDuration(value: number)")),(0,r.kt)("p",null,"Minimum time, expressed in milliseconds, that a finger must remain pressed on the corresponding view. The default value is 500."),(0,r.kt)("h3",{id:"maxdistancevalue-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDistance(value: number)")),(0,r.kt)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a long press gesture. If the finger travels further than the defined distance and the gesture hasn't yet ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events#active"},"activated"),", it will fail to recognize the gesture. The default value is 10."),(0,r.kt)(i.default,{mdxType:"BaseEventConfig"}),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)(s.default,{mdxType:"BaseEventCallbacks"}),(0,r.kt)("h2",{id:"event-data"},"Event data"),(0,r.kt)("h3",{id:"event-attributes-specific-to-longpressgesture"},"Event attributes specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"LongPressGesture"),":"),(0,r.kt)("h3",{id:"x"},(0,r.kt)("inlineCode",{parentName:"h3"},"x")),(0,r.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector")),"."),(0,r.kt)("h3",{id:"y"},(0,r.kt)("inlineCode",{parentName:"h3"},"y")),(0,r.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector")),"."),(0,r.kt)("h3",{id:"absolutex"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,r.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",(0,r.kt)("a",{parentName:"p",href:"#x"},(0,r.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),(0,r.kt)("h3",{id:"absolutey"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,r.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",(0,r.kt)("a",{parentName:"p",href:"#y"},(0,r.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),(0,r.kt)("h3",{id:"duration"},(0,r.kt)("inlineCode",{parentName:"h3"},"duration")),(0,r.kt)("p",null,"Duration of the long press (time since the start of the gesture), expressed in milliseconds."),(0,r.kt)(o.default,{mdxType:"BaseEventData"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const longPressGesture = Gesture.LongPress().onEnd((e, success) => {\n  if (success) {\n    Alert.alert(`Long pressed for ${e.duration} ms!`);\n  }\n});\n\nreturn (\n  <GestureDetector gesture={longPressGesture}>\n    <View style={styles.box} />\n  </GestureDetector>\n);\n")))}g.isMDXComponent=!0}}]);