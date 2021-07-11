(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{118:function(e,t,s){},483:function(e,t,s){},484:function(e,t,s){},485:function(e,t,s){},486:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(103),c=s.n(i),o=s(6),r=(s(118),s.p+"static/media/avatar.e1e3cfe0.jpg"),l=s.p+"static/media/github-brands.e2f07326.svg",d=s.p+"static/media/linkedin-brands.f4041044.svg",h=s.p+"static/media/facebook-square-brands.4572f314.svg",u=s(0),j=function(){return Object(u.jsxs)("div",{className:"pane",children:[Object(u.jsx)("div",{className:"smartphone-menu-trigger"}),Object(u.jsxs)("header",{className:"avatar",children:[Object(u.jsx)("img",{src:r}),Object(u.jsx)("h2",{children:"Prabesh Maharjan"})]}),Object(u.jsxs)("ul",{className:"link",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.github.com/prabeshmrz",children:Object(u.jsx)("img",{className:"ic ic-github",src:l})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/prabesh-maharjan-04294a16b",children:Object(u.jsx)("img",{className:"ic ic-linkedin",src:d})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.facebook.com/prabeshmrz",children:Object(u.jsx)("img",{className:"ic ic-facebook",src:h})})})]}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.c,{to:"/",activeClassName:"active",className:"ic ic-home",exact:!0,children:Object(u.jsx)("span",{children:"Home"})}),Object(u.jsx)(o.c,{to:"/skill",activeClassName:"active",className:"ic ic-skill",children:Object(u.jsx)("span",{children:"Skill"})}),Object(u.jsx)(o.c,{to:"/resume",activeClassName:"active",className:"ic ic-resume",children:Object(u.jsx)("span",{children:"Resume"})}),Object(u.jsx)(o.c,{to:"/projects",activeClassName:"active",className:"ic ic-project",children:Object(u.jsx)("span",{children:"Projects"})}),Object(u.jsx)(o.c,{to:"/blog",activeClassName:"active",className:"ic ic-blog",children:Object(u.jsx)("span",{children:"Blog"})})]})]})},m=s(2),b=s(13),p=s(105),g=s.n(p),f=s(106),O=s.n(f),w=function(){return["---\\n id = 001\\n title = Manage password with pass command in\xa0Linux\\n description = Easily manage all you passwords and credentials with the simplest password manager\\n author = Prabesh Maharjan\\n tags = pass; Linux; password manager; security\\n timedate = 1625481573000\\n ---\\n \\n With rising cases for the data breaches, the importance of choosing strong password has increased. However, it could be very tiresome to come up with new, equally strong passwords for different credentials. Also, it would be equally painful, for having to manage all those password. There is no doubt about it being one of the main reasons for reusing of the same password in multiple places, by majority of users.\\n \\n ## Password Managers\\n \\n But, do we really need to manage our password manually? Aren't there password managers which takes care of all hardships mentioned above? And the answer is yes, and there are lots of them. But then again, why aren't everyone using them? Well frankly speaking, then answer could vary for different segments of people. Talking about me, I hesitated to use password managers (mostly online) because:\\n * passwords were stored in 3rd party server\\n * passwords could have been compromised if servers were breached\\n \\n ## Where does pass fit\xa0in?\\n \\n Pass is the simple password manager, following the UNIX philosophy. In between the hundreds of password managers, pass stands-out among the developer community due to its simplicity. It is basically a command line utility for password management.\\n \\n It uses GPG key to encrypt the passwords and stores in the user's machine itself, instead of some servers in clouds that we don't know about. But then, how can we sync the passwords among various devices? Well, it allows to easily track password changes, keep backup and sync them between multiple devices (even in smartphones) using git.\\n \\n ## How to use it?\\n \\n Before setting up the pass, we need to make sure we have our GPG key. In most of the linux distributions, we can setup GPG key by command:\\n \\n ~~~bash\\n gpg \u2014full-gen-key\\n ~~~\\n \\n Once we have GPG key to encrypt the password, we can initialize the password store.\\n \\n ~~~bash\\n pass init yourid@something.com\\n ~~~\\n \\n It initializes the password store in default location i.e. ~/.password-store. After that we can start inserting and generating our credentials.\\n \\n ~~~bash\\n pass insert login_url/username\\n ~~~\\n \\n It will ask for the password you want to insert. Then it will create directory named login_url inside which username.gpg file resides holding the encrypted credentials.\\n \\n We can also generate passwords of desired length by following command:\\n \\n ~~~bash\\n pass generate login_url/username <length>\\n ~~~\\n \\n To view the inserted or generated passwords, we use command:\\n \\n ~~~bash\\n pass login_url/username\\n ~~~\\n \\n It would directly show the password in the console itself. If that is not something you want then use `-c` flag. It will copy the password in clipboard. However, it will be erased from there after 45 sec., for the security purposes.\\n \\n As pass uses UNIX shell commands, managing of passwords is also very easy. We can use commands like `rm`, `mv`, `cp`, etc. to remove, move and copy our password files.\\n \\n Now for backing up the passwords, we can directly push it to our private repository.\\n \\n ~~~bash\\n pass git remote add origin git@url\\n pass git push -u origin main\\n ~~~\\n \\n Pass is not just limited to terminal. Community has come up with list of impressive GUI clients for other platforms as well. Few of the pass clients that I use in daily basis are:\\n \\n * [passmenu](https://github.com/cdown/passmenu): a dmenu script\\n * [passff](https://github.com/passff/passff): a Firefox extension\\n * [Android-Password-Store](https://github.com/android-password-store/Android-Password-Store): an android app\\n \\n You can checkout out various [commands](https://git.zx2c4.com/password-store/about/) that we can use with pass from the official site."]},x=s(107),v=function e(t,s,n,a,i,c,o){Object(x.a)(this,e),this.id=void 0,this.title=void 0,this.description=void 0,this.content=void 0,this.tags=void 0,this.aurthor=void 0,this.timedate=void 0,this.id=null!==t&&void 0!==t?t:"000",this.title=null!==s&&void 0!==s?s:"",this.description=null!==n&&void 0!==n?n:"No description",this.content=null!==a&&void 0!==a?a:"",this.tags=null!==i&&void 0!==i?i:[],this.aurthor=null!==c&&void 0!==c?c:"Prabesh Maharjan",this.timedate=null!==o&&void 0!==o?o:-1},y=function(e){for(var t=k(e),s=new v,n=t[0]+1;n<t[1];n++)s[e[n].split("=")[0].trim()]=e[n].split("=")[1].trim(),console.log(e[n].split("=")[1].trim());return s.timedate=s.timedate?parseInt(s.timedate):-1,s.tags=s.tags.length?s.tags.split("; "):[],s.content=e.slice(t[1]+2,void 0).join("\n"),console.log(e),s},k=function(e){return[e.indexOf("---"),e.indexOf(" ---",1)]},N=[],P={blogs:N,blogLoad:!1,projects:N,projectLoad:!1},I=w(),S=a.a.createContext(P),C=function(e){var t=Object(n.useState)(N),s=Object(b.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(!1),o=Object(b.a)(c,2),r=o[0],l=o[1],d=Object(n.useState)(N),h=Object(b.a)(d,1)[0],j=Object(n.useState)(!1),m=Object(b.a)(j,2),p=m[0],g=m[1];return Object(n.useEffect)((function(){var e,t;a.length||(e=I,t=function(e){console.log(e),i(e),l(!0)},Promise.all(e.map((function(e){return y(e.split("\\n"))}))).then((function(e){e.sort((function(e,t){return t.timedate-e.timedate})),t(e)})).catch((function(e){return console.log(e)}))),h.length||g(!0)}),[]),Object(u.jsx)(S.Provider,{value:{blogs:a,blogLoad:r,projects:h,projectLoad:p},children:e.children})},L=s(27),F=s(113),M=s(490),G=s(489),T=["inline","className","children"],A={code:function(e){var t=e.inline,s=e.className,n=e.children,a=Object(F.a)(e,T),i=/language-(\w+)/.exec(s||"");return!t&&i?Object(u.jsx)(M.a,Object(L.a)(Object(L.a)({style:G.a,language:i[1],PreTag:"div"},a),{},{children:String(n).replace(/\n$/,"")})):Object(u.jsx)("code",Object(L.a)(Object(L.a)({className:s},a),{},{children:n}))}},E=function(){var e,t=Object(m.e)().id,s=Object(n.useState)(new v),a=Object(b.a)(s,2),i=a[0],c=a[1],r=Object(n.useContext)(S),l=r.blogs,d=r.blogLoad;Object(n.useEffect)((function(){console.log("abc"),c(l.filter((function(e){return e.id===t}))[0])}),[l]);var h=function(e){return"/blog/tags(".concat(e,")")};return Object(u.jsx)(u.Fragment,{children:d?Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsx)("h1",{children:i.title}),Object(u.jsxs)("div",{className:"blog-header",children:[Object(u.jsxs)("span",{className:"aurthor",children:[i.aurthor,", "]}),Object(u.jsx)("span",{className:"date",children:g()(new Date(i.timedate)).format("ddd D MMM, YYYY")})]}),Object(u.jsx)(O.a,{components:A,children:i.content}),Object(u.jsx)("div",{className:"tags",children:i.tags.length?null===(e=i.tags)||void 0===e?void 0:e.map((function(e,t){return Object(u.jsx)(o.b,{to:h(e),children:Object(u.jsx)("span",{children:e},t)},t)})):""})]}):"Detail Loading"})},B=(s(483),function(e){var t,s=function(e){return"/blog/tags(".concat(e,")")};return Object(u.jsxs)(o.b,{to:"/blog(".concat(e.id,")"),className:"card",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("div",{className:"tags",children:e.tags.length?null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(u.jsx)(o.b,{to:s(e),children:Object(u.jsx)("span",{children:e},t)},t)})):""}),Object(u.jsxs)("div",{className:"card-footer",children:[Object(u.jsx)("span",{children:e.aurthor}),Object(u.jsxs)("span",{children:[e.timedate.getFullYear(),"-",e.timedate.getMonth(),"-",e.timedate.getDate()]})]})]})}),D=function(e){var t=e.markdowns,s=e.load;return Object(u.jsx)("div",{className:"markdown-list",children:s&&0===t.length?"No Items..":s?t.map((function(e,t){return Object(u.jsx)(B,{id:e.id,title:e.title,aurthor:e.aurthor,description:e.description,timedate:new Date(e.timedate),tags:e.tags},t)})):"Loading..."})},W=(s(484),function(){var e=Object(n.useContext)(S),t=e.blogs,s=e.blogLoad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Activities"}),Object(u.jsx)(D,{markdowns:t,load:s})]})}),Y=s(112),z=[],H=function(){var e=Object(n.useContext)(S).blogs,t=Object(n.useState)(z),s=Object(b.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(z),r=Object(b.a)(c,2),l=r[0],d=r[1],h=Object(n.useState)(!1),j=Object(b.a)(h,2),m=j[0],p=j[1];Object(n.useEffect)((function(){i(e.flatMap((function(e){return e.tags}))),d(Object(Y.a)(new Set(a))),p(!0)}),[e,l]);var g=function(e){return"/blog/tags(".concat(e,")")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Tags"}),m?e.length?Object(u.jsx)("div",{className:"all-tags",children:l.map((function(e,t){return Object(u.jsxs)(o.b,{to:g(e),children:[e,"(",a.filter((function(t){return t===e})).length,")"]},t)}))}):"No Tags":"Loading"]})},_=function(){return Object(u.jsx)("div",{children:"Home Element"})},q=function(){var e=Object(n.useContext)(S),t=e.projects,s=e.projectLoad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Projects"}),Object(u.jsx)(D,{markdowns:t,load:s})]})},U=function(){return Object(u.jsx)("div",{children:"Resume Element"})},J=function(){return Object(u.jsx)("div",{children:"Skill Element"})},R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{path:"/",exact:!0,component:_}),Object(u.jsx)(m.a,{path:"/home",component:_}),Object(u.jsx)(m.a,{path:"/skill",component:J}),Object(u.jsx)(m.a,{path:"/resume",component:U}),Object(u.jsx)(m.a,{path:"/projects",component:q}),Object(u.jsx)(m.a,{path:"/blog",exact:!0,component:W}),Object(u.jsx)(m.a,{path:"/blog/tags",exact:!0,component:H}),Object(u.jsx)(m.a,{path:"/blog\\(:id\\)",component:E}),Object(u.jsx)(m.a,{path:"/blog/tags\\(:id\\)",component:E})]})},X=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(j,{}),Object(u.jsx)("main",{children:Object(u.jsx)(R,{})})]})},$=(s(485),function(){return Object(u.jsx)(C,{children:Object(u.jsx)(X,{})})}),K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,491)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),K()}},[[486,1,2]]]);
//# sourceMappingURL=main.82ab0920.chunk.js.map