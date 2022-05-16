"use strict";(self.webpackChunkAirbnbApp=self.webpackChunkAirbnbApp||[]).push([[61],{66061:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(15861),i=r(1413),a=r(87757),o=r.n(a),l=r(24541),u=r(53678),c=u.aY.messageNameLocationShouldNotEmpty,d=u.aY.messageFieldIsRequire,s=l.Ry().shape({_id:l.Z_().required(d),name:l.Z_().required(c),province:l.Z_().required(d),country:l.Z_().required(d),valueate:l.Z_().required(d)}),h=r(49020),v=r(29220),m=r(83350),f=r(16970),p=r(79429),C=r(16031),x=r.n(C),g=r(47313),y=r(97594),T=r(63830),b={Container:r(16211).ZP.div.withConfig({componentId:"sc-1sx6l7-0"})(["",""],{width:"100%",maxWidth:"500px",marginTop:"2.5rem",marginBottom:"2.5rem",marginLeft:"auto",marginRight:"auto"})},V=r(46417);var F=function LocationMangerEditPage(){var e=(0,y.I0)(),n=f.C.editLocationField,r=f.C.renderFormLocationField,a=u.aY.messageNoDifferent,l=b.Container,c=h.Z.FormContainer,d=h.Z.FormControl,C=h.Z.FormButton,F=m.V.capNhatViTriAsync,Z=v.m.selectChiTietViTri,j=v.m.selectorDanhSachProvinces,_=(0,y.v9)(Z,x().isEqual),I=(0,g.useMemo)((function(){return x().isEmpty(_)}),[_]),S=(0,g.useMemo)((function(){return(0,i.Z)((0,i.Z)({},n),x().omit(_,["__v","deleteAt","image"]))}),[_,n]),P=(0,g.useRef)(S),L=(0,y.v9)(j,x().isEqual),H=function(){var e=(0,t.Z)(o().mark((function _callee(e){return o().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N("province",e);case 2:case"end":return n.stop()}}),_callee)})));return function handleChangeSelect(n){return e.apply(this,arguments)}}(),k=(0,p.TA)({enableReinitialize:!0,initialValues:S,validationSchema:s,onSubmit:function handleSubmitEditLocation(n){var r=x().omit(n,["_id"]),t=n._id;x().isEqual(n,P.current)?(0,u.K2)(a):e(F({idLocation:t,noiDungCapNhat:r}))}}),N=k.setFieldValue,E=k.handleSubmit,R=k.handleChange,w=k.errors,D=k.values;return I?(0,V.jsx)(T.l_,{to:"/admin/locations"}):(0,V.jsx)(l,{children:(0,V.jsxs)(c,{onFinish:E,size:"small",children:[r(n,L,w,D,R,(function handleInputNumber(e){return function(){var n=(0,t.Z)(o().mark((function _callee2(n){return o().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,N(e,n);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),_callee2)})));return function(e){return n.apply(this,arguments)}}()}),H),(0,V.jsx)(d,{children:(0,V.jsx)(C,{type:"submit",children:"EDIT LOCATION"})})]})})}},29220:function(e,n,r){r.d(n,{m:function(){return d}});var t=r(93433),i=r(35323),a=r(53678),o=r(16031),l=r.n(o),u=function selectDanhSachViTri(e){return e.QuanLyViTriReducer.danhSachViTri},c=function selectorDanhSachProvinces(e){return e.QuanLyViTriReducer.danhSachProvince},d={selectDanhSachViTri:u,selectDanhSachViTriByProvince:(0,i.P1)(u,(function selectorProvinces(e){return e.QuanLyViTriReducer.provinces}),(function(e,n){return null!==n&&void 0!==n&&n.length?l().uniq(n.map((function(n){return e.filter((function(e){var r,t=null!==(r=(0,a.Cp)((0,a.WF)(null===e||void 0===e?void 0:e.province)))&&void 0!==r?r:"",i=(0,a.Cp)((0,a.WF)(n));return i.length>t.length?i.includes(t):t.includes(i)}))})).flat()).filter((function(e){return e.province})):[]})),selectDanhSachProvinceFilter:(0,i.P1)(u,c,(function(e,n){if(null===e||void 0===e||!e.length||null===n||void 0===n||!n.length)return[];var r=n.map((function(e){return null===e||void 0===e?void 0:e.province_name})),i=e.map((function(e){return null===e||void 0===e?void 0:e.province}));return[].concat((0,t.Z)(r),(0,t.Z)(i)).filter((function(e){return e})).filter((function(e){return e.length>=5})).map((function(e){return e})).filter((function(e,n,r){return r.indexOf(e)===n})).sort((function(e,n){return(0,a.EI)(e,n,"string")}))})),selectChiTietViTri:function selectChiTietViTri(e){return e.QuanLyViTriReducer.chiTietViTri},selectorCityName:function selectorCityName(e){return e.QuanLyViTriReducer.cityName},selectDanhViTriFilter:(0,i.P1)(u,(function selectSearchValue(e){return e.SearchReducer.searchValue}),(function(e,n){if(!n.length)return e;var r=n.trim().toLowerCase(),i=(0,t.Z)(e);return(0,a.z9)(r,i,"dsPhongChoThue")})),selectorDanhSachProvinces:c}},16970:function(e,n,r){r.d(n,{C:function(){return x}});var t={name:"",country:"",province:"",valueate:0},i=r(1413),a=(0,i.Z)((0,i.Z)({},t),{},{_id:""}),o=r(49020),l=r(46417),u=o.Z.FormControl,c=o.Z.FormGroup,d=o.Z.FormItem,s=o.Z.FormInput,h=o.Z.InputNumber,v=o.Z.FormSelect,m=o.Z.FormCheckOutlined,f=o.Z.FormOption,p=r(59938),C=r(53678),x={addLocationField:t,editLocationField:a,renderFormLocationField:function renderFormLocationField(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return Object.keys(e).map((function(e,p){switch(e){case"name":return(0,l.jsx)(u,{children:(0,l.jsx)(c,{children:(0,l.jsx)(d,{validateStatus:r?"error":"success",help:r?r.name:"",children:(0,l.jsx)(s,{type:"text",placeholder:" ",name:"name",onChange:i,childrenProps:"Your Name ",value:t.name})})})},"".concat(e,"-").concat(p));case"country":return(0,l.jsx)(u,{children:(0,l.jsx)(c,{children:(0,l.jsx)(d,{validateStatus:r?"error":"success",help:r?r.country:"",children:(0,l.jsx)(s,{type:"text",placeholder:" ",name:"country",onChange:i,childrenProps:"Your Country ",value:t.country})})})},"".concat(e,"-").concat(p));case"province":return(0,l.jsx)(u,{children:(0,l.jsx)(c,{children:(0,l.jsx)(d,{label:"Province",children:(0,l.jsx)(v,{bordered:!1,onChange:o,defaultValue:t.province,menuItemSelectedIcon:(0,l.jsx)(m,{}),dropdownClassName:"select-province",children:n.map((function(e,n){return(0,l.jsx)(f,{value:e.province_name,children:e.province_name},"ProvinceSelect-".concat(n))}))})})})},"".concat(e,"-").concat(p));case"valueate":return(0,l.jsx)(u,{children:(0,l.jsx)(c,{children:(0,l.jsx)(d,{label:"Valueate",children:(0,l.jsx)(h,{onChange:a("valueate"),value:t.valueate?t.valueate:null,defaultValue:1,min:1,max:10})})})},"".concat(e,"-").concat(p));default:return null}}))},tableColumnsLocationField:[{title:"M\xe3 V\u1ecb Tr\xed",dataIndex:"stt",key:"stt",render:function render(e,n,r){return r+1},onCell:function onCell(e){return{"data-label":"M\xe3 V\u1ecb Tr\xed"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"M\xe3 V\u1ecb Tr\xed"}}},{title:"T\xean V\u1ecb Tr\xed",dataIndex:"name",key:"name",sorter:function sorter(e,n){return(0,C.EI)(null===e||void 0===e?void 0:e.name,null===n||void 0===n?void 0:n.name,"nameLocation")},onCell:function onCell(e){return{"data-label":"T\xean ph\xf2ng"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"T\xean ph\xf2ng"}}},{title:"H\xecnh \u1ea2nh",dataIndex:"image",key:"image",onCell:function onCell(e){return{"data-label":"H\xecnh \u1ea2nh"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"H\xecnh \u1ea2nh"}},filters:[{text:"C\xf3 h\xecnh",value:"C\xf3 h\xecnh"},{text:"Ch\u01b0a c\xf3 h\xecnh",value:"Ch\u01b0a c\xf3 h\xecnh"}],onFilter:function onFilter(e,n){return"C\xf3 h\xecnh"===e?n.image:!n.image},render:function render(e,n,r){return(0,l.jsx)(p.Z,{idRoom:n._id,imageProp:n.image},n._id)}},{title:"Country",dataIndex:"country",key:"country",sorter:function sorter(e,n){return(0,C.EI)(null===e||void 0===e?void 0:e.country,null===n||void 0===n?void 0:n.country,"country")},onCell:function onCell(e){return{"data-label":"Country"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"Country"}}},{title:"Province",dataIndex:"province",key:"province",onCell:function onCell(e){return{"data-label":"Province"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"Province"}},sorter:function sorter(e,n){return(0,C.EI)(null===e||void 0===e?void 0:e.province,null===n||void 0===n?void 0:n.province,"province")}},{title:"Valueate",dataIndex:"valueate",key:"valueate",onCell:function onCell(e){return{"data-label":"Valueate"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"Valueate"}},sorter:function sorter(e,n){return e.valueate-n.valueate}},{title:"Thao t\xe1c",dataIndex:"action",key:"action",onCell:function onCell(e){return{"data-label":"Thao t\xe1c"}},onHeaderCell:function onHeaderCell(e){return{"data-label":"Thao t\xe1c"}}}]}}}]);