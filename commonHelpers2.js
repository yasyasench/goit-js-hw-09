import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BrddEoy-.js";const a=document.querySelector(".feedback-form");a.addEventListener("input",c);a.addEventListener("submit",u);const t=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},{email:l,message:n}=a.elements;l.value=t.email;n.value=t.message;function c(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}function u(e){e.preventDefault();const{email:o,message:m}=e.currentTarget.elements,r=o.value.trim(),i=m.value.trim();if(r===""||i===""){s.error({position:"topRight",message:"Fill please all fields",timeout:5e3});return}console.log(t),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),s.success({position:"topRight",message:"Data sent!",timeout:2500})}
//# sourceMappingURL=commonHelpers2.js.map
