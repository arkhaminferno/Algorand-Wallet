(this.webpackJsonpalgorandwallet=this.webpackJsonpalgorandwallet||[]).push([[0],{102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(21),l=a(24);t.a=function(e){return r.a.createElement(c.a,{show:e.toggleflag},r.a.createElement(c.a.Header,null,r.a.createElement(c.a.Title,null,"Input Secret Key ")),r.a.createElement(c.a.Body,null,r.a.createElement("input",{className:"form-control input-lg",id:"inputlg",type:"text",placeholder:"Paste your seed phrase here",onChange:function(t){e.onChange(t.target.value)}})),r.a.createElement(c.a.Footer,null,r.a.createElement(l.a,{variant:"secondary",id:"btn-fixed",onClick:e.onClick},"Restore Account"),r.a.createElement(l.a,{variant:"secondary",id:"btn-fixed",onClick:e.closemodal},"Close")))}},103:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17),l=a(208);t.a=function(){return r.a.createElement(c.a,{className:"center ",fluid:!0},r.a.createElement(l.a,{id:"logo",src:"./algorandlogo.svg",className:"logobg",roundedCircle:!0}))}},104:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(62),l=a(17),o=a(58);t.a=function(){return r.a.createElement("div",{className:"center"},r.a.createElement(c.a,{color:"dark",dark:!0},r.a.createElement(l.a,null,r.a.createElement(o.a,{id:"footer-name"},r.a.createElement("div",null,r.a.createElement("p",null,"Developed by Kumar Gaurav")),r.a.createElement("div",{className:"footer-align"},r.a.createElement("div",null,r.a.createElement("a",{href:"www.linkedin.com/in/arkhaminferno",id:"footerHead",target:"_blank"},"LinkedIn")),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:gauravpsp@gmail.com",id:"footerHead"},"Email")),r.a.createElement("div",null,r.a.createElement("a",{href:"www.github.com/arkhaminferno",id:"footerHead",target:"_blank"},"Github")))))))}},106:function(e,t,a){e.exports=a(206)},111:function(e,t,a){},132:function(e,t,a){},135:function(e,t){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(111),a(83));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(205);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){"use strict";(function(e){var n=a(60),r=a(4),c=a.n(r),l=a(42),o=a(10),i=a(0),s=a.n(i),u=a(53),m=a.n(u),d=(a(132),a(29)),f=a.n(d),E=a(84),p=a(85),h=a(86),g=a(87),v=a(88),b=a(17),k=a(89),j=a(90),w=a(91),y=a(94),O=a(95),C=a(96),x=a(97),N=a(98),S=a(102),A=a(103),I=a(104);t.a=function(){var t=Object(i.useState)({}),a=Object(o.a)(t,2),r=a[0],u=a[1],d=Object(i.useState)([]),H=Object(o.a)(d,2),T=H[0],B=H[1],D=Object(i.useState)({}),z=Object(o.a)(D,2),M=z[0],K=z[1],R=Object(i.useState)(!1),W=Object(o.a)(R,2),P=W[0],_=W[1],L=Object(i.useState)(""),q=Object(o.a)(L,2),F=q[0],G=q[1],J=Object(i.useState)(!1),U=Object(o.a)(J,2),V=U[0],Y=U[1],$=Object(i.useState)(""),Q=Object(o.a)($,2),X=Q[0],Z=Q[1],ee=Object(i.useState)(0),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],re=Object(i.useState)(!1),ce=Object(o.a)(re,2),le=ce[0],oe=ce[1],ie=Object(i.useState)(0),se=Object(o.a)(ie,2),ue=se[0],me=se[1],de=Object(i.useState)(""),fe=Object(o.a)(de,2),Ee=fe[0],pe=fe[1],he=Object(i.useState)(""),ge=Object(o.a)(he,2),ve=ge[0],be=ge[1],ke=Object(i.useState)(!1),je=Object(o.a)(ke,2),we=je[0],ye=je[1],Oe=Object(i.useState)(!1),Ce=Object(o.a)(Oe,2),xe=(Ce[0],Ce[1]),Ne=Object(i.useState)(0),Se=Object(o.a)(Ne,2),Ae=(Se[0],Se[1],Object(i.useState)("")),Ie=Object(o.a)(Ae,2),He=Ie[0],Te=Ie[1],Be=Object(i.useState)("https://api.algoexplorer.io"),De=Object(o.a)(Be,2),ze=De[0],Me=De[1];Object(i.useEffect)((function(){Ke()}),[ze]);var Ke=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("".concat(ze,"/v2/transactions/params")).then((function(e){K(e.data),_(!0),console.log(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(e){m.a.get("".concat(ze,"/v2/accounts/").concat(e)).then((function(e){me(e.data.amount)})).catch((function(e){console.log(e)}))},We=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,l,o,i,s,u,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.addr,a=r.sk,n=X,l=Ee,o=Number.parseInt(ae),i=M["last-round"]+parseInt(1e3),s={from:t,to:n,fee:M["min-fee"],amount:o,firstRound:M["last-round"],lastRound:i,genesisID:M["genesis-id"],genesisHash:M["genesis-hash"],note:f.a.encodeObj({notedata:l})},u=f.a.signTransaction(s,a),m=u.blob,Pe(m);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.a.post("".concat(ze,"/v2/transactions"),e.from(a),{headers:{"Content-Type":"application/x-binary"}}).then((function(e){be(e.data.txId),xe(!0),Le()})).catch((function(e){alert(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_e=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(He)try{t=f.a.mnemonicToSecretKey(He),T.some((function(e){return e.addr===t.addr}))?alert("you have imported this account already!"):B([].concat(Object(n.a)(T),[t])),ye(!1)}catch(a){alert("Please Input correct mnemonic key")}else alert("Enter valid mnemonic phrase");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){oe(!0)},qe=function(){Y(!V)};return s.a.createElement("div",{className:"parent",fluid:!0},s.a.createElement(w.a,null),s.a.createElement(b.a,{className:"App"},s.a.createElement(p.a,{showtoast:le,transactionID:ve,closetoast:function(){oe(!1),xe(!1)}}),s.a.createElement(b.a,{className:"parent-jumbotron",fluid:!0},s.a.createElement("div",{className:"wallet-main "},s.a.createElement("div",null,s.a.createElement(A.a,null)),s.a.createElement("div",null,s.a.createElement(E.a,{balance:ue})),s.a.createElement("div",null,s.a.createElement(v.a,{address:r.addr})),s.a.createElement("div",null,s.a.createElement(O.a,{placeholder:"To",onChange:function(e){e.preventDefault(),Z(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(C.a,{placeholder:"Amount (in microAlgos)",onChange:function(e){e.preventDefault(),ne(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(h.a,{placeholder:"Note",onChange:function(e){e.preventDefault(),pe(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(j.a,{onChange:function(e){Me(e)}})),s.a.createElement("div",null,s.a.createElement(y.a,{onClick:function(){P?f.a.isValidAddress(X)?ae&&ae>0?Ee?We():alert("please input note"):alert("please input correct amount"):alert("please input correct address"):alert("please check input or reload the page")}}))),s.a.createElement("br",null),s.a.createElement("div",{className:"generate-btn"},s.a.createElement(k.a,{onClick:function(){var e=f.a.generateAccount();u(e),Re(e.addr),B([].concat(Object(n.a)(T),[e]))}})),s.a.createElement("br",null),s.a.createElement("div",{className:"import-btn"},s.a.createElement(x.a,{onClick:function(){ye(!0)},sendPhrase:function(){_e()}}),s.a.createElement(S.a,{toggleflag:we,onChange:function(e){!function(e){Te(e)}(e)},onClick:_e,closemodal:function(){ye(!1)}})),s.a.createElement("div",{className:"accounts"},s.a.createElement(N.a,{flag:V,generatedkey:F,closeModal:function(){Y(!1)}}),T.map((function(e,t){return s.a.createElement(g.a,{publickey:e.addr,privatekey:e.sk,key:t,exportsk:function(){!function(e){var t=document.createElement("a"),a=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="seedPhrase.txt",document.body.appendChild(t),t.click()}(f.a.secretKeyToMnemonic(e.sk))},mnemonic:function(){return t=e.sk,G(f.a.secretKeyToMnemonic(t)),void qe();var t},onClick:function(){var t;u(t=e),Re(t.addr)}})}))))),s.a.createElement(I.a,null))}}).call(this,a(15).Buffer)},84:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center",id:"footerHead"},r.a.createElement("div",{className:"horizontal-align"},r.a.createElement("div",null,"Balance: \xa0",e.balance,"\xa0",r.a.createElement("img",{src:"./algosmall.png",height:"18px",width:"17px"}))))}},85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(61);t.a=function(e){return r.a.createElement(c.a,{show:e.showtoast,onClose:e.closetoast},r.a.createElement(c.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"Success!"),r.a.createElement("small",null,"1 seconds ago")),r.a.createElement(c.a.Body,null,r.a.createElement("p",{style:{fontSize:"smaller",wordWrap:"break-word"}},"Your Transaction id is ",e.transactionID,".")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://testnet.algoexplorer.io/tx/".concat(e.transactionID),target:"_blank"}," ","Click to Verify at Algo Explorer"," ")))}},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"text",placeholder:e.placeholder,onChange:e.onChange,required:!0}))}},87:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(207),l=a(24);t.a=function(e){return r.a.createElement(c.a,{hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("div",{className:"vertical-align-space"},r.a.createElement("div",null,"Address"),r.a.createElement("div",null," ",e.publickey),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(l.a,{size:"sm",id:"btn-fixed",onClick:e.onClick},"Select Account")),r.a.createElement("br",null),r.a.createElement("div",{className:"horizontal-align"},r.a.createElement("div",null,r.a.createElement(l.a,{id:"btn",size:"sm",variant:"danger",onClick:e.mnemonic},"Reveal Seed Phrase")),"\xa0",r.a.createElement("div",null,r.a.createElement(l.a,{id:"btn",size:"sm",onClick:e.exportsk},"Export wallet"))))))))}},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center",id:"footerHead"},r.a.createElement("div",{className:"vertical-align"},r.a.createElement("p",{style:{margin:"0",padding:"0",textAlign:"center"}},"Your Wallet Address:"),r.a.createElement("p",{style:{fontSize:"small",wordWrap:"break-word"}},e.address)))}},89:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(24);t.a=function(e){return r.a.createElement(c.a,{id:"btn-fixed",onClick:e.onClick},"Generate Wallet Address")}},90:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("select",{className:"dropdown",onChange:function(t){e.onChange(t.target.value)}},r.a.createElement("option",{value:"https://api.algoexplorer.io"},"Mainnet"),r.a.createElement("option",{value:"https://api.testnet.algoexplorer.io"},"Testnet")))}},91:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(62),l=a(105);t.a=function(){return r.a.createElement(c.a,{id:"nav-style"},r.a.createElement(c.a.Brand,{href:"https://www.meld.gold/",target:"_blank"},r.a.createElement("img",{height:"30%",width:"30%",src:"./meld-logo.png"})),r.a.createElement(l.a,{className:"ml-auto"},r.a.createElement(l.a.Link,{id:"footerHead",href:"https://bank.testnet.algorand.network/",target:"_blank"},"Algorand Faucet")))}},94:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17),l=a(24);t.a=function(e){return r.a.createElement(c.a,{className:"center",fluid:!0},r.a.createElement(l.a,{onClick:e.onClick,type:"submit",id:"btn-fixed-transparent"},"send Algos"))}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"text",placeholder:e.placeholder,onChange:e.onChange,required:!0}))}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(17);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"number",placeholder:e.placeholder,onChange:e.onChange,min:"0",required:!0}))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(24);t.a=function(e){return r.a.createElement(c.a,{onClick:e.onClick,id:"btn-fixed"},"Import Existing Account")}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(21),l=a(24);t.a=function(e){return r.a.createElement(c.a,{show:e.flag},r.a.createElement(c.a.Header,null,r.a.createElement(c.a.Title,null,"Mnemonic Key")),r.a.createElement(c.a.Body,null,e.generatedkey),r.a.createElement(c.a.Footer,null,r.a.createElement(l.a,{variant:"secondary",id:"btn-fixed",onClick:e.closeModal},"Close")))}}},[[106,1,2]]]);
//# sourceMappingURL=main.2266ddf7.chunk.js.map