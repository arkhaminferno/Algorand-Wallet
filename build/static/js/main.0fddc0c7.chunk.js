(this.webpackJsonpalgorandwallet=this.webpackJsonpalgorandwallet||[]).push([[0],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(61),l=a(20),o=a(58);t.a=function(){return r.a.createElement("div",{className:"center"},r.a.createElement(c.a,{color:"dark",dark:!0},r.a.createElement(l.a,null,r.a.createElement(o.a,{id:"footer-name"},r.a.createElement("div",null,r.a.createElement("p",null,"Developed by Kumar Gaurav")),r.a.createElement("div",{className:"footer-align"},r.a.createElement("div",null,r.a.createElement("a",{href:"www.linkedin.com/in/arkhaminferno",id:"footerHead",target:"_blank"},"LinkedIn")),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:gauravpsp@gmail.com",id:"footerHead"},"Email")),r.a.createElement("div",null,r.a.createElement("a",{href:"www.github.com/arkhaminferno",id:"footerHead",target:"_blank"},"Github")))))))}},103:function(e,t,a){e.exports=a(204)},108:function(e,t,a){},129:function(e,t,a){},132:function(e,t){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=(a(108),a(82));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(203);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){"use strict";(function(e){var n=a(101),r=a(4),c=a.n(r),l=a(52),o=a(11),i=a(0),s=a.n(i),u=a(53),m=a.n(u),d=(a(129),a(28)),f=a.n(d),E=a(83),p=a(84),g=a(85),v=a(86),h=a(87),b=a(20),k=a(88),w=a(89),j=a(92),y=a(93),O=a(94),x=a(95),C=a(99),N=a(100);a(202);t.a=function(){var t=Object(i.useState)({}),a=Object(o.a)(t,2),r=a[0],u=a[1],d=Object(i.useState)([]),S=Object(o.a)(d,2),A=S[0],I=S[1],H=Object(i.useState)({}),B=Object(o.a)(H,2),D=B[0],T=B[1],z=Object(i.useState)(!1),M=Object(o.a)(z,2),W=M[0],K=M[1],R=Object(i.useState)(""),_=Object(o.a)(R,2),L=_[0],q=_[1],G=Object(i.useState)(!1),F=Object(o.a)(G,2),J=F[0],P=F[1],U=Object(i.useState)(""),Y=Object(o.a)(U,2),V=Y[0],$=Y[1],Q=Object(i.useState)(0),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=Object(i.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],ce=Object(i.useState)(0),le=Object(o.a)(ce,2),oe=le[0],ie=le[1],se=Object(i.useState)(""),ue=Object(o.a)(se,2),me=ue[0],de=ue[1],fe=Object(i.useState)(""),Ee=Object(o.a)(fe,2),pe=Ee[0],ge=Ee[1],ve=Object(i.useState)(!1),he=Object(o.a)(ve,2),be=(he[0],he[1]),ke=Object(i.useState)(0),we=Object(o.a)(ke,2),je=(we[0],we[1]),ye=Object(i.useState)(""),Oe=Object(o.a)(ye,2);Oe[0],Oe[1],Object(i.useEffect)((function(){xe();var e=setInterval((function(){je((function(e){return e+1})),Ce(r.addr)}),1e3);return function(){return clearInterval(e)}}),[]);var xe=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("https://api.testnet.algoexplorer.io/v2/transactions/params").then((function(e){T(e.data),K(!0)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(e){e&&m.a.get("https://api.testnet.algoexplorer.io/v2/accounts/".concat(e)).then((function(e){ie(e.data.amount)})).catch((function(e){console.log(e)}))},Ne=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,l,o,i,s,u,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"tomato riot sting festival atom hire outer census siege clog excuse bag electric wasp taxi wealth key pave party child craft damage group absent diamond",f.a.mnemonicToSecretKey("tomato riot sting festival atom hire outer census siege clog excuse bag electric wasp taxi wealth key pave party child craft damage group absent diamond"),t=r.addr,a=r.sk,n=V,l=me,o=Number.parseInt(Z),i=D["last-round"]+parseInt(1e3),s={from:t,to:n,fee:D["min-fee"],amount:o,firstRound:D["last-round"],lastRound:i,genesisID:D["genesis-id"],genesisHash:D["genesis-hash"],note:f.a.encodeObj({notedata:l})},u=f.a.signTransaction(s,a),m=u.blob,Se(m);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.a.post("https://api.testnet.algoexplorer.io/v2/transactions",e.from(a),{headers:{"Content-Type":"application/x-binary"}}).then((function(e){ge(e.data.txId),be(!0),Ae()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ae=function(){re(!0)},Ie=function(){P(!J)};return s.a.createElement("div",{className:"parent",fluid:!0},s.a.createElement(w.a,null),s.a.createElement(b.a,{className:"App"},s.a.createElement(p.a,{showtoast:ne,transactionID:pe,closetoast:function(){re(!1),be(!1)}}),s.a.createElement(b.a,{className:"parent-jumbotron",fluid:!0},s.a.createElement("div",{className:"wallet-main "},s.a.createElement("div",null,s.a.createElement(C.a,null)),s.a.createElement("div",null,s.a.createElement(E.a,{balance:oe})),s.a.createElement("div",null,s.a.createElement(h.a,{address:r.addr})),s.a.createElement("div",null,s.a.createElement(y.a,{placeholder:"To",onChange:function(e){e.preventDefault(),$(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(O.a,{placeholder:"Amount",onChange:function(e){e.preventDefault(),ee(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(g.a,{placeholder:"Note",onChange:function(e){e.preventDefault(),de(e.target.value)}})),s.a.createElement("div",null,s.a.createElement(j.a,{onClick:function(){W?Ne():alert("please check input or reload the page")}}))),s.a.createElement("br",null),s.a.createElement("div",{className:"generate-btn"},s.a.createElement(k.a,{onClick:function(){var e=f.a.generateAccount();u(e),Ce(e.addr),I([].concat(Object(n.a)(A),[e]))}})),s.a.createElement("div",{className:"accounts"},s.a.createElement(x.a,{flag:J,generatedkey:L,closeModal:function(){P(!1)}}),A.map((function(e,t){return s.a.createElement(v.a,{publickey:e.addr,privatekey:e.sk,key:t,exportsk:function(){!function(e){var t=document.createElement("a"),a=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="seedPhrase.txt",document.body.appendChild(t),t.click()}(f.a.secretKeyToMnemonic(e.sk))},mnemonic:function(){return t=e.sk,q(f.a.secretKeyToMnemonic(t)),void Ie();var t},onClick:function(){var t;u(t=e),Ce(t.addr)}})}))))),s.a.createElement(N.a,null))}}).call(this,a(15).Buffer)},83:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20);t.a=function(e){return r.a.createElement(c.a,{className:"center",id:"footerHead"},r.a.createElement("div",{className:"horizontal-align"},r.a.createElement("div",null,"Balance: \xa0",e.balance,"\xa0",r.a.createElement("img",{src:"./algosmall.png",height:"18px",width:"17px"}))))}},84:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(60);t.a=function(e){return r.a.createElement(c.a,{show:e.showtoast,onClose:e.closetoast},r.a.createElement(c.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"Success!"),r.a.createElement("small",null,"3 seconds ago")),r.a.createElement(c.a.Body,null,r.a.createElement("p",{style:{fontSize:"smaller",wordWrap:"break-word"}},"Your Transaction id is ",e.transactionID,".")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://testnet.algoexplorer.io/tx/".concat(e.transactionID),target:"_blank"}," ","Click to Verify at Algo Explorer"," ")))}},85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"text",placeholder:e.placeholder,onChange:e.onChange,required:!0}))}},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(205),l=a(35);t.a=function(e){return r.a.createElement(c.a,{hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("div",{className:"vertical-align-space"},r.a.createElement("div",null,"Address"),r.a.createElement("div",null," ",e.publickey),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(l.a,{size:"sm",id:"btn-fixed",onClick:e.onClick},"Select Account")),r.a.createElement("br",null),r.a.createElement("div",{className:"horizontal-align"},r.a.createElement("div",null,r.a.createElement(l.a,{id:"btn",size:"sm",variant:"danger",onClick:e.mnemonic},"Reveal Seed Phrase")),"\xa0",r.a.createElement("div",null,r.a.createElement(l.a,{id:"btn",size:"sm",onClick:e.exportsk},"Export wallet"))))))))}},87:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20);t.a=function(e){return r.a.createElement(c.a,{className:"center",id:"footerHead"},r.a.createElement("div",{className:"vertical-align"},r.a.createElement("p",{style:{margin:"0",padding:"0",textAlign:"center"}},"Your Wallet Address:"),r.a.createElement("p",{style:{fontSize:"small",wordWrap:"break-word"}},e.address)))}},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(35);t.a=function(e){return r.a.createElement(c.a,{id:"btn-fixed",onClick:e.onClick},"Generate Wallet Address")}},89:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(61),l=a(102);t.a=function(){return r.a.createElement(c.a,{id:"nav-style"},r.a.createElement(c.a.Brand,{href:"https://www.meld.gold/",target:"_blank"},r.a.createElement("img",{height:"30%",width:"30%",src:"./meld-logo.png"})),r.a.createElement(l.a,{className:"ml-auto"},r.a.createElement(l.a.Link,{id:"footerHead",href:"https://bank.testnet.algorand.network/",target:"_blank"},"Algorand Faucet")))}},92:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20),l=a(35);t.a=function(e){return r.a.createElement(c.a,{className:"center",fluid:!0},r.a.createElement(l.a,{onClick:e.onClick,type:"submit",id:"btn-fixed"},"send Algo"))}},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"text",placeholder:e.placeholder,onChange:e.onChange,required:!0}))}},94:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20);t.a=function(e){return r.a.createElement(c.a,{className:"center"},r.a.createElement("input",{type:"number",placeholder:e.placeholder,onChange:e.onChange,min:"0",required:!0}))}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(41),l=a(35);t.a=function(e){return r.a.createElement(c.a,{show:e.flag},r.a.createElement(c.a.Header,null,r.a.createElement(c.a.Title,null,"Mnemonic Key")),r.a.createElement(c.a.Body,null,e.generatedkey),r.a.createElement(c.a.Footer,null,r.a.createElement(l.a,{variant:"secondary",id:"btn-fixed",onClick:e.closeModal},"Close")))}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20),l=a(206);t.a=function(){return r.a.createElement(c.a,{className:"center ",fluid:!0},r.a.createElement(l.a,{id:"logo",src:"./algorandlogo.svg",className:"logobg",roundedCircle:!0}))}}},[[103,1,2]]]);
//# sourceMappingURL=main.0fddc0c7.chunk.js.map