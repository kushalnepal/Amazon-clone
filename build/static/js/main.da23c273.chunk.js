(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(20),n=c.n(i),r=(c(27),c(28),c(4)),j=(c(29),c.p+"static/media/amazon2.b4033759.jpg"),l=c.p+"static/media/search.23418f39.png",o=c.p+"static/media/shoping-cart.306413a4.png",d=c(8),b=c(2),h=c(0),u=Object(s.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(u.Provider,{value:Object(s.useReducer)(t,c),children:a})},m=function(){return Object(s.useContext)(u)};var x=Object(b.f)((function(){var e=m(),t=Object(r.a)(e,2),c=t[0],s=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("img",{className:"header-logo",src:j,alt:"amazon"})}),Object(h.jsxs)("div",{className:"header-search",children:[Object(h.jsx)("input",{className:"header-searchInput",type:"text"}),Object(h.jsx)("img",{className:"header-searchIcon",src:l,alt:"search"})]}),Object(h.jsxs)("div",{className:"header-nav",children:[Object(h.jsx)(d.b,{to:"/Login",children:Object(h.jsxs)("div",{className:"header-option",children:[Object(h.jsxs)("span",{className:"header-optionLineOne",children:["Hello ",a?a.email:"Guest"," "]}),Object(h.jsx)("span",{className:"header-optionLineTwo",children:"Sign in "})]})}),Object(h.jsxs)("div",{className:"header-option",children:[Object(h.jsx)("span",{className:"header-optionLineOne",children:"Returns "}),Object(h.jsx)("span",{className:"header-optionLineTwo",children:"& Orders "})]}),Object(h.jsxs)("div",{className:"header-option",children:[Object(h.jsx)("span",{className:"header-optionLineOne",children:"Your "}),Object(h.jsx)("span",{className:"header-optionLineTwo",children:"Prime "})]}),Object(h.jsx)(d.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header-optionBasket",children:[Object(h.jsx)("img",{className:"basket",src:o,alt:"shoppingcart"}),Object(h.jsxs)("span",{className:"header-optionLineTwo header-basketCount",children:[null===s||void 0===s?void 0:s.length," "]})]})})]})]})})),p=(c(36),c.p+"static/media/computeracc.07344826.jpg");c(37);var g=function(e){var t=e.id,c=e.title,s=e.image,a=e.price,i=e.rating,n=m(),j=Object(r.a)(n,2),l=(j[0].basket,j[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product_info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("small",{className:"product_price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(h.jsx)("p",{className:"star",children:"\u2b50"})}))})]}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{src:s,alt:"product"}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:a,rating:i}})},children:"Add to Basket"})," "]})},v=c.p+"static/media/hp.a14f00dd.jpg",f=c.p+"static/media/Roku.0ff6ef9e.jpg",N=c.p+"static/media/cameralens.fc70b1f3.jpg",k=c.p+"static/media/monitor.55232dee.jpg",_=c.p+"static/media/keyboard.06aaf958.jpg",y=c.p+"static/media/pendrive.f255277e.jpg";var w=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home__container",children:[Object(h.jsx)("img",{className:"home-image",src:p,alt:"banner"}),Object(h.jsxs)("div",{className:"home-row",children:[Object(h.jsx)(g,{title:"Black Noir original HP Ink",image:v,price:19.99,rating:5}),Object(h.jsx)(g,{title:"Roku Express HDMI Cable",image:f,price:17.99,rating:4})]}),Object(h.jsxs)("div",{className:"home-row",children:[Object(h.jsx)(g,{title:"Canon Cameralens",image:N,price:10.99,rating:2}),Object(h.jsx)(g,{title:"HP monitor",image:k,price:17.99,rating:4}),Object(h.jsx)(g,{title:"Ledger drive",image:y,price:10.99,rating:2})]}),Object(h.jsx)("div",{className:"home-row",children:Object(h.jsx)(g,{title:"logtech wireless Keyboard",image:_,price:"14.99",rating:3})})]})})},C=(c(38),c.p+"static/media/checkoutads1.b7a20f74.jpg"),A=(c(39),c(22)),E=c.n(A),B=c(18),P=c(10),S=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(P.a)(Object(P.a)({},e),{},{basket:[].concat(Object(B.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id!==t})),s=Object(B.a)(e.basket);return c>=0?s.splice(c,1):console.warn("Cant't remove product(id:$(action.id) as it is not in basket)"),Object(P.a)(Object(P.a)({},e),{},{basket:s});case"SET_USER":return Object(P.a)(Object(P.a)({},e),{},{user:t.user});default:return e}};var L=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(E.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[" (",null===c||void 0===c?void 0:c.length," subtotal items) : ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal_gift",children:[Object(h.jsx)("input",{type:"checkbox"}),"this order contains a gift"]})]})},decimalscale:2,value:S(c),displayType:"text",thousandseparator:!0,prefix:"$"}),Object(h.jsx)("button",{children:"Proceed to checkout"})]})};c(41);var R=function(e){var t=e.id,c=e.image,s=e.title,a=e.price,i=e.rating,n=m(),j=Object(r.a)(n,2),l=(j[0].basket,j[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct__image",src:c,alt:"product + $(_id)"}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsxs)("div",{className:"checkoutProduct__rating",children:[Array(i).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})})),Object(h.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Removed from Basket"})]})]})]})};var D=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout-left",children:[Object(h.jsx)("img",{className:"checkout_ad",src:C,alt:"checkoutads"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"checkout_title",children:"Your shopping basket"}),c.map((function(e){return Object(h.jsx)(R,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsxs)("div",{className:"checkout_right",children:[Object(h.jsx)("b",{children:"the subtotal will go here"}),Object(h.jsx)(L,{})]})]})};c(42);var I=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(""),n=Object(r.a)(i,2),j=n[0],l=n[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("div",{children:Object(h.jsxs)("h2",{className:"login_logo",children:[Object(h.jsx)("b",{style:{color:"black"},children:"Ama"}),Object(h.jsx)("b",{style:{color:"orange"},children:"zon"})]})})}),Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsx)("h1",{children:" sign-in "}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.email)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:j,onChange:function(e){return l(e.target.password)}}),Object(h.jsx)("button",{type:"submit",className:"login_signin_Button",onClick:function(e){e.preventDefault()},children:"SignIn"})]}),Object(h.jsxs)("p",{children:["By signing-in you agree to the AMAZON CLONE Conditions .  ",Object(h.jsx)(d.b,{children:" Be sure "}),"  if you like my project you can join me in facebook as ",Object(h.jsx)(d.b,{children:" Kushal NP "}),"  "]}),Object(h.jsx)("button",{className:"login_register_Button",onClick:function(e){e.preventDefault()},children:"Create your Account"})]})]})};var M=function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(b.c,{children:[Object(h.jsxs)(b.a,{exact:!0,path:"/",children:[Object(h.jsx)(x,{}),Object(h.jsx)(w,{})]}),Object(h.jsxs)(b.a,{exact:!0,path:"/checkout",children:[Object(h.jsx)(x,{}),Object(h.jsx)(D,{})]}),Object(h.jsx)(b.a,{exact:!0,path:"/Login",children:Object(h.jsx)(I,{})})]})})})};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:T,children:Object(h.jsx)(M,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.da23c273.chunk.js.map