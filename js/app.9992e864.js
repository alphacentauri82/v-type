(function(e){function t(t){for(var a,i,l=t[0],s=t[1],u=t[2],f=0,c=[];f<l.length;f++)i=l[f],r[i]&&c.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(c.length)c.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/v-type/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"05cb":function(e,t,o){},1781:function(e,t,o){"use strict";var a=o("05cb"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-card",{staticClass:"formCard"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v("What's your v-type?")])]),e.submitted?o("div",[o("h1",[e._v("You are a "+e._s(e.foxType))]),o("p",[e._v(e._s(e.foxDesc))])]):o("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top"}},[o("el-form-item",{attrs:{label:"My favorite type of movie is"}},[o("el-radio-group",{model:{value:e.form.q1,callback:function(t){e.$set(e.form,"q1",t)},expression:"form.q1"}},[o("el-radio",{attrs:{label:"f1"}},[e._v("A feel good movie")]),o("el-radio",{attrs:{label:"t1"}},[e._v("One that makes me think")]),o("el-radio",{attrs:{label:"n1"}},[e._v("A movie about witchcraft")]),o("el-radio",{attrs:{label:"j1"}},[e._v("One that gives me a new outlook on life")])],1)],1),o("el-form-item",{attrs:{label:"On a Saturday night I prefer to"}},[o("el-radio-group",{model:{value:e.form.q2,callback:function(t){e.$set(e.form,"q2",t)},expression:"form.q2"}},[o("el-radio",{attrs:{label:"i2"}},[e._v("Read a quiet book over tea")]),o("el-radio",{attrs:{label:"e2"}},[e._v("Hang out in da club")]),o("el-radio",{attrs:{label:"e1"}},[e._v("Chill in a bar")]),o("el-radio",{attrs:{label:"i1"}},[e._v("Meet a friend for a nice dinner")])],1)],1),o("el-form-item",{attrs:{label:"When I’m giving advice the first thing I ask is"}},[o("el-radio-group",{model:{value:e.form.q3,callback:function(t){e.$set(e.form,"q3",t)},expression:"form.q3"}},[o("el-radio",{attrs:{label:"s1"}},[e._v("What are your next steps?")]),o("el-radio",{attrs:{label:"n2"}},[e._v("How do you feel?")]),o("el-radio",{attrs:{label:"s2"}},[e._v("What happened?")]),o("el-radio",{attrs:{label:"n1"}},[e._v("What do you want to do?")])],1)],1),o("el-form-item",{attrs:{label:"My favorite front-end framework du jour is"}},[o("el-radio-group",{model:{value:e.form.q4,callback:function(t){e.$set(e.form,"q4",t)},expression:"form.q4"}},[o("el-radio",{attrs:{label:"j1"}},[e._v("Angular")]),o("el-radio",{attrs:{label:"n1"}},[e._v("Vue.js")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Wix")]),o("el-radio",{attrs:{label:"t1"}},[e._v("React")])],1)],1),o("el-form-item",{attrs:{label:"Something I’d like to get better at is"}},[o("el-radio-group",{model:{value:e.form.q5,callback:function(t){e.$set(e.form,"q5",t)},expression:"form.q5"}},[o("el-radio",{attrs:{label:"n1"}},[e._v("Setting priorities")]),o("el-radio",{attrs:{label:"t1"}},[e._v("Doing things I love more often")]),o("el-radio",{attrs:{label:"j1"}},[e._v("Letting loose")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Spending time with friends or family")])],1)],1),o("el-form-item",{attrs:{label:"When I get stuck on a hard problem, I"}},[o("el-radio-group",{model:{value:e.form.q6,callback:function(t){e.$set(e.form,"q6",t)},expression:"form.q6"}},[o("el-radio",{attrs:{label:"t2"}},[e._v("Try to look at the problem from another perspective")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Take a walk or draw for a few minutes")]),o("el-radio",{attrs:{label:"t1"}},[e._v("Go over the problem from the beginning")]),o("el-radio",{attrs:{label:"f2"}},[e._v("Get so anxious I have trouble focusing")])],1)],1),o("el-form-item",{attrs:{label:"When I’m planning to give a tech talk, I"}},[o("el-radio-group",{model:{value:e.form.q7,callback:function(t){e.$set(e.form,"q7",t)},expression:"form.q7"}},[o("el-radio",{attrs:{label:"j2"}},[e._v("Plan down to the second and memorize my talk")]),o("el-radio",{attrs:{label:"p1"}},[e._v("Make an outline and fill in the blanks the day of")]),o("el-radio",{attrs:{label:"j1"}},[e._v("Create a slideshow and prepare some notecards")]),o("el-radio",{attrs:{label:"p2"}},[e._v("Wing some live code")])],1)],1),o("el-form-item",{attrs:{label:"My friends would describe me as"}},[o("el-radio-group",{model:{value:e.form.q8,callback:function(t){e.$set(e.form,"q8",t)},expression:"form.q8"}},[o("el-radio",{attrs:{label:"n1"}},[e._v("Thoughtful")]),o("el-radio",{attrs:{label:"t1"}},[e._v("Smart")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Affectionate")]),o("el-radio",{attrs:{label:"j1"}},[e._v("Clever")])],1)],1),o("el-form-item",{attrs:{label:"If I could solve any problem it would be"}},[o("el-radio-group",{model:{value:e.form.q9,callback:function(t){e.$set(e.form,"q9",t)},expression:"form.q9"}},[o("el-radio",{attrs:{label:"n1"}},[e._v("Miscommunication")]),o("el-radio",{attrs:{label:"j1"}},[e._v("Bureaucratic inefficiency")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Broken marriages")]),o("el-radio",{attrs:{label:"t1"}},[e._v("The education system")])],1)],1),o("el-form-item",{attrs:{label:"I pull pranks"}},[o("el-radio-group",{model:{value:e.form.q10,callback:function(t){e.$set(e.form,"q10",t)},expression:"form.q10"}},[o("el-radio",{attrs:{label:"e2"}},[e._v("Often")]),o("el-radio",{attrs:{label:"e1"}},[e._v("Sometimes")]),o("el-radio",{attrs:{label:"i1"}},[e._v("Rarely")]),o("el-radio",{attrs:{label:"i2"}},[e._v("Never")])],1)],1),o("el-form-item",{attrs:{label:"My favorite food is"}},[o("el-radio-group",{model:{value:e.form.q11,callback:function(t){e.$set(e.form,"q11",t)},expression:"form.q11"}},[o("el-radio",{attrs:{label:"n1"}},[e._v("Something with an interesting texture or quality crunch")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Something sweet or fatty")]),o("el-radio",{attrs:{label:"t1"}},[e._v("Something nutritious")]),o("el-radio",{attrs:{label:"j1"}},[e._v("Something I don’t get to eat often")])],1)],1),o("el-form-item",{attrs:{label:"If I were a planeteer my power would be"}},[o("el-radio-group",{model:{value:e.form.q12,callback:function(t){e.$set(e.form,"q12",t)},expression:"form.q12"}},[o("el-radio",{attrs:{label:"j1"}},[e._v("Earth")]),o("el-radio",{attrs:{label:"n1"}},[e._v("Fire")]),o("el-radio",{attrs:{label:"t1"}},[e._v("Water")]),o("el-radio",{attrs:{label:"f1"}},[e._v("Heart")])],1)],1),o("el-form-item",{attrs:{label:"I’m here because"}},[o("el-radio-group",{model:{value:e.form.q13,callback:function(t){e.$set(e.form,"q13",t)},expression:"form.q13"}},[o("el-radio",{attrs:{label:"n1"}},[e._v("It seemed like fun")]),o("el-radio",{attrs:{label:"t1"}},[e._v("I want to learn something new")]),o("el-radio",{attrs:{label:"j1"}},[e._v("I want to expand my repertoire")]),o("el-radio",{attrs:{label:"e1"}},[e._v("I want to meet new people")])],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("🦊🦊🦊 HOW FOXY AM I? 🦊🦊🦊")])],1)],1)],1)],1)},n=[],i=(o("28a5"),o("9393")),l=(o("7f7f"),{data:function(e){return{attributes:{e:0,i:0,s:0,n:0,t:0,f:0,j:0,p:0},form:{q1:"",q2:"",q3:"",q4:"",q5:"",q6:"",q7:"",q8:"",q9:"",q10:"",q11:"",q12:"",q13:""},foxes:{isfj:{name:"Pale Fox",desc:"Your friends would describe you as warm and considerate. Although you value harmony and are sensitive to others' feelings, you can sometimes feel chaotic inside. You have a natural tendency towards hard work and savage perfectionism."},infj:{name:"Fantastic Fox",desc:"You are a clever, creative, and imaginative idealist who possesses a difference in the way you see the world. You are gentle and caring and value family, whether that means by blood or by choice."},enfp:{name:"Hooded Fox",desc:"You love standing apart from the crowd and hate being labeled or put inside a box (yes you know it rhymes). While you enjoy company, you also get bored easily and can be mischievous at times. You have a strong sense of justice."},esfp:{name:"Fox Royale",desc:"You love being around people! Are you the life of the party?! While you enjoy being the center of attention, you have strong interpersonal skills and tend to notice and appreciate others; you are also warm and generously compassion."},esfj:{name:"Fox Toddy",desc:"You love interacting with others and being in the spotlight. Everyone is happy to have you around! People are attracted to you because of your good listening skills and your loving and accepting nature."},istp:{name:"Set Fox",desc:"You are a bit mysterious! Like water, your personality isn't confined to one extreme -- you can be rational at times and spontaneous at others. You can be funny and insightful, but also competitive and stubborn. However, fairness and equality are important to you."},entj:{name:"Cadmean Vixen",desc:"As a fox who tends to tenaciously attack problems with both logic and emotion, you seem to have a natural gift for considering options and making considered decisions. You love being with people but find it challenging to get close to people. You may feel as though you're destined for greatness, as you have a special connection with the stars."},entp:{name:"Kuma Lisa",desc:"You love to shred apart the status quo and reevaluate its corpse with a fresh eye. Although you are intelligent and love helping people, you also love to question society and whether it's really for you."},enfj:{name:"Finnish Fox",desc:"You love people and are charismatic and principled. You mainly act on intuition and feeling. Although you sometimes troll people for fun, you also tend towards loyalty and genuine kindness."},infp:{name:"Tame Fox",desc:"You can be both gregarious and introverted. When you first meet someone, you prefer to not reveal much about yourself. However you are also insightful about people and are driven to make the world a better place."},isfp:{name:"Ninhursag's Fox",desc:"Aesthetics are important to you, as are pushing boundaries and convention. You are comfortable in your own skin, which makes you a compassionate and understanding listener who friends trust for advice and reassurance."},intp:{name:"Kitsune",desc:"You love patterns and have a tendency to be detail-oriented. Despite that, you often share ideas before they are fully-formed, but you don't let that stop you from methodically working through your thoughts. Respect and tofu are important to you, and you make a faithful and loyal companion."},istj:{name:"Gumiho",desc:"You are a logical and organized hard worker who values tradition, knowledge, and honesty. Although you may be patient and reserved, you cannot always hide your true fox-like nature."},estp:{name:"Moche Fox",desc:"You may often feel as if you are between two worlds, as you are driven by both emotion and logic. Brave and passionate, you ask for forgiveness rather than permission. Although you chafe at structure, you love a good puzzle."},estj:{name:"Lo Rainard",desc:"You always strive to work towards what you believe is good and right above all else and put effort into being a good role model. You love brining communities together and upholding values you find important."},intj:{name:"Huli Jing",desc:"You are self-sufficient and comfortable working alone. You are fascinated by ideas and theories, and value competence. You trust your gut instinct and stand on the liminal edge between dark and light."}},foxType:"",foxDesc:"",submitted:!1}},methods:{compare:function(e,t){return this.attributes[e]>this.attributes[t]?e:this.attributes[t]>this.attributes[e]?t:this.getRandoNum()?e:t},findType:function(){var e=[this.compare("e","i"),this.compare("s","n"),this.compare("t","f"),this.compare("j","p")].join("");this.foxType=this.foxes[e].name,this.foxDesc=this.foxes[e].desc},onSubmit:function(){for(var e in this.form){var t=this.form[e].split(""),o=Object(i["a"])(t,2),a=o[0],r=o[1];this.attributes[a]+=+r}this.findType(),this.submitted=!0},getRandoNum:function(){return Math.floor(Math.random()*Math.floor(2))}}}),s=l,u=(o("1781"),o("2877")),d=Object(u["a"])(s,r,n,!1,null,"9b994f00",null);d.options.__file="App.vue";var f=d.exports,c=o("5c96"),m=o.n(c),p=(o("c69f"),o("b2d6")),h=o.n(p);a["default"].use(m.a,{locale:h.a}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(f)}}).$mount("#app")},c69f:function(e,t,o){}});
//# sourceMappingURL=app.9992e864.js.map