"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9956,1438,9211,8771,5983,9075],{5977:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return b}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},m=s("PageDescription"),c=s("AnchorLinks"),d=s("AnchorLink"),u={_frontmatter:o},p=l.Z;function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"These labs will cover both the ACE Toolkit and ACE Designer to build integrations. We will be creating APIs with Designer and then also import them into APIC.   Will also cover labs on the Asset Repository and Operations Dashboard for tracing. ")),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(d,{mdxType:"AnchorLink"},"Setup"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Lab Abstracts")),(0,r.kt)("h2",null,"Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Complete the Setup instructions:  ",(0,r.kt)("a",{parentName:"strong",href:"/techjam/aspera/Updated-Pre-Lab"},"Setup")," before starting Labs")," "),(0,r.kt)("h2",null,"Lab Abstracts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subject"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./2023_lab1"},"Lab 1")),(0,r.kt)("td",{parentName:"tr",align:null},"IIB v10 Migration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./2023_lab2"},"Lab 2")),(0,r.kt)("td",{parentName:"tr",align:null},"ACE Integration Server Autoscaling on CP4I")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./2023_labb"},"Lab 3")),(0,r.kt)("td",{parentName:"tr",align:null},"Optimized Integration Servers")))),(0,r.kt)("p",null,"| "))}b.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),s=a(3321),m=a(5900),c=a.n(m),d=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,m=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(4275),b=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,m=new RegExp(o+"/?(#.*)?$"),d=r.replace(m,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),h=g,k=a(2881),E=a(6958),N=a(36),f=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,c=t.frontmatter,b=void 0===c?{}:c,g=t.relativePagePath,N=t.titleType,v=b.tabs,y=b.title,P=b.theme,x=b.description,w=b.keywords,T=b.date,L=(0,E.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,A=C?r.pathname.replace(C,""):r.pathname,D=v?A.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",S=P||L;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:S,pageTitle:y,pageDescription:x,pageKeywords:w,titleType:N},n.createElement(d,{title:m?n.createElement(m,null):y,label:"label",tabs:v,theme:S}),v&&n.createElement(h,{title:y,slug:A,tabs:v,currentTab:D}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(f,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:A,tabs:v,currentTab:D}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-ace-index-mdx-d8382758b1e121f0fae1.js.map