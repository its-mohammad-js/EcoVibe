import{_ as B,a as I,b as g,S as D,c as F}from"./Select-49a62830.esm-CaOR3bX1.js";import{r as n}from"./index-Bkyzi3h6.js";var G=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function H(e){var u=e.defaultInputValue,l=u===void 0?"":u,S=e.defaultMenuIsOpen,h=S===void 0?!1:S,v=e.defaultValue,m=v===void 0?null:v,t=e.inputValue,s=e.menuIsOpen,p=e.onChange,r=e.onInputChange,d=e.onMenuClose,f=e.onMenuOpen,o=e.value,b=B(e,G),y=n.useState(t!==void 0?t:l),M=I(y,2),_=M[0],k=M[1],x=n.useState(s!==void 0?s:h),O=I(x,2),$=O[0],C=O[1],P=n.useState(o!==void 0?o:m),V=I(P,2),j=V[0],w=V[1],E=n.useCallback(function(a,i){typeof p=="function"&&p(a,i),w(a)},[p]),A=n.useCallback(function(a,i){var c;typeof r=="function"&&(c=r(a,i)),k(c!==void 0?c:a)},[r]),R=n.useCallback(function(){typeof f=="function"&&f(),C(!0)},[f]),T=n.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),W=t!==void 0?t:_,q=s!==void 0?s:$,z=o!==void 0?o:j;return g(g({},b),{},{inputValue:W,menuIsOpen:q,onChange:E,onInputChange:A,onMenuClose:T,onMenuOpen:R,value:z})}var J=n.forwardRef(function(e,u){var l=H(e);return n.createElement(D,F({ref:u},l))}),N=J;export{N as S};
