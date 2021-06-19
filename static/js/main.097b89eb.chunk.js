(this["webpackJsonpmaggi-experiment"]=this["webpackJsonpmaggi-experiment"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var r=t(2),i=t(6),n=t.n(i),a=(t(11),t(12),t(4)),d=t(1),o=t(3),l=(t(13),t(0)),s=["children","disabled","background","color","rounded","borderRadius","width","height","fontWeight"],j=function(e){var c=e.children,t=e.disabled,r=void 0!==t&&t,i=e.background,n=void 0===i?"#d8d8d8":i,a=e.color,j=void 0===a?"#000000":a,b=e.rounded,h=void 0===b||b,u=e.borderRadius,O=void 0===u?10:u,g=e.width,v=void 0===g?"auto":g,x=e.height,f=void 0===x?"auto":x,p=e.fontWeight,m=void 0===p?"600":p,y=Object(o.a)(e,s),R=h?O:0;return Object(l.jsx)("button",Object(d.a)(Object(d.a)({className:"btn",disabled:r,style:{background:n,color:j,borderRadius:R,width:v,height:f,fontWeight:m}},y),{},{children:c}))},b=["children","variant"],h={PRIMARY:{bg:"#ffed00",color:"#000000"},SECONDARY:{bg:"#ed232a",color:"#f3f3f3"},TERTIARY:{bg:"#f3f3f3",color:"#000000"}},u=function(e){var c=e.children,t=e.variant,r=void 0===t?"PRIMARY":t,i=Object(o.a)(e,b);return Object(l.jsxs)(j,Object(d.a)(Object(d.a)({height:"40px",background:h[r].bg,color:h[r].color},i),{},{children:[" ",c]}))},O=(t(15),function(e){var c=e.children,t=e.color;return Object(l.jsx)("div",{style:{background:t},className:"modal",children:c})}),g=(t(16),["variant","children","color"]),v=function(e){var c=e.variant,t=e.children,r=e.color,i=void 0===r?"#000000":r,n=Object(o.a)(e,g),a=Object(d.a)({color:i},n);switch(c){case"big-header":return Object(l.jsx)("h1",{style:Object(d.a)({},a),children:t});case"medium-header":return Object(l.jsx)("h3",{style:Object(d.a)({},a),children:t});case"small-header":return Object(l.jsx)("h5",{style:Object(d.a)({},a),children:t});case"label":return Object(l.jsx)("label",{style:Object(d.a)({},a),children:t});case"paragraph":return Object(l.jsx)("p",{style:Object(d.a)({},a),children:t});default:return}},x=(t(17),["type","background","color","width","height"]),f=function(e){var c=e.type,t=void 0===c?"text":c,r=e.background,i=void 0===r?"#E8E7E7":r,n=e.color,a=void 0===n?"#000000":n,s=e.width,j=void 0===s?"482px":s,b=e.height,h=void 0===b?"50px":b,u=Object(o.a)(e,x);return Object(l.jsx)("input",Object(d.a)({className:"ip",type:t,style:{background:i,color:a,width:j,height:h}},u))},p=(t(18),["label"]),m=function(e){var c=e.label,t=Object(o.a)(e,p);return Object(l.jsxs)("div",{className:"labeled-ip__container",children:[Object(l.jsx)(v,{variant:"label",children:c}),Object(l.jsx)(f,Object(d.a)({},t))]})},y=(t(19),function(e){var c=e.toggleModal,t=e.addRecipe;return Object(l.jsx)(O,{color:"#ffffff",children:Object(l.jsxs)("div",{className:"add-recipe",children:[Object(l.jsx)("div",{className:"add-recipe__title",children:Object(l.jsx)(v,{variant:"label",children:"ADD RECIPE"})}),Object(l.jsxs)("div",{className:"add-recipe__form",children:[Object(l.jsx)(m,{label:"Name"}),Object(l.jsx)(m,{label:"Category"}),Object(l.jsx)(m,{label:"Procedure"})]}),Object(l.jsxs)("div",{className:"add-recipe__action",children:[Object(l.jsx)(u,{rounded:!1,width:"100%",height:"62px",variant:"TERTIARY",onClick:function(){c&&c(!1)},children:"Cancel"}),Object(l.jsx)(u,{rounded:!1,width:"100%",height:"62px",variant:"PRIMARY",onClick:function(){return t&&t()},children:"Add"})]})]})})}),R=(t(20),function(e){var c=e.children;return Object(l.jsx)("div",{class:"modal-background",children:c})}),_=function(e){var c=e.handelAddRecipe,t=Object(r.useState)(!1),i=Object(a.a)(t,2),n=i[0],d=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{variant:"SECONDARY",onClick:function(){d(!0)},children:"ADD YOUR RECIPE"}),n&&Object(l.jsx)(R,{children:Object(l.jsx)(y,{toggleModal:d,addRecipe:c})})]})},w=(t(21),function(e){var c=e.children,t=e.height,r=e.color,i=void 0===r?"#d8d8d8":r;return Object(l.jsx)("div",{style:{width:"100%",background:i,height:t},className:"pill",children:c})}),k=(t(22),function(e){var c=e.title,t=e.category,r=e.categoryColor,i=e.procedure;return Object(l.jsx)(O,{color:"#ffffff",children:Object(l.jsxs)("div",{class:"recipe",children:[Object(l.jsx)("div",{class:"recipe__img"}),Object(l.jsx)("div",{class:"recipe__title",children:c}),Object(l.jsx)("div",{class:"recipe__catogory",children:Object(l.jsx)(w,{color:r,height:"30px",children:t})}),Object(l.jsx)("div",{class:"recipe__desc",children:i})]})})}),A=Object(r.createContext)(),C={showAddRecipe:!1},E="toggle_add_recipe";function N(e,c){switch(c.type){case E:return Object(d.a)(Object(d.a)({},e),{},{showAddRecipe:c.value});default:throw new Error}}for(var I=function(e){var c=e.children,t=Object(r.useReducer)(N,C),i=Object(a.a)(t,2),n=i[0],d=i[1];return Object(l.jsx)(A.Provider,{value:{state:n,dispatch:d},children:c})},Y=t.p+"static/media/logo1.e099bc7c.png",M=function(){return Object(l.jsx)("img",{src:Y,width:130})},P={title:"Egg",category:"simple",categoryColor:"yellow",procedure:"1.Boil Maggie separately, 2.Boil egg, 3.Mix egg and masala with noodles"},D=[],T=0;T<10;T++)D.push(P);var B=function(){return Object(l.jsx)("div",{class:"container",children:Object(l.jsx)(I,{children:Object(l.jsxs)("div",{class:"app",children:[Object(l.jsx)("div",{class:"app__header",children:Object(l.jsx)(M,{})}),Object(l.jsxs)("div",{class:"app__body",children:[Object(l.jsx)("div",{className:"addRecipe__container",children:Object(l.jsx)(_,{handelAddRecipe:function(){}})}),Object(l.jsx)("div",{className:"recipes__container",children:D.map((function(e){return Object(l.jsx)(k,{title:e.title,category:e.category,categoryColor:e.categoryColor,procedure:e.procedure})}))})]})]})})})};n.a.render(Object(l.jsx)(B,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.097b89eb.chunk.js.map