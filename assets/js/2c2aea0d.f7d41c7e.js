"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7214,8136],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"api/gestures/gesture-detector-functional1",id:"version-2.0.0/api/gestures/gesture-detector-functional1",title:"gesture-detector-functional1",description:"",source:"@site/versioned_docs/version-2.0.0/api/gestures/gesture-detector-functional1.md",sourceDirName:"api/gestures",slug:"/api/gestures/gesture-detector-functional1",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector-functional1",draft:!1,tags:[],version:"2.0.0",frontMatter:{}},c={},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function Example() {\n  const tap = Gesture.Tap().onStart(() => {\n    console.log('tap');\n  });\n\n  return (\n    <GestureDetector gesture={tap}>\n      <FunctionalComponent>\n        <View style={styles.box} />\n      </FunctionalComponent>\n    </GestureDetector>\n  );\n}\n\nfunction FunctionalComponent(props) {\n  return <View collapsable={false}>{props.children}</View>;\n}\n")))}l.isMDXComponent=!0},4650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905)),a=n(331);const i={id:"gesture-detector",title:"GestureDetector",sidebar_label:"Gesture detector"},s=void 0,c={unversionedId:"api/gestures/gesture-detector",id:"version-2.0.0/api/gestures/gesture-detector",title:"GestureDetector",description:"GestureDetector is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the GestureDetector can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that GestureDetector is not compatible with the Animated API, nor with Reanimated 1.",source:"@site/versioned_docs/version-2.0.0/api/gestures/gesture-detector.md",sourceDirName:"api/gestures",slug:"/api/gestures/gesture-detector",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"gesture-detector",title:"GestureDetector",sidebar_label:"Gesture detector"},sidebar:"version-2.0.0/docs",previous:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/2.0.0/example"},next:{title:"Gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture"}},u={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>gesture</code>",id:"gesture",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector")," is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector")," can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector")," is not compatible with the ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animated"},"Animated API"),", nor with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/"},"Reanimated 1"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Gesture Detector will use first native view in its subtree to recognize gestures, however if this view is used only to group its children it may get automatically ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#collapsable-android"},"collapsed"),". Consider this example:"),(0,o.kt)(a.default,{mdxType:"FunctionalComponents"}),"If we were to remove the collapsable prop from the View, the gesture would stop working because it would be attached to a view that is not present in the view hierarchy. Gesture Detector adds this prop automatically to its direct child but it's impossible to do automatically for more complex view trees."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"gesture"},(0,o.kt)("inlineCode",{parentName:"h3"},"gesture")),(0,o.kt)("p",null,"A gesture object containing the configuration and callbacks. Can be any of the base gestures (",(0,o.kt)("inlineCode",{parentName:"p"},"Tap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Pan"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LongPress"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Fling"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Pinch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Rotation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ForceTouch"),") or any ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/composed-gestures"},(0,o.kt)("inlineCode",{parentName:"a"},"ComposedGesture"))," (",(0,o.kt)("inlineCode",{parentName:"p"},"Race"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Simultaneous"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclusive"),")."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"GestureDetector will decide whether to use Reanimated to process provided gestures based on callbacks they have. If any of the callbacks is a worklet, tools provided by the Reanimated will be utilized bringing ability to handle gestures synchrously."),(0,o.kt)("p",{parentName:"admonition"},"Starting with Reanimated-2.3.0-beta.4 Gesture Handler will provide a ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/state-manager"},"StateManager")," in the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/touch-events"},"touch events")," that allows for managing the state of the gesture.")))}d.isMDXComponent=!0}}]);