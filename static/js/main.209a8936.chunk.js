(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),s=n(7),o=n(2),l=n(8),u=(n(13),n(0)),d=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)("h1",{className:"Container__title",children:"Phonebook"}),t]})};n(15);function b(e){var t=e.addContact,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),d=l[0],b=l[1];return Object(u.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),t(r,d),i(""),b("")},children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){var t=e.target.value;i(t)}})]}),Object(u.jsxs)("label",{children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",value:d,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){var t=e.target.value;b(t)}})]}),Object(u.jsx)("button",{type:"submit",className:"Form__button",children:"Add contact"})]})}n(16);function j(e){var t=e.onFilterChange;return Object(u.jsxs)("div",{className:"Filter ",children:[Object(u.jsx)("h2",{className:"Filter__contacts-title",children:"Contacts"}),Object(u.jsx)("h3",{className:"Filter__title",children:"Find contacts by name"}),Object(u.jsx)("input",{className:"Filter__input",type:"text",onChange:t})]})}function m(e){var t=e.name,n=e.number,a=e.id,c=e.onDelete;return Object(u.jsxs)("li",{className:"ContactItem",children:[Object(u.jsx)("p",{className:"ContactItem__text",children:t}),Object(u.jsx)("p",{className:"ContactItem__text",children:n}),Object(u.jsx)("button",{className:"ContactListItem__button",onClick:function(){return c(a)},children:"Delete"})]})}n(17);function h(e){var t=e.contacts,n=e.onDelete;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:"ContactList",children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(u.jsx)(m,{name:t,number:a,id:c,onDelete:n},c)}))})})}var O=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),m=i[0],O=i[1],x=function(e){return 1!==n.filter((function(t){return t.name.includes(e)&&alert("".concat(e," already exists in contacts")),t.name.includes(e)})).length};return Object(u.jsxs)(d,{children:[Object(u.jsx)(b,{addContact:function(e,t){var a=Object(l.a)();x(e)&&c([].concat(Object(s.a)(n),[{name:e,number:t,id:a}]))}}),Object(u.jsx)(j,{onFilterChange:function(e){O(e.target.value)}}),Object(u.jsx)(h,{contacts:function(){var e=m.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.209a8936.chunk.js.map