window.onload=function(){"use strict";function a(){function a(a,b,c,h){var i=4;C(fb,wb,vb,2),fb.beginPath(),fb.moveTo(a(-i),b(-i)),fb.lineTo(a(T+U),b(-i)),fb.lineTo(a(T+U),b(T)),fb.arcTo(a(T+U),b(T+U),a(T),b(T+U),U),fb.lineTo(a(-i),b(T+U)),fb.closePath(),fb.fill(),fb.stroke(),k(l(a(T),b(T),U,Cb)),k(m(a(0),b(T+U),a(T),b(T+U),Cb)),k(m(a(T+U),b(0),a(T+U),b(T),Cb));var j=a==r?f:g;fb.font="64px sans-serif",fb.textAlign="center",fb.textBaseline="middle",C(fb,yb[c][1]),fb.fillText(R(j),a(T+U+130)-2,b(50)-3),C(fb,yb[h][1]),j=b==r?d:e,fb.fillText(R(j),a(50)-2,b(T+U+130)-3),fb.font="16px sans-serif",fb.textAlign="center",fb.textBaseline="middle",C(fb,yb[c][1]),fb.fillText(Mb[c],a(T+U+30),b(12)),C(fb,yb[h][1]),fb.fillText(Mb[h],a(16),b(T+U+12))}var b=A(db,db),c=B(b);D(c,0,0,db,db,sb),D(c,0,0,db-1,db-1,tb),D(c,0,0,db-2,db-2,rb),D(fb,0,0,bb,bb,b),fb.globalAlpha=.1,D(fb,0,bb-T-2,bb,T,yb[Hb][1]),D(fb,bb-T-2,0,T,bb,yb[Ib][1]),D(fb,0,0,bb,T,yb[Jb][1]),D(fb,0,0,T,bb,yb[Kb][1]),fb.globalAlpha=1,fb.globalCompositeOperation="source-over",G(fb,0,0,bb,bb,ub),G(fb,bb,0,0,bb,ub),F(fb,cb,cb,8,rb,ub);var d=8679,e=8681,f=8678,g=8680;a(r,r,2,3),a(r,s,0,3),a(s,r,2,1),a(s,s,0,1);var h=nb,i=h/2;qb.translate(4,4),C(qb,"#aef","#5af",2),qb.beginPath(),qb.moveTo(i,0),qb.quadraticCurveTo(h,-3,h,i),qb.quadraticCurveTo(h,h+1,i,h-2),qb.quadraticCurveTo(2,h,0,i),qb.quadraticCurveTo(-3,-1,i,0),qb.fill(),qb.stroke(),G(qb,8,4,4,20,"#fff",2),G(qb,16,2,8,26,0,1),G(qb,36,14,18,36,0,1),G(qb,38,18,26,36,0,2),G(qb,i-4,10,i-4,18,"#58f",2),G(qb,i+4,10,i+4,18),qb.translate(h+8,0),C(qb,"#fa0","#f00",2),qb.beginPath(),qb.moveTo(i,-4),qb.lineTo(i+6,14),qb.lineTo(h-4,8),qb.quadraticCurveTo(h,h+3,i,h-2),qb.quadraticCurveTo(2,h,4,8),qb.lineTo(i-6,14),qb.lineTo(i,-4),qb.fill(),qb.stroke(),G(qb,i-3,26,i-8,20),G(qb,i+3,26,i+8,20),qb.translate(h+8,0),C(qb,"#fd7","#d72",2),qb.beginPath(),qb.moveTo(i,0),qb.quadraticCurveTo(h,10,h-8,h-8),qb.quadraticCurveTo(h,h+1,i+2,h-6),qb.quadraticCurveTo(14,h-12,2,h-4),qb.quadraticCurveTo(-2,h-10,4,i),qb.quadraticCurveTo(0,0,i,0),qb.fill(),qb.stroke(),F(qb,10,7,1,"#d72"),F(qb,24,9,1),F(qb,7,20,1),F(qb,20,14,1),F(qb,8,30,1),F(qb,28,32,1);for(var j=0;2>j;j++){var n;0===j?(qb.globalCompositeOperation="destination-out",n="#000"):(qb.globalCompositeOperation="source-over",n=null),qb.scale(1,1.5),F(qb,13,14,4,n,"#d72",1),qb.scale(1,2/3),qb.scale(1,1.5),F(qb,26,14,4,n,"#d72",1),qb.scale(1,2/3)}qb.translate(h+8,0),qb.lineCap="round",F(qb,i,i,i-4,null,"#fff",2),C(0,0,1),qb.beginPath(),qb.arc(i,i,i-8,3.2,4.4),qb.stroke(),F(qb,i-4,i+4,4,0,"#fff",2),F(qb,i+4,i+4,4,0,"#fff",2)}function b(){Wb=0,Ub=!1,Ob=[],Pb=[],Pb.n=0,a(),i()}function c(){if(!Ub)if(hc.right||gc.space)Vb>Wb&&Wb++;else if(Wb>0){var a=.1+.9*Wb/Vb,b=bc+cc*a;Qb.boostX=b*N.cos(Yb),Qb.boostY=b*N.sin(Yb),Qb.boostCpt=_b+ac*a,Ub=!0}for(var c=0;c<Rb.length;c++){var d,e=Rb[c],f=!e.mirror;d=1==e.elt?f?gc.up||gc.right:gc.down||gc.left:f?gc.up||gc.left:gc.down||gc.right;var g=e.ux,h=e.uy;e.cpt=e.cpt||0;var i=9;if(e.max=!1,d?e.cpt<i?e.cpt++:e.max=!0:e.cpt>0&&e.cpt--,e.prevX2=e.x2,e.prevY2=e.y2,e.movingUp=d&&!e.max,e.moving=0!==e.cpt,e.cpt>0){var j=e.amax*(e.cpt/i);e.mirror&&(j*=-1);var k=N.cos(j),l=N.sin(j);g=e.ux*k-e.uy*l,h=e.ux*l+e.uy*k}e._ux=g,e._uy=h,e.x2=e.x+g,e.y2=e.y+h}hc.middle&&(Wb=0,Ub=!0,Qb.x=hc.x,Qb.y=hc.y,Qb.v.x=Qb.v.y=0,Qb.boostCpt=0,hc.middle=!1),hc.left&&dc&&(fc.x=hc.x-Qb.x,fc.y=hc.y-Qb.y,v(fc,bc+.5*cc),Qb.v.x=fc.x,Qb.v.y=fc.y,Qb.boostCpt=_b+.5*ac,Qb.boostX=Qb.v.x,Qb.boostY=Qb.v.y,dc=0,hc.left=!1)}function d(){var a,b,c,d;for(b=Sb.length,d=Sb.length+Pb.n,a=0;d>a;a++)c=b>a?Sb[a]:Pb[a-b],c.a+=c.da,c.x=cb+N.cos(c.a)*c.d,c.y=cb+N.sin(c.a)*c.d;if(Ub){var e=0,f=0,g=$b,h=Zb;A=cb-Qb.x,B=cb-Qb.y;var i=W/2,j=u(A,B);i>j&&(A/=j,B/=j,g*=.1+.9*j/i,h*=.5+.5*j/i);var k=Qb.x-cb,l=Qb.y-cb;l>k?l>-k?f=g:e=-g:l>-k?e=g:f=-g,Qb.v.x+=e,Qb.v.y+=f,Qb.boostCpt>0&&(Qb.boostCpt--,Qb.v.x+=Qb.boostX,Qb.v.y+=Qb.boostY),Qb.v.x*Qb.v.x+Qb.v.y*Qb.v.y>h*h&&v(Qb.v,h),Qb.x+=Qb.v.x,Qb.y+=Qb.v.y,Qb.collide=!1;{Qb.v.x,Qb.v.y}for(d=Ob.length,b=d+Pb.n,a=0;b>a;a++)if(c=d>a?Ob[a]:Pb[a-d],c!=Qb){c.collide=!1;var m,n=fc;if(c.shape==zb){if(w(Qb,c)){if(c.kind==Gb){if(Nb[Qb.elt]==c.elt&&(c.dead=!0),c.dead||c.elt==Qb.elt)continue;c.elt!=Qb.elt&&(Qb.elt=Lb)}c.collide=!0,n.x=Qb.x-c.x,fc.y=Qb.y-c.y,m=u(n.x,n.y),n.l=c.r+Qb.r-m,n.x=n.x/m,n.y=n.y/m}}else if(c.shape==Ab){var o=c.kind==Fb&&c.movingUp;if(!o&&x(Qb,c,n)){c.collide=!0,y(ec,c.x,c.y,c.x2,c.y2);var p=z(ec,Qb.x,Qb.y)!==z(ec,Qb.prevX,Qb.prevY);0>=p?m=Qb.r-n.l:(m=Qb.r+n.l,n.x*=-1,n.y*=-1),n.x/=n.l,n.y/=n.l,n.l=m}if(o){var q,r,s=x(Qb,c,n),t=1==c.elt||3==c.elt;if(s||(y(ec,c.x,c.y,c.prevX2,c.prevY2),q=z(ec,Qb.prevX,Qb.prevY,t),y(ec,c.x,c.y,c.x2,c.y2),r=z(ec,Qb.x,Qb.y,t)),s||q!==r){var A=Qb.x-c.x,B=Qb.y-c.y,C=A*c._ux+B*c._uy;if((s||C>0)&&(s||A*A+B*B<c.l*c.l)){c.collide=!0;var D=(u(A,B),C/c.l);n.x=c.x+D*c._ux/c.l,n.y=c.y+D*c._uy/c.l,n.x=Qb.x-n.x,n.y=Qb.y-n.y,n.l=u(n.x,n.y),n.x/=n.l,n.y/=n.l;var E=c._uy/c.l,F=-c._ux/c.l;(c.mirror&&(0===c.elt||3==c.elt)||!c.mirror&&(1==c.elt||2==c.elt))&&(E*=-1,F*=-1);var G=E*n.x+F*n.y;0>G&&(n.x*=-1,n.y*=-1),n.l=n.l+Qb.r,Qb.x+=n.x*n.l,Qb.y+=n.y*n.l,Qb.collide=!0;var H=D/c.l;H=.1+.9*(.3*H+.7*H*H);var I=_b+H*ac>>0,J=bc+cc*H,K=n.x*J,L=n.y*J;Qb.boostCpt?(Qb.boostCpt=I,Qb.boostX=.2*K+Qb.boostX,Qb.boostY=.2*L+Qb.boostY):(console.log("============="),Qb.boostCpt=I,Qb.boostX=K,Qb.boostY=L),console.log("boostRatio",H,Qb.boostCpt,"=>",Qb.boostX,Qb.boostY),Qb.boostX*=.8+.4*Q(),Qb.boostY*=.8+.4*Q(),Qb.elt=c.elt,dc=!0;continue}}}}if(c.collide){Qb.collide=!0,c.colCpt=20,Qb.x+=n.x*n.l,Qb.y+=n.y*n.l;var M=u(Qb.v.x,Qb.v.y),O=Qb.v.x/M,P=Qb.v.y/M,R=-n.y,S=n.x,T=R*O+S*P;0>T&&(R=-R,S=-S);var U=O*n.x+P*n.y;0>U&&(U=-U);var V=N.sin(N.acos(U));0>V&&(V=-V);var X=.2;c.kind==Db?(X=1.3,dc=!0):c.kind==Gb&&(X=c.elt==Qb.elt?1.5:.5),n.x*=U*X*M,n.y*=U*X*M,R*=V*M,S*=V*M,Qb.v.x=n.x+R,Qb.v.y=n.y+S}}Qb.prevX=Qb.x,Qb.prevY=Qb.y}}function e(){_=Z,ab=$;var a=Qb.x,b=Qb.y,c=a-cb,d=b-cb,e=c,f=d;0>e&&(e*=-1),0>f&&(f*=-1);var g=S/2+U;if(g>e&&g>f){var h=e-g,i=f-g,j=h*h+i*i;if(g*g>j){var k=P(j);h=h*g/k,i=i*g/k,a=h+g,b=i+g,0>c&&(a=-a),0>d&&(b=-b),a=cb+a,b=cb+b}}else f>e?a=cb:b=cb;a=t(a,Qb.x-.3*W,Qb.x+.3*W),b=t(b,Qb.y-.3*X,Qb.y+.3*X),a=t(a-W/2,0,bb-W),b=t(b-X/2,0,bb-X),Ub?(Z+=.3*(a-Z),$+=.3*(b-$)):(Z=a,$=b)}function f(){var a=Ub;H(hb),H(lb),a?(E(hb,ib,0,0),jb.clearRect(0,0,W,X),jb.save(),jb.globalAlpha=.9,E(jb,gb,-Z+_,-$+ab),jb.restore(),H(hb),Qb.boostCpt>0?F(jb,Qb.prevX-Z,Qb.prevY-$,6,yb[Qb.elt][1]):F(jb,Qb.x-Z,Qb.y-$,2,yb[Qb.elt][1])):H(jb);for(var b,c,d=0,e=Ob.length;e>d;d++){var f,g,h,i=Ob[d],j=i.x-Z,k=i.y-$;if(i==Qb){var l;Ub?(l=N.atan2(Qb.v.y,Qb.v.x),Xb=0):(l=Qb.sa,Xb+=.05),Qb.cpt=++Qb.cpt%20;var m=Qb.cpt;if(m>10&&(m=20-m),Ub||(m=2+8*(Wb/Vb)>>0,l+=N.cos(Xb)*O/3,Yb=l),m*=.3*O/10,b=0,c=0,Wb>0&&!Ub){var n=4*t(Wb/Vb,0,1)>>0;b=n*Q()>>0,c=n*Q()>>0}dc&&(lb.save(),lb.translate(Qb.x-Z+b,Qb.y-$+c),lb.rotate(l),C(lb,"#fff","#000",1),lb.beginPath(),lb.arc(-10,0,20,0,2.2),lb.lineTo(0,0),lb.arc(-10,0,20,-0,-2.2,!0),lb.lineTo(0,0),lb.closePath(),lb.fill(),lb.stroke(),lb.globalCompositeOperation="destination-out",F(lb,0,0,Tb,"#fff"),lb.restore()),g=yb[Qb.elt][1],f=yb[Qb.elt][0],0===m?F(lb,Qb.x-Z+b,Qb.y-$+c,Tb,f,g):(C(lb,f,g,2),lb.beginPath(),lb.arc(Qb.x-Z+b,Qb.y-$+c,Qb.r,l+m,l-m),lb.lineTo(Qb.x-Z+b,Qb.y-$+c),lb.closePath(),lb.fill(),lb.stroke())}else i.shape==zb?(i.kind==Cb?(f=0,g=0):(h=2,g=vb,f="#000",i.colCpt>0&&(i.colCpt--,g=xb)),(f||g)&&F(lb,j,k,i.r,f,g,h)):i.shape==Ab&&i.kind!=Cb&&(g=vb,i.kind==Fb&&(g=yb[i.elt][1]),g&&G(lb,i.x-Z,i.y-$,i.x2-Z,i.y2-$,g,2))}for(d=0;d<Pb.n;d++){var o=1,p=Pb[d],q=nb+2*mb,r=Nb[Qb.elt]==p.elt,s=Qb.elt==p.elt;if(p.dead){if(p.cpt-=10,p.cpt<=0){o=Pb[Pb.n-1],Pb[d]=o,Pb[Pb.n-1]=p,Pb.n--,d--;continue}o=p.cpt/50}else p.cpt<50&&(p.cpt++,o=p.cpt/50);s||(lb.globalAlpha=.2*o,F(lb,p.x-Z,p.y-$,p.r,yb[p.elt][0]),p.elt==Kb&&(lb.globalAlpha=1,lb.globalCompositeOperation="destination-out",F(lb,p.x-Z,p.y-$,17,yb[p.elt][0]),lb.globalCompositeOperation="source-over")),lb.globalAlpha=o,r||s||F(lb,p.x-Z,p.y-$,p.r,null,yb[p.elt][0]),b=0,c=0,r&&(b=3*(N.random()-.5),c=3*(N.random()-.5)),r||(lb.globalAlpha=.5*o),lb.drawImage(pb,p.elt*q,0,q,q,p.x-q/2-Z+b,p.y-q/2-$+c,q,q)}lb.globalAlpha=1,E(hb,eb,-Z,-$),a&&E(hb,ib,0,0),E(hb,kb,0,0)}function g(){for(var a=4;Pb.n<a;){var b;Pb.length==Pb.n?(b=j(zb,Gb),Pb.push(b),b.elt=Pb.n%4,b.r=ob):b=Pb[Pb.n],Pb.n++;var c=Sb[Pb.n%Sb.length];b.x=c.x,b.y=c.y,b.cpt=0,b.dead=0,b.da=-2*c.da,b.a=c.a,b.d=c.d}var d=!1;Qb.x+Tb<0?(d=!0,Qb.x=50,Qb.y=cb,Qb.sa=0):Qb.x-Tb>bb?(d=!0,Qb.x=bb-50,Qb.y=cb,Qb.sa=-O):Qb.y+Tb<0?(d=!0,Qb.y=50,Qb.x=cb,Qb.sa=O/2):Qb.y-Tb>bb&&(d=!0,Qb.y=bb-50,Qb.x=cb,Qb.sa=-O/2),d&&(Ub=!1,Wb=0,Qb.elt=Lb,Qb.v.x=0,Qb.v.y=0)}function h(){stb&&stb(),c(),d(),e(),f(),g(),ste&&ste(),window.requestAnimationFrame(h)}function i(){dc=!1,Qb=k(l(cb,bb-50,Tb,Bb)),Qb.v={x:0,y:0},Qb.cpt=0,Qb.elt=Lb,Qb.sa=-O/2,o(m(0,220,150,100,Eb)),Sb=[];for(var a=4,b=0;a>b;b++){var c=ob+4,d=2*c+(V-2*c)*b/a>>0,e=2*Q()*O,f=l(0,0,c,Db);Sb.push(k(f));var g=(.2+.2*Q())*(Q()>.5?-1:1);f.da=g/d,f.a=e,f.d=d,b>1&&(f=q(f),f.a+=O,Sb.push(k(f)))}o(m(150,100,300,30,Fb)),Rb=Ob.slice(-8);var h=Rb[0],i=u(h.x-h.x2,h.y-h.y2),j=2*-N.acos((h.x2-h.x)/i);for(b=0;b<Rb.length;b++)h=Rb[b],h.l=i,h.ux=h.x2-h.x,h.uy=h.y2-h.y,h.amax=j,(1==h.elt||2==h.elt)&&(h.amax*=-1)}function j(a,b,c,d){return{x:c||0,y:d||0,shape:a,kind:b}}function k(a){return Ob.push(a),a}function l(a,b,c,d){var e=j(zb,d,a,b);return e.r=c,e}function m(a,b,c,d,e){var f=j(Ab,e,a,b);return f.x2=c,f.y2=d,f}function n(a){for(var b=0;4>b;b++){var c=q(a);p(c,"x","y",b),c.shape==Ab&&p(c,"x2","y2",b),k(c),c.elt=b}}function o(a){n(a),a.x=S-a.x,a.shape==Ab&&(a.x2=S-a.x2),a.mirror=!0,n(a)}function p(a,b,c,d){var e=a[b],f=a[c];if(0===d||2==d)e+=T+U,0===d&&(f=bb-f);else{var g=f;f=T+U+e,e=g,1==d&&(e=bb-e)}a[b]=e>>0,a[c]=f>>0}function q(a){return JSON.parse(JSON.stringify(a))}function r(a){return a}function s(a){return bb-a}function t(a,b,c){return b>a?b:a>c?c:a}function u(a,b){return P(a*a+b*b)}function v(a,b){b=(b||1)/u(a.x,a.y),a.x*=b,a.y*=b}function w(a,b){var c=a.x-b.x,d=a.y-b.y,e=a.r+b.r;return e*e>c*c+d*d}function x(a,b,c){var d=a.x,e=a.y,f=a.r,g=b.x,h=b.y,i=b.x2,j=b.y2,k=i-g,l=j-h,m=N.sqrt(k*k+l*l),n=(i-g)/m,o=(j-h)/m,p=n*(d-g)+o*(e-h),q=p*n+g,r=p*o+h;if((i>g&&q>=g&&i>=q||g>i&&q>=i&&g>=q||g==i&&q==g)&&(j>h&&r>=h&&j>=r||h>j&&r>=j&&h>=r||h==j&&r==h)){var s=r-e,t=q-d,u=P(t*t+s*s);if(f>=u)return c.ex=q,c.ey=r,c.x=-t,c.y=-s,c.l=u,!0}return!1}function y(a,b,c,d,e){b==d?(a.vert=!0,a.x=b):(a.vert=!1,a.m=(c-e)/(b-d),a.p=c-a.m*b)}function z(a,b,c,d){return a.vert?b<a.x:d?b>(c-a.p)/a.m:c>a.m*b+a.p}function A(a,b){var c=L.createElement("canvas");return c.width=a,c.height=b,c}function B(a){return a.getContext("2d")}function C(a,b,c,d){0!==b&&(a.fillStyle=b),0!==c&&(a.strokeStyle=c),0!==d&&(a.lineWidth=d)}function D(a,b,c,d,e,f){f&&(f.width&&(f=a.createPattern(f,"repeat")),C(a,f)),a.fillRect(b,c,d,e)}function E(a,b,c,d){a.drawImage(b,c,d)}function F(a,b,c,d,e,f,g){C(a,e,f,g||2),a.beginPath(),a.arc(b,c,d,0,2*O,!1),e&&a.fill(),f&&a.stroke(),a.closePath()}function G(a,b,c,d,e,f,g){C(a,0,f,g||2),a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function H(a){a.clearRect(0,0,W,X)}function I(a,b){b||(b=window.e);var c=b.keyCode;b.charCode&&!c&&(c=b.charCode),gc[ic[c]]=a}function J(a,b){var c,d;"which"in b?(c=3==b.which,d=2==b.which):"button"in b&&(c=2==b.button,d=1==b.button),c?hc.right=a:d?hc.middle=a:hc.left=a,hc.x=b.clientX+Z,hc.y=b.clientY+$}var K=window,L=K.document,M=L.body,N=K.Math,O=N.PI,P=N.sqrt,Q=N.random,R=String.fromCharCode,S=700,T=220,U=200,V=U+S/2;V=u(V,V)-U>>0;var W,X,Y,Z,$,_,ab,bb=S+2*T+2*U,cb=bb/2,db=20,eb=A(bb,bb),fb=B(eb),gb=A(),hb=B(gb),ib=A(),jb=B(ib),kb=A(),lb=B(kb),mb=4,nb=40,ob=nb-2,pb=A(4*(nb+2*mb),nb+2*mb),qb=B(pb);window.onresize=function(){W=t(K.innerWidth,S,bb),X=t(K.innerHeight,S,bb),Y=N.min(W,X),kb.width=ib.width=gb.width=W-=W%2,kb.height=ib.height=gb.height=X-=X%2},M.onresize(),M.appendChild(gb);var rb="#111",sb="#222",tb="#333",ub="#444",vb="#08e",wb="#000",xb="#0d0",yb=[["#aef","#5af"],["#fa0","#f53"],["#a64","#864"],["rgba(255,255,255,0.5","#fff"],["#ff6","#555"]],zb="c",Ab="l",Bb="b",Cb="bg",Db="bp",Eb="o",Fb="p",Gb="m",Hb=0,Ib=1,Jb=2,Kb=3,Lb=4,Mb=["Water","Fire","Earth","Air"],Nb={};Nb[Hb]=Ib,Nb[Ib]=Hb,Nb[Jb]=Kb,Nb[Kb]=Jb;var Ob,Pb,Qb,Rb,Sb,Tb=14,Ub=!1,Vb=100,Wb=0,Xb=0,Yb=0,Zb=10,$b=.2,_b=1,ac=12,bc=.2*Zb,cc=.8*Zb,dc=!1,ec={},fc={},gc={},hc={};b(),h();var ic={37:"left",65:"left",81:"left",38:"up",90:"up",87:"up",83:"down",40:"down",39:"right",68:"right",32:"space",27:"esc",13:"Enter"};L.onkeyup=function(a){I(!1,a),27==a.keyCode&&(window._stopped?(window._stopped=!1,window.requestAnimationFrame=window._raf):(window._stopped=!0,window._raf=window.requestAnimationFrame,window.requestAnimationFrame=function(){})),13==a.keyCode&&window._stopped&&h()},L.onkeydown=function(a){I(!0,a)},L.onmousedown=function(a){J(!0,a)},L.onmouseup=function(a){J(!1,a)},L.onmousemove=function(a){hc.x=a.clientX+Z,hc.y=a.clientY+$},L.oncontextmenu=function(){return!1}};