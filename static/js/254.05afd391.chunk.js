"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[254],{8026:function(n,e,t){t.d(e,{Gq:function(){return d},II:function(){return x},__:function(){return m},jj:function(){return p},zx:function(){return f}});var r,i,o,a,s,c=t(168),l=t(6444),u=t(5705),d=(0,l.ZP)(u.l0)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),m=l.ZP.label(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n"]))),x=(0,l.ZP)(u.gN)(o||(o=(0,c.Z)(["\n  font-size: 16px;\n  padding: 4px;\n  border: 1px solid Plum;\n  border-radius: 4px;\n  color: DarkSlateBlue;\n"]))),p=(0,l.ZP)(u.Bc)(a||(a=(0,c.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: Red;\n"]))),f=l.ZP.button(s||(s=(0,c.Z)(["\n  color: inherit;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid DarkSlateBlue;\n  border-radius: 4px;\n  background-color: Plum;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: DarkSlateBlue;\n    color: White;\n  }\n"])))},9254:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,s,c,l,u=t(5705),d=t(8026),m=t(9434),x=t(3634),p=t(5218),f=t(6916),h=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},b=function(n){return n.filter},j=(0,f.createSelector)([h,b],(function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().trim().includes(t)}))})),v=function(){return{contacts:(0,m.v9)(h),isLoading:(0,m.v9)(g),error:(0,m.v9)(Z),filter:(0,m.v9)(b)}},P=t(2797),w=P.Ry().shape({name:P.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),number:P.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Please enter a valid number!").required("Number is required!")}),y=(P.Ry().shape({email:P.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:P.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")}),P.Ry().shape({name:P.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),email:P.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:P.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")}),t(184)),z={name:"",number:""},k=function(){var n=(0,m.I0)(),e=v().contacts;return(0,y.jsx)(u.J9,{initialValues:z,onSubmit:function(t,r){var i=r.resetForm;e.find((function(n){return n.name===t.name}))?p.Am.error("Sorry, ".concat(t.name," is already in contacts.")):(n((0,x.uK)(t)),i(),p.Am.success("Contact successfully added!"))},validationSchema:w,children:(0,y.jsxs)(d.Gq,{children:[(0,y.jsxs)(d.__,{children:["Name",(0,y.jsx)(d.II,{type:"text",name:"name"}),(0,y.jsx)(d.jj,{component:"div",name:"name"})]}),(0,y.jsxs)(d.__,{children:["Number",(0,y.jsx)(d.II,{type:"tel",name:"number"}),(0,y.jsx)(d.jj,{component:"div",name:"number"})]}),(0,y.jsx)(d.zx,{type:"submit",children:"Add contact"})]})})},_=t(168),q=t(6444),A=q.ZP.p(r||(r=(0,_.Z)(["\n  font-size: 16px;\n"]))),N=q.ZP.button(i||(i=(0,_.Z)(["\n  color: inherit;\n  padding: 4px;\n  font-size: 12px;\n  border: 1px solid DarkSlateBlue;\n  border-radius: 4px;\n  background-color: Plum;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: DarkSlateBlue;\n    color: White;\n  }\n"]))),S=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=(0,m.I0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(A,{children:[r,": ",i]}),(0,y.jsx)(N,{type:"button",onClick:function(){return function(n){o((0,x.GK)(n)),p.Am.success("Contact was deleted!")}(t)},children:"Delete"})]})},I=q.ZP.ul(o||(o=(0,_.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n"]))),C=q.ZP.li(a||(a=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]))),B=q.ZP.h3(s||(s=(0,_.Z)(["\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]))),D=function(){var n=(0,m.v9)(h),e=(0,m.v9)(j);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(B,{children:"Your Contacts"}),n.length?e.length?(0,y.jsx)(I,{children:e.map((function(n){return(0,y.jsx)(C,{children:(0,y.jsx)(S,{contact:n})},n.id)}))}):(0,y.jsx)(A,{children:"No matches found!"}):(0,y.jsx)(A,{children:"No contacts yet!"})]})},F=t(4808),R=q.ZP.label(c||(c=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),$=q.ZP.input(l||(l=(0,_.Z)(["\n  font-size: 16px;\n  padding: 4px;\n  border: 1px solid Plum;\n  border-radius: 4px;\n  color: DarkSlateBlue;\n"]))),E=function(){var n=v().filter,e=(0,m.I0)();return(0,y.jsxs)(R,{children:["Find contacts by name:",(0,y.jsx)($,{type:"text",value:n,onChange:function(n){e((0,F.T)(n.target.value))}})]})},L=t(9649),G=t(5372),T=t(2791),K=t(3804),M=function(){var n=(0,m.v9)(g),e=(0,m.v9)(Z),t=(0,m.I0)();return(0,T.useEffect)((function(){t((0,x.yF)())}),[t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(G.xv,{children:["Manage your contacts",(0,y.jsx)(G.TR,{to:K.Z.HOME,children:"Phonebook"})]}),(0,y.jsx)(k,{}),(0,y.jsx)(E,{}),n&&!e&&(0,y.jsx)(L.a,{}),!n&&(0,y.jsx)(D,{})]})}},5372:function(n,e,t){t.d(e,{TR:function(){return d},__:function(){return x},im:function(){return m},xv:function(){return u}});var r,i,o,a,s=t(168),c=t(1087),l=t(6444),u=l.ZP.p(r||(r=(0,s.Z)(["\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n  padding: 16px;\n"]))),d=(0,l.ZP)(c.rU)(i||(i=(0,s.Z)(["\n  display: block;\n  font-size: 40px;\n  font-style: italic;\n  line-height: 1.6;\n  color: Plum;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: DarkSlateBlue;\n  }\n"]))),m=l.ZP.div(o||(o=(0,s.Z)(["\n  position: relative;\n  margin-bottom: 16px;\n  max-width: 205px;\n"]))),x=l.ZP.label(a||(a=(0,s.Z)(["\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 16px;\n  line-height: 1.2;\n"])))}}]);
//# sourceMappingURL=254.05afd391.chunk.js.map