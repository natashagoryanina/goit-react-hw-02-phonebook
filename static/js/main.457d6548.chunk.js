(this.webpackJsonpapp2=this.webpackJsonpapp2||[]).push([[0],{22:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var a,o,r,c,i,s=e(0),l=e(14),d=e.n(l),b=(e(22),e(4)),m=e(12),u=e(5),p=e(6),x=e(9),f=e(8),h=e(28),j=e(2),g=e(3),O=g.b.form(a||(a=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .formLabel {\n        margin-bottom: 20px;\n    }\n\n    .formInput {\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        height: 25px;\n    }\n\n    .formText {\n        margin-bottom: 7px;\n        font-size: 18px;\n        line-height: 29px;\n    }\n\n    .addContactBtn {\n        width: 100px;\n    }\n\n"]))),v=e(1),C=function(n){Object(x.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={name:"",number:""},n.onFormChange=function(t){var e=t.target,a=e.name,o=e.value;n.setState(Object(b.a)({},a,o))},n.onFormSubmit=function(t){var e=n.state,a=e.name,o=e.number;t.preventDefault(),n.props.addContact({name:a,id:Object(h.a)(),number:o})},n}return Object(p.a)(e,[{key:"render",value:function(){return Object(v.jsxs)(O,{onSubmit:this.onFormSubmit,children:[Object(v.jsx)("span",{className:"formText",children:"Name:"}),Object(v.jsx)("label",{className:"formLabel",children:Object(v.jsx)("input",{className:"formInput",type:"text",name:"name",onChange:this.onFormChange,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(v.jsx)("span",{className:"formText",children:"Number:"}),Object(v.jsx)("label",{className:"formLabel",children:Object(v.jsx)("input",{className:"formInput",type:"tel",name:"number",onChange:this.onFormChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(v.jsx)("button",{className:"addContactBtn",type:"submit",children:"Add contact"})]})}}]),e}(s.Component),y=C,w=g.b.li(o||(o=Object(j.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    margin-bottom: 15px;\n    font-size: 16px;\n    line-height: 29px;\n\n    .deleteBtn {\n        width: 65px;\n        margin-left: 10px;\n        margin-bottom: 0;\n    }\n"]))),z=function(n){var t=n.contact,e=n.removeContactById;return Object(v.jsxs)(w,{children:[Object(v.jsxs)("span",{children:[t.name,": ",t.number]}),Object(v.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return e(t.id)},children:"Delete"})]})},B=g.b.ul(r||(r=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),I=function(n){var t=n.contacts,e=n.removeContactById;return Object(v.jsx)(B,{children:t.map((function(n){return Object(v.jsx)(z,{contact:n,removeContactById:e})}))})},N=g.b.label(c||(c=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .filterText {\n        margin-bottom: 7px;\n        font-size: 18px;\n        line-height: 29px;\n    }\n\n    .filterInput{\n        height: 25px;\n        width: 151px;\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        margin-bottom: 20px;\n    }\n"]))),A=function(n){var t=n.value,e=n.onChange;return Object(v.jsxs)(N,{children:[Object(v.jsx)("span",{className:"filterText",children:"Find contacts by name"}),Object(v.jsx)("input",{className:"filterInput",type:"text",name:"filter",value:t,onChange:e})]})},k=Object(g.a)(i||(i=Object(j.a)(['\n    body {\n        font-family: "Amazon Ember",sans-serif;\n        padding: 25px;\n    }\n\n    ul{\n        list-style: none;\n        padding: 0;\n    }\n\n    button {\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        display: flex;\n        margin-bottom: 20px;\n        font-family: "Amazon Ember",sans-serif;\n        font-size: 13px;\n        line-height: 29px;\n        padding: 0 10px 0 11px;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n    }\n\n    button:hover {\n        background-color: #f7fafa;\n    }\n\n    button:focus {\n        border-color: #008296;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        outline: 0;\n    }\n\n    h1,\n    h2 {\n        margin-top: 0;\n    }\n']))),F=function(n){Object(x.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(t){n.state.contacts.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):n.setState((function(n){return{contacts:[].concat(Object(m.a)(n.contacts),[t])}}))},n.removeContactById=function(t){n.setState((function(n){return{contacts:Object(m.a)(n.contacts.filter((function(n){return n.id!==t})))}}))},n.onFilterChange=function(t){var e=t.target,a=e.name,o=e.value;n.setState(Object(b.a)({},a,o))},n.contactsFilter=function(t){var e=n.state,a=e.contacts,o=e.filter.toLowerCase();return a.filter((function(n){return n.name.toLowerCase().includes(o)}))},n}return Object(p.a)(e,[{key:"render",value:function(){var n=this.contactsFilter();return Object(v.jsxs)("main",{children:[Object(v.jsx)(k,{}),Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(y,{addContact:this.addContact}),Object(v.jsx)(A,{value:this.state.filter,onChange:this.onFilterChange}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(I,{contacts:n,removeContactById:this.removeContactById})]})}}]),e}(s.Component),S=F;d.a.render(Object(v.jsx)(S,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.457d6548.chunk.js.map