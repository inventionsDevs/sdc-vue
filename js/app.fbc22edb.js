(function(o){function e(e){for(var t,r,s=e[0],c=e[1],d=e[2],u=0,m=[];u<s.length;u++)r=s[u],n[r]&&m.push(n[r][0]),n[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(o[t]=c[t]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var o,e=0;e<a.length;e++){for(var i=a[e],t=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(t=!1)}t&&(a.splice(e--,1),o=r(r.s=i[0]))}return o}var t={},n={app:0},a=[];function r(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return o[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=o,r.c=t,r.d=function(o,e,i){r.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:i})},r.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"===typeof o&&o&&o.__esModule)return o;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)r.d(i,t,function(e){return o[e]}.bind(null,t));return i},r.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(o,e,i){o.exports=i("56d7")},"034f":function(o,e,i){"use strict";var t=i("1356"),n=i.n(t);n.a},1356:function(o,e,i){},"56d7":function(o,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var t=i("2b0e"),n=i("bb71");i("da64");t["a"].use(n["a"],{iconfont:"md"});var a=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("v-app",{staticStyle:{background:"none"}},[i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"pa-4"},[i("v-card-title",[i("v-icon",{attrs:{large:"",left:""}},[o._v("payment")]),i("span",{staticClass:"title font-weight-light"},[o._v("Simulador De Crédito")])],1),i("v-select",{attrs:{items:o.tiposDeIngreso,label:"Tipo de Ingreso",outline:"",color:"#13D8F2"},model:{value:o.tipoDeIngresoSeleccionado,callback:function(e){o.tipoDeIngresoSeleccionado=e},expression:"tipoDeIngresoSeleccionado"}}),i("v-text-field",{attrs:{label:"Tu Ingreso Mensual",outline:"",color:"#13D8F2"},model:{value:o.ingresoMensual,callback:function(e){o.ingresoMensual=e},expression:"ingresoMensual"}}),i("v-text-field",{attrs:{label:"Valor Del Inmueble",outline:"",color:"#13D8F2"},on:{input:function(e){o.modificarMontoDeCredito=!1,o.montoDeCreditoPorModificacion=void 0}},model:{value:o.valorDelInmueble,callback:function(e){o.valorDelInmueble=e},expression:"valorDelInmueble"}}),i("div",{on:{mouseover:function(e){o.infoMontoDeCredito=!0},mouseleave:function(e){o.infoMontoDeCredito=!1}}},[o.modificarMontoDeCredito?i("div",[i("v-text-field",{class:{"background-focus":o.infoMontoDeCredito},attrs:{label:"Monto de Crédito",outline:"","append-icon":"help",color:"#13D8F2"},on:{blur:o.validarModificacionDeMontoCredito},model:{value:o.montoDeCreditoPorModificacion,callback:function(e){o.montoDeCreditoPorModificacion=e},expression:"montoDeCreditoPorModificacion"}})],1):i("div",[i("v-text-field",{class:{"background-focus":o.infoMontoDeCredito},attrs:{label:"Monto de Crédito",outline:"","append-icon":"help",color:"#13D8F2"},on:{focus:function(e){o.modificarMontoDeCredito=!0}},model:{value:o.montoDeCreditoMaximoFicitcio,callback:function(e){o.montoDeCreditoMaximoFicitcio=e},expression:"montoDeCreditoMaximoFicitcio"}})],1),i("p",{directives:[{name:"show",rawName:"v-show",value:o.infoMontoDeCredito,expression:"infoMontoDeCredito"}],staticStyle:{color:"#13D8F2"}},[o._v("Si necesitas un credito menor, teclealo aquí")])]),i("v-tabs",{attrs:{centered:"",grow:"","slider-color":"#13D8F2"},model:{value:o.tipoDePagoSeleccionado,callback:function(e){o.tipoDePagoSeleccionado=e},expression:"tipoDePagoSeleccionado"}},[i("v-tab",{attrs:{ripple:""}},[o._v("Pagos Fijos")]),i("v-tab",{attrs:{ripple:""}},[o._v("Pagos Crecientes")])],1),i("br"),i("br"),i("br"),i("v-bottom-nav",{attrs:{active:o.plazoSeleccionado,value:!0,absolute:""},on:{"update:active":function(e){o.plazoSeleccionado=e}}},[i("v-btn",{attrs:{color:"#13D8F2",flat:"",value:"2"}},[i("span",[o._v("Años")]),i("span",{staticClass:"number-years"},[o._v("20")])]),i("v-btn",{attrs:{color:"#13D8F2",flat:"",value:"1"}},[i("span",[o._v("Años")]),i("span",{staticClass:"number-years"},[o._v("15")])]),i("v-btn",{attrs:{color:"#13D8F2",flat:"",value:"0"}},[i("span",[o._v("Años")]),i("span",{staticClass:"number-years"},[o._v("10")])])],1)],1)],1),i("v-flex",{staticClass:"bancos-box",attrs:{xs12:""}},o._l(o.bancosPro,function(e,t){return i("div",{key:t},[e.valores.disponibilidad?i("v-card",{staticClass:"pa-4 mb-2"},[i("v-card-text",{staticClass:"px-0 mb-2"},[i("img",{staticStyle:{height:"30px"},attrs:{src:o.imagenesDeBancos[e.nombre]}}),i("div",{staticStyle:{"text-align":"left"}},[i("div",[o._v("Aforo: "+o._s((100*e.valores.porcentajeDeCredito).toFixed(2))+" %")]),i("div",[o._v("Credito: $ "+o._s(e.valores.montoDeCredito.toFixed(2)))]),i("br"),i("div",[o._v("Mensualidad: $ "+o._s(e.valores.mensualidad.toFixed(2)))]),i("div",[o._v("Ingresos: $ "+o._s(e.valores.ingresos.toFixed(2)))]),i("div",[o._v("Tasa: "+o._s((100*e.valores.tasa).toFixed(2))+" %")]),i("div",{directives:[{name:"show",rawName:"v-show",value:o.creditoPreautorizado,expression:"creditoPreautorizado"}]},[o._v("Crédito Preautorizado: $ "+o._s(o.creditoPreautorizado.toFixed(2)))])])])],1):o._e()],1)}),0)],1)],1),i("hsbc",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}}),i("santander",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}}),i("banorte",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}}),i("scotiabank",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}}),i("banamex",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}}),i("banregio",{tag:"div",attrs:{"tipo-de-ingreso":o.tipoDeIngresoSeleccionado,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,"valor-del-inmueble":o.valorDelInmueble,plazo:o.plazoSeleccionado,"tipo-de-pago":o.tipoDePagoSeleccionado,"producto-seleccionado":o.productoSeleccionado}})],1)},r=[],s=i("59ad"),c=i.n(s),d=(i("55dd"),i("cebc")),l=i("2f62"),u=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"banamex",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"factor-seguro-de-danos":o.factorSeguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},m=[],p=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[o._v("\n  Máximo de crédito: "+o._s(100*o.porcentajeDeCredito)+" %\n  "),i("br"),o._v("\n  Credito: $ "+o._s(o.montoDeCredito)+"\n  "),i("br"),i("br"),o._v("\n  Mensualidad: $ "+o._s(o.mensualidad.toFixed())+"\n  "),i("br"),o._v("\n  Tasa: "+o._s(100*o.tasa)+" %\n  "),i("br")])},D=[],f={name:"calculos",props:["tasa","valorDelInmueble","factor","factorSeguroDeVida","factorSeguroDeDanos","seguroDeDanos","seguroDeDesempleo","comisionAdministracion","iva","banco","montoDeCredito","disponibilidad","enganche","porcentajeDeCredito","tipoDeIngreso"],methods:Object(d["a"])({},Object(l["b"])(["asignarBanco"])),computed:{mensualidad:function(){var o,e=this.montoDeCredito;if("santander"==this.banco)if(this.montoDeCredito<.78*this.valorDelInmueble){var i=.03154*this.montoDeCredito;e=this.montoDeCredito+i,o=0}else o=e*this.factorSeguroDeVida;else o=e*this.factorSeguroDeVida;var t=e*this.tasa/12,n=t*this.factor,a=t+n,r=this.valorDelInmueble*this.factorSeguroDeDanos,s=0;"banregio"==this.banco&&(s=this.seguroDeDesempleo,r=this.seguroDeDanos);var c,d=a+o+r+this.comisionAdministracion+this.iva+s;return c="Asalariado"==this.tipoDeIngreso?2*d:2.78*d,this.asignarBanco({nombre:this.banco,valores:{porcentajeDeCredito:this.porcentajeDeCredito,montoDeCredito:this.montoDeCredito,mensualidad:d,ingresos:c,tasa:this.tasa,disponibilidad:this.disponibilidad,enganche:this.enganche}}),d}}},g=f,h=i("2877"),v=Object(h["a"])(g,p,D,!1,null,null,null),b=v.exports,C={name:"banamex",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:5e-4,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.85,plazosFijos:[!0,!0,!0],plazosCrecientes:[!1,!1,!0],factoresFijos:[.620310784,.310673497,.171398894],factoresCrecientes:[0,0,.032331604],tasa:[.0965,.0965,.0965],factorSeguroDeDanos:24e-5,comisionAdministracion:0}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},tasa:function(){return this.productoAsignado.tasa[this.plazo]},factor:function(){var o;return 0==this.tipoDePago&&(o="factoresFijos"),1==this.tipoDePago&&(o="factoresCrecientes"),this.productoAsignado[o][this.plazo]},factorSeguroDeDanos:function(){return this.productoAsignado.factorSeguroDeDanos},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},M=C,I=Object(h["a"])(M,u,m,!1,null,null,null),P=I.exports,x=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"banorte",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"factor-seguro-de-danos":o.factorSeguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},S=[],j={name:"banorte",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:7438e-7,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.9,plazosFijos:[!0,!0,!0],plazosCrecientes:[!1,!0,!0],factoresFijos:[.595328435,.293691943,.160236712],factoresCrecientes:[0,.112631578,.001052631],tasa:[.0985,.0985,.0985],factorSeguroDeDanos:326382e-9,comisionAdministracion:349}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},tasa:function(){return this.productoAsignado.tasa[this.plazo]},factor:function(){var o;return 0==this.tipoDePago&&(o="factoresFijos"),1==this.tipoDePago&&(o="factoresCrecientes"),this.productoAsignado[o][this.plazo]},factorSeguroDeDanos:function(){return this.productoAsignado.factorSeguroDeDanos},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},A=j,z=Object(h["a"])(A,x,S,!1,null,null,null),N=z.exports,_=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"banregio",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"seguro-de-danos":o.seguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"seguro-de-desempleo":o.seguroDeDesempleo,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},w=[],F={name:"banregio",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:53e-5,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.9,plazosFijos:[!0,!0,!0],plazosCrecientes:[!1,!1,!0],seguroAsalariado:3e-4,datosVariables:{asalariado:{fijos:{mayor:{factor:[.474339878,.199229681,.088290777],tasa:[.11,.115,.12]},menor:{factor:[.531857836,.228884299,.1043032],tasa:[.1025,.1075,.1125]}},crecientes:{mayor:{factor:[0,0,.018818555],tasa:[0,0,.12]},menor:{factor:[0,0,.0331296],tasa:[0,0,.1125]}}},otros:{fijos:{mayor:{factor:[.484450424,.206189449,.092741888],tasa:[.11,.115,.12]},menor:{factor:[.543088698,.236784012,.109492114],tasa:[1025,.1075,.1125]}},crecientes:{mayor:{factor:[0,0,.018818555],tasa:[0,0,.12]},menor:{factor:[0,0,.0331296],tasa:[0,0,.1125]}}}},comisionAdministracion:250}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},seguroDeDesempleo:function(){return"Asalariado"==this.tipoDeIngreso?this.montoDeCredito*this.productoAsignado.seguroAsalariado:0},tasa:function(){var o,e,i;return"Asalariado"==this.tipoDeIngreso&&(e="asalariado"),"Asalariado"!=this.tipoDeIngreso&&(e="otros"),0==this.tipoDePago&&(o="fijos"),1==this.tipoDePago&&(o="crecientes"),this.montoDeCredito>.7*this.valorNumericoDelInmueble&&(i="mayor"),this.montoDeCredito<=.7*this.valorNumericoDelInmueble&&(i="menor"),this.productoAsignado.datosVariables[e][o][i].tasa[this.plazo]},factor:function(){var o,e,i;return"Asalariado"==this.tipoDeIngreso&&(e="asalariado"),"Asalariado"!=this.tipoDeIngreso&&(e="otros"),0==this.tipoDePago&&(o="fijos"),1==this.tipoDePago&&(o="crecientes"),this.montoDeCredito>.7*this.valorNumericoDelInmueble&&(i="mayor"),this.montoDeCredito<=.7*this.valorNumericoDelInmueble&&(i="menor"),this.productoAsignado.datosVariables[e][o][i].factor[this.plazo]},seguroDeDanos:function(){var o=.812*this.valorNumericoDelInmueble;return 74364e-9*o},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},y=F,V=Object(h["a"])(y,_,w,!1,null,null,null),k=V.exports,O=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"hsbc",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"factor-seguro-de-danos":o.factorSeguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},$=[],B={name:"hsbc",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:33e-5,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.9,plazosFijos:[!0,!0,!0],plazosCrecientes:[!0,!0,!0],factoresFijos:[.595124679,.281339901,.152683087],factoresCrecientes:[.511515151,.188177339,.049852216],tasa:[.099,.1015,.1015],factorSeguroDeDanos:2965e-7,comisionAdministracion:0}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},tasa:function(){return this.productoAsignado.tasa[this.plazo]},factor:function(){var o;return 0==this.tipoDePago&&(o="factoresFijos"),1==this.tipoDePago&&(o="factoresCrecientes"),this.productoAsignado[o][this.plazo]},factorSeguroDeDanos:function(){return this.productoAsignado.factorSeguroDeDanos},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},T=B,E=Object(h["a"])(T,O,$,!1,null,null,null),H=E.exports,J=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"santander",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"factor-seguro-de-danos":o.factorSeguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},L=[],q={name:"santander",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:6e-4,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.9,plazosFijos:[!0,!0,!0],plazosCrecientes:[!1,!0,!0],factoresFijos:[.605604899,.301484496,.149240971],factoresCrecientes:[0,.13871304,.07824393],tasa:[.0979,.0979,.1025],factorSeguroDeDanos:259e-6,comisionAdministracion:290}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},tasa:function(){return this.productoAsignado.tasa[this.plazo]},factor:function(){var o;return 0==this.tipoDePago&&(o="factoresFijos"),1==this.tipoDePago&&(o="factoresCrecientes"),this.productoAsignado[o][this.plazo]},factorSeguroDeDanos:function(){return this.productoAsignado.factorSeguroDeDanos},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},G=q,U=Object(h["a"])(G,J,L,!1,null,null,null),K=U.exports,Q=function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:o.disponibilidad,expression:"disponibilidad"}],staticStyle:{display:"inline-block"}},[i("calculos",{attrs:{banco:"scotiabank",tasa:o.tasa,"valor-del-inmueble":o.valorDelInmueble,factor:o.factor,"factor-seguro-de-vida":o.factorSeguroDeVida,"factor-seguro-de-danos":o.factorSeguroDeDanos,"comision-administracion":o.comisionAdministracion,iva:o.iva,"monto-de-credito":o.montoDeCredito,"monto-de-credito-por-modificacion":o.montoDeCreditoPorModificacion,disponibilidad:o.disponibilidad,enganche:o.enganche,"porcentaje-de-credito":o.porcentajeDeCreditoAsignado,"tipo-de-ingreso":o.tipoDeIngreso}})],1)},R=[],W={name:"scotiabank",components:{Calculos:b},props:["plazo","tipoDePago","valorDelInmueble","productoSeleccionado","montoDeCreditoPorModificacion","tipoDeIngreso"],data:function(){return{factorSeguroDeVida:5e-4,iva:0,productos:[{nombre:"Comprar mi Casa",porcentajeMaximoDeCredito:.9,plazosFijos:[!0,!0,!0],plazosCrecientes:[!0,!0,!0],factoresFijos:[.4973450577,.231304409,.1234482],factoresCrecientes:[.428571428,.148571428,.03285714],tasaFijos:[.113,.115,.116],tasaCrecientes:[.105,.105,.105],factorSeguroDeDanos:335111e-9,comisionAdministracion:0}]}},computed:{disponibilidad:function(){var o,e=!1,i=!0;return 0==this.tipoDePago&&(o="plazosFijos"),1==this.tipoDePago&&(o="plazosCrecientes"),this.productoAsignado[o][this.plazo]&&(e=!0),this.montoDeCreditoPorModificacion>this.maximoDeCredito&&(i=!1),e&&this.valorNumericoDelInmueble&&i},porcentajeDeCreditoAsignado:function(){return console.log(this.montoDeCreditoPorModificacion),isNaN(this.montoDeCreditoPorModificacion)?this.porcentajeMaximoDeCredito:100*this.montoDeCreditoPorModificacion/this.valorNumericoDelInmueble/100},productoAsignado:function(){var o=this;return this.productos.filter(function(e){return e.nombre==o.productoSeleccionado})[0]},tasa:function(){var o;return 0==this.tipoDePago&&(o="tasaFijos"),1==this.tipoDePago&&(o="tasaCrecientes"),this.productoAsignado[o][this.plazo]},factor:function(){var o;return 0==this.tipoDePago&&(o="factoresFijos"),1==this.tipoDePago&&(o="factoresCrecientes"),this.productoAsignado[o][this.plazo]},factorSeguroDeDanos:function(){return this.productoAsignado.factorSeguroDeDanos},comisionAdministracion:function(){return this.productoAsignado.comisionAdministracion},valorNumericoDelInmueble:function(){return c()(this.valorDelInmueble)},porcentajeMaximoDeCredito:function(){return this.productoAsignado.porcentajeMaximoDeCredito},maximoDeCredito:function(){return this.valorNumericoDelInmueble*this.productoAsignado.porcentajeMaximoDeCredito},montoDeCredito:function(){return this.valorNumericoDelInmueble*this.porcentajeDeCreditoAsignado},enganche:function(){return this.valorNumericoDelInmueble-this.montoDeCredito}}},X=W,Y=Object(h["a"])(X,Q,R,!1,null,null,null),Z=Y.exports,oo={name:"App",components:{Banamex:P,Banorte:N,Banregio:k,Hsbc:H,Santander:K,Scotiabank:Z},data:function(){return{imagenesDeBancos:{banamex:"https://www.banamex.com/assets/img/citibanamex-logo.png",banorte:"https://upload.wikimedia.org/wikipedia/commons/1/13/Banorte.png",banregio:"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Banregio.png/440px-Banregio.png",hsbc:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png",santander:"https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0024/8948/entrevista-banco-santander.png",scotiabank:"https://www.desafiodeguerreros.com.mx/wp-content/uploads/2015/12/Scotiabank-Logo-PNG-03791-1.png"},tiposDeIngreso:["Asalariado","Profesionista Independiente","Independiente","Socio de Empresa","Negocio Propio"],productoSeleccionado:"Comprar mi Casa",tipoDeIngresoSeleccionado:"",valorDelInmueble:"",valorDelCredito:0,plazoSeleccionado:"2",tipoDePagoSeleccionado:0,montoDeCreditoPorModificacion:void 0,modificarMontoDeCredito:!1,ingresoMensual:"",infoMontoDeCredito:!1}},methods:{validarModificacionDeMontoCredito:function(){void 0!=this.montoDeCreditoPorModificacion&&""!=this.montoDeCreditoPorModificacion&&0!=this.montoDeCreditoPorModificacion||(this.modificarMontoDeCredito=!1,this.montoDeCreditoPorModificacion=void 0)}},computed:Object(d["a"])({bancosPro:function(){return this.bancos.sort(function(o,e){return c()(o.valores.mensualidad)-c()(e.valores.mensualidad)})},creditoPreautorizado:function(){return"Asalariado"==this.tipoDeIngresoSeleccionado?50*c()(this.ingresoMensual):36*c()(this.ingresoMensual)},montoDeCreditoMaximoFicitcio:function(){return.9*this.valorDelInmueble}},Object(l["c"])(["bancos"])),mounted:function(){var o=this;setInterval(function(){o.$forceUpdate()},10)}},eo=oo,io=(i("034f"),i("6544")),to=i.n(io),no=i("7496"),ao=i("887a"),ro=i("8336"),so=i("b0af"),co=i("99d9"),lo=i("12b2"),uo=i("a523"),mo=i("0e8f"),po=i("132d"),Do=i("a722"),fo=i("b56d"),go=i("71a3"),ho=i("fe57"),vo=i("2677"),bo=Object(h["a"])(eo,a,r,!1,null,null,null),Co=bo.exports;to()(bo,{VApp:no["a"],VBottomNav:ao["a"],VBtn:ro["a"],VCard:so["a"],VCardText:co["a"],VCardTitle:lo["a"],VContainer:uo["a"],VFlex:mo["a"],VIcon:po["a"],VLayout:Do["a"],VSelect:fo["a"],VTab:go["a"],VTabs:ho["a"],VTextField:vo["a"]});i("ac6a");t["a"].use(l["a"]);var Mo=new l["a"].Store({state:{bancos:[]},mutations:{asignarBanco:function(o,e){var i=!1;o.bancos.forEach(function(t,n){t.nombre==e.nombre&&(i=!0,o.bancos[n]=e)}),i||o.bancos.push(e)}}});t["a"].config.productionTip=!1,new t["a"]({store:Mo,render:function(o){return o(Co)}}).$mount("#app")}});
//# sourceMappingURL=app.fbc22edb.js.map