"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{8026:function(n,e,i){i.d(e,{Gq:function(){return u},II:function(){return p},__:function(){return m},jj:function(){return x},zx:function(){return h}});var r,t,a,s,o,l=i(168),d=i(6444),c=i(5705),u=(0,d.ZP)(c.l0)(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),m=d.ZP.label(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n"]))),p=(0,d.ZP)(c.gN)(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  padding: 4px;\n  border: 1px solid Plum;\n  border-radius: 4px;\n  color: DarkSlateBlue;\n"]))),x=(0,d.ZP)(c.Bc)(s||(s=(0,l.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: Red;\n"]))),h=d.ZP.button(o||(o=(0,l.Z)(["\n  color: inherit;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid DarkSlateBlue;\n  border-radius: 4px;\n  background-color: Plum;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: DarkSlateBlue;\n    color: White;\n  }\n"])))},5643:function(n,e,i){i.r(e);var r=i(5372),t=i(8026),a=i(5705),s=i(9434),o=i(9273),l=i(2774),d=i(184),c={name:"",email:"",password:""};e.default=function(){var n=(0,s.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.xv,{children:["Create your private account to use ",(0,d.jsx)(r.TR,{children:"Phonebook"})]}),(0,d.jsx)(a.J9,{initialValues:c,onSubmit:function(e,i){var r=i.resetForm;n((0,o.z2)(e)),r()},validationSchema:l.Yy,children:(0,d.jsxs)(t.Gq,{children:[(0,d.jsx)(r.im,{children:(0,d.jsxs)(r.__,{children:[(0,d.jsx)("span",{children:"Your name"}),(0,d.jsx)(t.II,{type:"text",name:"name"}),(0,d.jsx)(t.jj,{component:"div",name:"name"})]})}),(0,d.jsx)(r.im,{children:(0,d.jsxs)(r.__,{children:[(0,d.jsx)("span",{children:"EMail"}),(0,d.jsx)(t.II,{type:"email",name:"email"}),(0,d.jsx)(t.jj,{component:"div",name:"email"})]})}),(0,d.jsx)(r.im,{children:(0,d.jsxs)(r.__,{children:[(0,d.jsx)("span",{children:"Password"}),(0,d.jsx)(t.II,{type:"password",name:"password"}),(0,d.jsx)(t.jj,{component:"div",name:"password"})]})}),(0,d.jsx)(t.zx,{type:"submit",children:"Sign Up"})]})})]})}},5372:function(n,e,i){i.d(e,{TR:function(){return u},__:function(){return p},im:function(){return m},xv:function(){return c}});var r,t,a,s,o=i(168),l=i(1087),d=i(6444),c=d.ZP.p(r||(r=(0,o.Z)(["\n  font-size: 18px;\n  line-height: 1.4;\n  font-weight: 500;\n  padding: 30px;\n"]))),u=(0,d.ZP)(l.rU)(t||(t=(0,o.Z)(["\n  display: block;\n  font-size: 40px;\n  font-style: italic;\n  line-height: 1.6;\n  color: #4682b4;\n  &:hover,\n  &:focus {\n    color: #000080;\n  }\n"]))),m=d.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n  margin-bottom: 16px;\n  max-width: 205px;\n"]))),p=d.ZP.label(s||(s=(0,o.Z)(["\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 16px;\n  line-height: 1.2;\n"])))},2774:function(n,e,i){i.d(e,{OD:function(){return t},Yy:function(){return s},dm:function(){return a}});var r=i(2797),t=r.Ry().shape({name:r.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),number:r.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Please enter a valid number!").required("Number is required!")}),a=r.Ry().shape({email:r.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:r.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")}),s=r.Ry().shape({name:r.Z_().min(3,"Name is too short!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+(?:[-'\s][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401]+)*$/,"Name must not contain digits").required("Name is required!"),email:r.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email").required("Email is required!"),password:r.Z_().min(6,"Password must be at least 6 characters!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,"Password must include at least one capital letter and one digit").required("Password is required!")})}}]);
//# sourceMappingURL=643.f6a3f7c8.chunk.js.map