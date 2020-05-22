(this["webpackJsonpSimple-CRUD-React"]=this["webpackJsonpSimple-CRUD-React"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),u=a.n(r),m=(a(14),a(8)),c=a(1),i=a(2),s=a(3),o=function(e){var t={id:null,name:"",username:""},a=Object(n.useState)(t),r=Object(c.a)(a,2),u=r[0],m=r[1],o=function(e){var t=e.target,a=t.name,n=t.value;m(Object(s.a)(Object(s.a)({},u),{},Object(i.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),u.name&&u.username&&u.email&&(e.addUser(u),m(t))}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:u.name,onChange:o}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:u.username,onChange:o}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",value:u.email,onChange:o}),l.a.createElement("button",null,"Add new user"))},E=function(e){var t=Object(n.useState)(e.currentUser),a=Object(c.a)(t,2),r=a[0],u=a[1];Object(n.useEffect)((function(){u(e.currentUser)}),[e]);var m=function(e){var t=e.target,a=t.name,n=t.value;u(Object(s.a)(Object(s.a)({},r),{},Object(i.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(r.id,r)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:m}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:r.username,onChange:m}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",value:r.email,onChange:m}),l.a.createElement("button",null,"Update user"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},d=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.username),l.a.createElement("td",null,t.email),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){e.editRow(t)},className:"accent-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No users"))))},b=function(){var e=Object(n.useState)([{id:1,name:"Manuel",username:"Manumanu",email:"manumanu515256@gmail.com"},{id:2,name:"Ignacio",username:"i123",email:"nacho123@gmail.com"},{id:3,name:"Do\xf1a",username:"aabb1122",email:"donadona@aa.com"}]),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)({id:null,name:"",username:""}),i=Object(c.a)(u,2),s=i[0],b=i[1],f=Object(n.useState)(!1),p=Object(c.a)(f,2),h=p[0],g=p[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Simple App CRUD with React"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},h?l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Edit user"),l.a.createElement(E,{editing:h,setEditing:g,currentUser:s,updateUser:function(e,t){g(!1),r(a.map((function(a){return a.id===e?t:a})))}})):l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Add user"),l.a.createElement(o,{addUser:function(e){e.id=a.length+1,r([].concat(Object(m.a)(a),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View users"),l.a.createElement(d,{users:a,editRow:function(e){g(!0),b({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){g(!1),r(a.filter((function(t){return t.id!==e})))}}))))};u.a.render(l.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cfc63c4d.chunk.js.map