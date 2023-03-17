"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7124,1438,9211,8771,5983,9075],{3523:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,r=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={_frontmatter:s},d=i.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"These lab exercises will walk you through installing and configuring an Aspera server and the basic features of the Aspera console")),(0,l.kt)("h2",null,"Lab Abstracts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Subject"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/techjam/aspera/lab0/"},"Lab 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Setting up and Getting access to the Environment"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/techjam/aspera/lab1/"},"Lab 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Installation and configuration"))))))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),s=a(3321),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),d=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),h=b,E=a(2881),f=a(6958),k=a(36),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,b=t.relativePagePath,k=t.titleType,v=g.tabs,x=g.title,y=g.theme,P=g.description,w=g.keywords,T=g.date,D=(0,f.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,L=C?r.pathname.replace(C,""):r.pathname,Z=v?L.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",B=y||D;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:B,pageTitle:x,pageDescription:P,pageKeywords:w,titleType:k},n.createElement(d,{title:c?n.createElement(c,null):x,label:"label",tabs:v,theme:B}),v&&n.createElement(h,{title:x,slug:L,tabs:v,currentTab:Z}),n.createElement(E.Z,{padded:!0},a,n.createElement(u,{relativePagePath:b}),n.createElement(N,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:v,currentTab:Z}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-aspera-index-mdx-e99cabe2a2438cfb925e.js.map