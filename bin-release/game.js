window.onload=function(){"use strict";function a(){function a(a,b,c,h){var i=4;D(lb,zb,yb,2),lb.beginPath(),lb.moveTo(a(-i),b(-i)),lb.lineTo(a(W+X),b(-i)),lb.lineTo(a(W+X),b(W)),lb.arcTo(a(W+X),b(W+X),a(W),b(W+X),X),lb.lineTo(a(-i),b(W+X)),lb.closePath(),lb.fill(),lb.stroke(),l(m(a(W),b(W),X,Gb)),l(n(a(0),b(W+X),a(W),b(W+X),Gb)),l(n(a(W+X),b(0),a(W+X),b(W),Gb));var j=a==s?f:g;lb.font="64px sans-serif",lb.textAlign="center",lb.textBaseline="middle",D(lb,Cb[c][1]),lb.fillText(S(j),a(W+X+130)-2,b(50)-3),D(lb,Cb[h][1]),j=b==s?d:e,lb.fillText(S(j),a(50)-2,b(W+X+130)-3),lb.font="16px sans-serif",lb.textAlign="center",lb.textBaseline="middle",D(lb,Cb[c][1]),lb.fillText(Rb[c],a(W+X+30),b(12)),D(lb,Cb[h][1]),lb.fillText(Rb[h],a(16),b(W+X+12))}var b=B(hb,hb),c=C(b);E(c,0,0,hb,hb,vb),E(c,0,0,hb-1,hb-1,wb),E(c,0,0,hb-2,hb-2,ub),E(lb,0,0,fb,fb,b),lb.globalAlpha=.1,E(lb,0,fb-W-2,fb,W,Cb[Mb][1]),E(lb,fb-W-2,0,W,fb,Cb[Nb][1]),E(lb,0,0,fb,W,Cb[Ob][1]),E(lb,0,0,W,fb,Cb[Pb][1]),lb.globalAlpha=1,lb.globalCompositeOperation="source-over",D(lb,ub,xb,2),H(lb,0,0,fb,fb),H(lb,fb,0,0,fb),G(lb,gb,gb,8,T,T);var d=8679,e=8681,f=8678,g=8680;a(s,s,2,3),a(s,t,0,3),a(t,s,2,1),a(t,t,0,1);var h=jb,i=h/2;tb.translate(4,4),D(tb,"#aef","#5af",2),tb.beginPath(),tb.moveTo(i,0),tb.quadraticCurveTo(h,-3,h,i),tb.quadraticCurveTo(h,h+1,i,h-2),tb.quadraticCurveTo(2,h,0,i),tb.quadraticCurveTo(-3,-1,i,0),tb.fill(),tb.stroke(),D(tb,U,"#fff",2),H(tb,8,4,4,20),H(tb,16,2,8,26,0,1),H(tb,36,14,18,36,0,1),H(tb,38,18,26,36,0,2),D(tb,U,"#58f",2),H(tb,i-4,10,i-4,18),H(tb,i+4,10,i+4,18),tb.translate(h+8,0),D(tb,"#fa0","#f00",2),tb.beginPath(),tb.moveTo(i,-4),tb.lineTo(i+6,14),tb.lineTo(h-4,8),tb.quadraticCurveTo(h,h+3,i,h-2),tb.quadraticCurveTo(2,h,4,8),tb.lineTo(i-6,14),tb.lineTo(i,-4),tb.fill(),tb.stroke(),H(tb,i-3,26,i-8,20),H(tb,i+3,26,i+8,20),tb.translate(h+8,0),D(tb,"#fd7","#d72",2),tb.beginPath(),tb.moveTo(i,0),tb.quadraticCurveTo(h,10,h-8,h-8),tb.quadraticCurveTo(h,h+1,i+2,h-6),tb.quadraticCurveTo(14,h-12,2,h-4),tb.quadraticCurveTo(-2,h-10,4,i),tb.quadraticCurveTo(0,0,i,0),tb.fill(),tb.stroke(),D(tb,"#d72"),G(tb,10,7,1,T),G(tb,24,9,1,T),G(tb,7,20,1,T),G(tb,20,14,1,T),G(tb,8,30,1,T),G(tb,28,32,1,T),D(tb,"#000","#d72",1);for(var j=0;2>j;j++){var k;0===j?(tb.globalCompositeOperation="destination-out",k=T):(tb.globalCompositeOperation="source-over",k=U),tb.scale(1,1.5),G(tb,13,14,4,k,T),tb.scale(1,2/3),tb.scale(1,1.5),G(tb,26,14,4,k,T),tb.scale(1,2/3)}tb.translate(h+8,0),tb.lineCap="round",D(tb,0,"#fff",2),G(tb,i,i,i-4,U,T),D(0,0,1),tb.beginPath(),tb.arc(i,i,i-8,3.2,4.4),tb.stroke(),G(tb,i-4,i+4,4,U,T),G(tb,i+4,i+4,4,U,T)}function b(){cc=0,ac=!1,Tb=[],Ub=[],a(),i()}function c(){if(!ac)if(qc.right||pc.space)bc>cc&&cc++;else if(cc>0){var a=.1+.9*cc/bc,b=kc+lc*a;Wb.boostX=b*O.cos(ec),Wb.boostY=b*O.sin(ec),Wb.boostCpt=ic+jc*a,ac=!0,Wb.boostType="start"}for(var c=0;c<Xb.length;c++){var d,e=Xb[c],f=!e.mirror;d=1==e.elt?f?pc.up||pc.right:pc.down||pc.left:f?pc.up||pc.left:pc.down||pc.right;var g=e.ux,h=e.uy;e.cpt=e.cpt||0;var i=9;if(e.max=!1,d?e.cpt<i?e.cpt++:e.max=!0:e.cpt>0&&e.cpt--,e.prevX2=e.x2,e.prevY2=e.y2,e.movingUp=d&&!e.max,e.moving=0!==e.cpt,e.cpt>0){var j=e.amax*(e.cpt/i);e.mirror&&(j*=-1);var k=O.cos(j),l=O.sin(j);g=e.ux*k-e.uy*l,h=e.ux*l+e.uy*k}e._ux=g,e._uy=h,e.x2=e.x+g,e.y2=e.y+h}qc.middle&&(cc=0,ac=!0,Wb.x=qc.x,Wb.y=qc.y,Wb.v.x=Wb.v.y=0,Wb.boostCpt=0,qc.middle=!1),qc.left&&mc&&(oc.x=qc.x-Wb.x,oc.y=qc.y-Wb.y,w(oc,kc+.5*lc),Wb.v.x=oc.x,Wb.v.y=oc.y,Wb.boostCpt=ic+.8*jc,Wb.boostX=Wb.v.x,Wb.boostY=Wb.v.y,Wb.boostType="click",mc=0,qc.left=!1)}function d(){var a,b,c,d;for(b=Yb.length,a=0;b>a;a++)c=Yb[a],c.a+=c.da,c.x=gb+O.cos(c.a)*c.d,c.y=gb+O.sin(c.a)*c.d;for(b=Ub.length,a=0;b>a;a++){if(c=Ub[a],c.elt!=Wb.elt&&Wb.elt!=Qb){var e=v(Wb.x-c.x,Wb.y-c.y);200>e&&(c.elt==Sb[Wb.elt]?(c.tx=c.hx,c.ty=c.hy):(c.tx=Wb.x,c.ty=Wb.y))}if(C=c.tx-c.x,D=c.ty-c.y,25>C*C+D*D){var f=R()*P*2;c.tx=gb+O.cos(f)*eb,c.ty=gb+O.sin(f)*eb}else F=v(C,D),c.x+=C*hc/F,c.y+=D*hc/F}if(ac){var g=0,h=0,i=gc,j=fc;C=gb-Wb.x,D=gb-Wb.y;var k=Z/2,l=v(C,D);k>l&&(C/=l,D/=l,i*=.1+.9*l/k,j*=.5+.5*l/k);var m=Wb.x-gb,n=Wb.y-gb;n>m?n>-m?h=i:g=-i:n>-m?g=i:h=-i,Wb.v.x+=g,Wb.v.y+=h,Wb.boostCpt>0&&(Wb.boostCpt--,Wb.v.x+=Wb.boostX,Wb.v.y+=Wb.boostY),Wb.v.x*Wb.v.x+Wb.v.y*Wb.v.y>j*j&&w(Wb.v,j),Wb.x+=Wb.v.x,Wb.y+=Wb.v.y,Wb.collide=!1;{Wb.v.x,Wb.v.y}for(d=Tb.length,b=d+Ub.length,a=0;b>a;a++)if(c=d>a?Tb[a]:Ub[a-d],c!=Wb){c.collide=!1;var o,p=oc;if(c.shape==Db){if(x(Wb,c)){if(c.kind==Kb&&(Sb[Wb.elt]==c.elt&&(c.dead=!0),c.dead))continue;c.collide=!0,p.x=Wb.x-c.x,p.y=Wb.y-c.y,o=v(p.x,p.y),c.kind==Kb&&c.elt!=Wb.elt&&(Wb.elt!=Qb?Wb.elt=Qb:Vb.n<Vb.length&&(Vb.n++,ab=Vb[Vb.n-1],ab.m=c,ab.dx=p.x*(Zb-_b)/o,ab.dy=p.y*(Zb-_b)/o)),p.l=c.r+Wb.r-o,p.x=p.x/o,p.y=p.y/o}}else if(c.shape==Eb){var q=c.kind==Jb&&c.movingUp;if(!q&&y(Wb,c,p)){c.collide=!0,z(nc,c.x,c.y,c.x2,c.y2);var r=A(nc,Wb.x,Wb.y)!==A(nc,Wb.prevX,Wb.prevY);0>=r?o=Wb.r-p.l:(o=Wb.r+p.l,p.x*=-1,p.y*=-1),p.x/=p.l,p.y/=p.l,p.l=o}if(q){var s,t,u=y(Wb,c,p),B=1==c.elt||3==c.elt;if(u||(z(nc,c.x,c.y,c.prevX2,c.prevY2),s=A(nc,Wb.prevX,Wb.prevY,B),z(nc,c.x,c.y,c.x2,c.y2),t=A(nc,Wb.x,Wb.y,B)),u||s!==t){var C=Wb.x-c.x,D=Wb.y-c.y,E=C*c._ux+D*c._uy;if((u||E>0)&&(u||C*C+D*D<c.l*c.l)){c.collide=!0;var F=v(C,D),G=E/c.l;p.x=c.x+G*c._ux/c.l,p.y=c.y+G*c._uy/c.l,p.x=Wb.x-p.x,p.y=Wb.y-p.y,p.l=v(p.x,p.y),p.x/=p.l,p.y/=p.l;var H=c._uy/c.l,I=-c._ux/c.l;(c.mirror&&(0===c.elt||3==c.elt)||!c.mirror&&(1==c.elt||2==c.elt))&&(H*=-1,I*=-1);var J=H*p.x+I*p.y;0>J&&(p.x*=-1,p.y*=-1),p.l=p.l+Wb.r,Wb.x+=p.x*p.l,Wb.y+=p.y*p.l,Wb.collide=!0;var K=G/c.l;K=.1+.9*(.3*K+.7*K*K);var L=ic+K*jc>>0,M=kc+lc*K,N=p.x*M,Q=p.y*M;Wb.boostCpt&&Wb.boostType==Jb?(Wb.boostCpt=L,Wb.boostX=.2*N+Wb.boostX,Wb.boostY=.2*Q+Wb.boostY):(console.log("============="),Wb.boostCpt=L,Wb.boostX=N,Wb.boostY=Q),Wb.boostType=Jb,console.log("boostRatio",K,Wb.boostCpt,"=>",Wb.boostX,Wb.boostY),Wb.boostX*=.8+.4*R(),Wb.boostY*=.8+.4*R(),Wb.elt=c.elt,mc=!0;continue}}}}if(c.collide){Wb.collide=!0,c.colCpt=20,Wb.x+=p.x*p.l,Wb.y+=p.y*p.l;var S=v(Wb.v.x,Wb.v.y),T=Wb.v.x/S,U=Wb.v.y/S,V=-p.y,W=p.x,X=V*T+W*U;0>X&&(V=-V,W=-W);var Y=T*p.x+U*p.y;0>Y&&(Y=-Y);var $=O.sin(O.acos(Y));0>$&&($=-$);var _=.2;c.kind==Hb?(_=1.1,mc=!0):c.kind==Kb&&(_=1.1,c.elt==Wb.elt&&(mc=!0)),p.x*=Y*_*S,p.y*=Y*_*S,V*=$*S,W*=$*S,Wb.v.x=p.x+V,Wb.v.y=p.y+W}}Wb.prevX=Wb.x,Wb.prevY=Wb.y}var ab,bb=($b+_b)*($b+_b),cb=($b-Zb)*($b-Zb),db=Ub.length;for(a=0;a<Vb.n;a++){ab=Vb[a];var fb=ab.x-Wb.x,hb=ab.y-Wb.y,ib=fb*fb+hb*hb;if(bb>ib)ab.m=null,Vb[a]=Vb[Vb.n-1],Vb[Vb.n-1]=ab,a--,Vb.n--;else if(ab.m)ab.m.dead?ab.m=null:(ab.x=ab.m.x+ab.dx,ab.y=ab.m.y+ab.dy);else for(var jb=0;db>jb;jb++){var kb=Ub[jb];fb=ab.x-kb.x,hb=ab.y-kb.y,ib=fb*fb+hb*hb,cb>ib&&(ab.m=kb,ab.dx=fb,ab.dy=hb)}}}function e(){cb=ab,db=bb;var a=Wb.x,b=Wb.y,c=a-gb,d=b-gb,e=c,f=d;0>e&&(e*=-1),0>f&&(f*=-1);var g=V/2+X;if(g>e&&g>f){var h=e-g,i=f-g,j=h*h+i*i;if(g*g>j){var k=Q(j);h=h*g/k,i=i*g/k,a=h+g,b=i+g,0>c&&(a=-a),0>d&&(b=-b),a=gb+a,b=gb+b}}else f>e?a=gb:b=gb;a=u(a,Wb.x-.3*Z,Wb.x+.3*Z),b=u(b,Wb.y-.3*$,Wb.y+.3*$),a=u(a-Z/2,0,fb-Z),b=u(b-$/2,0,fb-$),ac?(ab+=.3*(a-ab),bb+=.3*(b-bb)):(ab=a,bb=b)}function f(){var a=ac;I(nb),I(rb);var b,c;a?(F(nb,ob,0,0),pb.clearRect(0,0,Z,$),pb.save(),pb.globalAlpha=.9,F(pb,mb,-ab+cb,-bb+db),pb.restore(),I(nb),D(pb,Cb[Wb.elt][1]),Wb.boostCpt>0?G(pb,Wb.prevX-ab,Wb.prevY-bb,6,T):G(pb,Wb.x-ab,Wb.y-bb,2,T)):I(pb);var d=jb+2*ib;for(b=0,c=Ub.length;c>b;b++){var e=Ub[b],f=1;e.dead?(e.cpt-=10,e.cpt<=0?j(e):f=e.cpt/50):e.cpt<50&&(e.cpt++,f=e.cpt/50),e.colCpt>0&&e.colCpt--;var g=Sb[Wb.elt]==e.elt,h=Wb.elt==e.elt;D(rb,h?zb:g?Cb[e.elt][0]:Bb,h?e.colCpt>0?Ab:yb:Bb,2),rb.globalAlpha=f*(h?1:g?.2:.4),G(rb,e.x-ab,e.y-bb,e.r,T),e.elt==Pb&&(rb.globalAlpha=1,rb.globalCompositeOperation="destination-out",G(rb,e.x-ab,e.y-bb,17,T),rb.globalCompositeOperation="source-over"),rb.globalAlpha=f,g||G(rb,e.x-ab,e.y-bb,e.r,U,T),rb.globalAlpha=f*(h?.4:g?.7:1),s=0,t=0,g&&(s=3*(O.random()-.5),t=3*(O.random()-.5)),h&&(rb.globalAlpha=.4*f),rb.drawImage(sb,e.elt*d,0,d,d,e.x-d/2-ab+s,e.y-d/2-bb+t,d,d)}rb.globalAlpha=1,Vb.cpt++;var i=170+34*O.cos(Vb.cpt/20)>>0;i=i.toString(16),D(rb,null,"#"+i+i+"00",2);var k,l,m=2*P,n=ab-_b,o=ab+Z+_b,p=bb-_b,q=bb+Z+_b;for(b=0;b<Vb.n;b++){var r=Vb[b];k=r.x,l=r.y,k>n&&o>k&&l>p&&q>l&&(rb.beginPath(),rb.arc(k-ab,l-bb,_b,0,m),rb.stroke())}var s,t;for(b=0,c=Tb.length;c>b;b++){var v,w=Tb[b],x=w.x-ab,y=w.y-bb;w!=Wb&&(w.shape==Db?w.kind==Hb&&(w.colCpt>0?(w.colCpt--,v=Ab):v=yb,D(rb,"#000",v,2),G(rb,x,y,w.r,T,T)):w.shape==Eb&&w.kind!=Gb&&(v=yb,w.kind==Jb&&(v=Cb[w.elt][1]),D(rb,0,v,2),H(rb,w.x-ab,w.y-bb,w.x2-ab,w.y2-bb)))}if(Wb){var z;ac?(z=O.atan2(Wb.v.y,Wb.v.x),dc=0):(z=Wb.sa,dc+=.05),Wb.cpt=++Wb.cpt%20;var A=Wb.cpt;if(A>10&&(A=20-A),ac||(A=2+8*(cc/bc)>>0,z+=O.cos(dc)*P/3,ec=z),A*=.3*P/10,s=0,t=0,cc>0&&!ac){var B=4*u(cc/bc,0,1)>>0;s=B*R()>>0,t=B*R()>>0}mc&&(rb.save(),rb.translate(Wb.x-ab+s,Wb.y-bb+t),rb.rotate(z),D(rb,"#fff","#000",1),rb.beginPath(),rb.arc(-10,0,20,0,2.2),rb.lineTo(0,0),rb.arc(-10,0,20,-0,-2.2,!0),rb.lineTo(0,0),rb.closePath(),rb.fill(),rb.stroke(),rb.globalCompositeOperation="destination-out",G(rb,0,0,$b,"#fff"),rb.restore()),D(rb,Cb[Wb.elt][0],Cb[Wb.elt][1],2),0===A?G(rb,Wb.x-ab+s,Wb.y-bb+t,$b,T,T):(rb.beginPath(),rb.arc(Wb.x-ab+s,Wb.y-bb+t,Wb.r,z+A,z-A),rb.lineTo(Wb.x-ab+s,Wb.y-bb+t),rb.closePath(),rb.fill(),rb.stroke())}F(nb,kb,-ab,-bb),a&&F(nb,ob,0,0),F(nb,qb,0,0)}function g(){var a=!1;Wb.x+$b<0?(a=!0,Wb.x=50,Wb.y=gb,Wb.sa=0):Wb.x-$b>fb?(a=!0,Wb.x=fb-50,Wb.y=gb,Wb.sa=-P):Wb.y+$b<0?(a=!0,Wb.y=50,Wb.x=gb,Wb.sa=P/2):Wb.y-$b>fb&&(a=!0,Wb.y=fb-50,Wb.x=gb,Wb.sa=-P/2),a&&(ac=!1,cc=0,Wb.elt=Qb,Wb.v.x=0,Wb.v.y=0)}function h(){stb&&stb(),c(),d(),e(),f(),g(),ste&&ste(),window.requestAnimationFrame(h)}function i(){mc=!1,Wb=l(m(gb,fb-50,$b,Fb)),Wb.v={x:0,y:0},Wb.cpt=0,Wb.elt=Qb,Wb.sa=-P/2,p(n(0,220,150,100,Ib)),Yb=[];var a,b,c,d=4;for(b=0;d>b;b++){var e=Zb-4,f=2*e+(Y-2*e)*b/d>>0,g=2*R()*P;a=m(0,0,e,Hb),Yb.push(l(a));var h=(.2+.2*R())*(R()>.5?-1:1);a.da=h/f,a.a=g,a.d=f}for(b=1;d>b;b++)for(c=0;b>c;c++)a=r(Yb[b]),a.a+=2*P*(c+1)/(b+1),Yb.push(l(a));p(n(150,100,300,30,Jb)),Xb=Tb.slice(-8);var i=Xb[0],o=v(i.x-i.x2,i.y-i.y2),q=2*-O.acos((i.x2-i.x)/o);for(b=0;b<Xb.length;b++)i=Xb[b],i.l=o,i.ux=i.x2-i.x,i.uy=i.y2-i.y,i.amax=q,(1==i.elt||2==i.elt)&&(i.amax*=-1);Vb=[],Vb.n=0,Vb.cpt=0;var s,t,u=6,w=11,x=O.random()*P;for(b=1;u>=b;b++)for(c=1;w>=c;c++)t=2*P*(c/w)+.1*b+x,s=k(Db,Lb),s.r=_b,Vb[Vb.n]=s,Vb.n++,s.x=gb+O.cos(t)*b*eb/u,s.y=gb+O.sin(t)*b*eb/u;for(b=0;4>b;b++){var y=k(Db,Kb);Ub.push(y),y.elt=b,y.r=Zb,y.sy=0===b||1==b?W:fb-W,y.sx=0===b||3==b?W:fb-W,y.hx=gb+.5*V*(1==b?1:3==b?-1:0),y.hy=gb+.5*V*(0===b?1:2==b?-1:0),j(y)}}function j(a){a.tx=a.hx,a.ty=a.hy,a.x=a.sx,a.y=a.sy,a.cpt=0,a.dead=!1,a.da=0,a.a=0,a.d=1}function k(a,b,c,d){return{x:c||0,y:d||0,shape:a,kind:b}}function l(a){return Tb.push(a),a}function m(a,b,c,d){var e=k(Db,d,a,b);return e.r=c,e}function n(a,b,c,d,e){var f=k(Eb,e,a,b);return f.x2=c,f.y2=d,f}function o(a){for(var b=0;4>b;b++){var c=r(a);q(c,"x","y",b),c.shape==Eb&&q(c,"x2","y2",b),l(c),c.elt=b}}function p(a){o(a),a.x=V-a.x,a.shape==Eb&&(a.x2=V-a.x2),a.mirror=!0,o(a)}function q(a,b,c,d){var e=a[b],f=a[c];if(0===d||2==d)e+=W+X,0===d&&(f=fb-f);else{var g=f;f=W+X+e,e=g,1==d&&(e=fb-e)}a[b]=e>>0,a[c]=f>>0}function r(a){return JSON.parse(JSON.stringify(a))}function s(a){return a}function t(a){return fb-a}function u(a,b,c){return b>a?b:a>c?c:a}function v(a,b){return Q(a*a+b*b)}function w(a,b){b=(b||1)/v(a.x,a.y),a.x*=b,a.y*=b}function x(a,b){var c=a.x-b.x,d=a.y-b.y,e=a.r+b.r;return e*e>c*c+d*d}function y(a,b,c){var d=a.x,e=a.y,f=a.r,g=b.x,h=b.y,i=b.x2,j=b.y2,k=i-g,l=j-h,m=O.sqrt(k*k+l*l),n=(i-g)/m,o=(j-h)/m,p=n*(d-g)+o*(e-h),q=p*n+g,r=p*o+h;if((i>g&&q>=g&&i>=q||g>i&&q>=i&&g>=q||g==i&&q==g)&&(j>h&&r>=h&&j>=r||h>j&&r>=j&&h>=r||h==j&&r==h)){var s=r-e,t=q-d,u=Q(t*t+s*s);if(f>=u)return c.ex=q,c.ey=r,c.x=-t,c.y=-s,c.l=u,!0}return!1}function z(a,b,c,d,e){b==d?(a.vert=!0,a.x=b):(a.vert=!1,a.m=(c-e)/(b-d),a.p=c-a.m*b)}function A(a,b,c,d){return a.vert?b<a.x:d?b>(c-a.p)/a.m:c>a.m*b+a.p}function B(a,b){var c=M.createElement("canvas");return c.width=a,c.height=b,c}function C(a){return a.getContext("2d")}function D(a,b,c,d){b&&(a.fillStyle=b),c&&(a.strokeStyle=c),d&&(a.lineWidth=d)}function E(a,b,c,d,e,f){f&&(f.width&&(f=a.createPattern(f,"repeat")),D(a,f)),a.fillRect(b,c,d,e)}function F(a,b,c,d){a.drawImage(b,c,d)}function G(a,b,c,d,e,f){a.beginPath(),a.arc(b,c,d,0,2*P,!1),e&&a.fill(),f&&a.stroke()}function H(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function I(a){a.clearRect(0,0,Z,$)}function J(a,b){b||(b=window.e);var c=b.keyCode;b.charCode&&!c&&(c=b.charCode),pc[rc[c]]=a}function K(a,b){var c,d;"which"in b?(c=3==b.which,d=2==b.which):"button"in b&&(c=2==b.button,d=1==b.button),c?qc.right=a:d?qc.middle=a:qc.left=a,qc.x=b.clientX+ab,qc.y=b.clientY+bb}var L=window,M=L.document,N=M.body,O=L.Math,P=O.PI,Q=O.sqrt,R=O.random,S=String.fromCharCode,T=!0,U=!1,V=700,W=220,X=200,Y=X+V/2;Y=v(Y,Y)-X>>0;var Z,$,_,ab,bb,cb,db,eb=(V/2+v(V/2,V/2))/2,fb=V+2*W+2*X,gb=fb/2,hb=20,ib=4,jb=40,kb=B(fb,fb),lb=C(kb),mb=B(),nb=C(mb),ob=B(),pb=C(ob),qb=B(),rb=C(qb),sb=B(4*(jb+2*ib),jb+2*ib),tb=C(sb);window.onresize=function(){Z=u(L.innerWidth,V,fb),$=u(L.innerHeight,V,fb),_=O.min(Z,$),qb.width=ob.width=mb.width=Z-=Z%2,qb.height=ob.height=mb.height=$-=$%2},N.onresize(),N.appendChild(mb);var ub="#111",vb="#222",wb="#333",xb="#444",yb="#08e",zb="#000",Ab="#0d0",Bb="#f02",Cb=[["#aef","#5af"],["#fa0","#f53"],["#a64","#864","#fd7"],["rgba(255,255,255,0.5","#fff","#fff"],["#ff6","#555"]],Db="c",Eb="l",Fb="b",Gb="bg",Hb="bp",Ib="o",Jb="p",Kb="m",Lb="ring",Mb=0,Nb=1,Ob=2,Pb=3,Qb=4,Rb=["Water","Fire","Earth","Air"],Sb={};Sb[Mb]=Nb,Sb[Nb]=Mb,Sb[Ob]=Pb,Sb[Pb]=Ob;var Tb,Ub,Vb,Wb,Xb,Yb,Zb=38,$b=14,_b=6,ac=!1,bc=100,cc=0,dc=0,ec=0,fc=10,gc=.2,hc=1,ic=1,jc=12,kc=.2*fc,lc=.8*fc,mc=!1,nc={},oc={},pc={},qc={};b(),h();var rc={37:"left",65:"left",81:"left",38:"up",90:"up",87:"up",83:"down",40:"down",39:"right",68:"right",32:"space",27:"esc",13:"Enter"};M.onkeyup=function(a){J(!1,a),27==a.keyCode&&(window._stopped?(window._stopped=!1,window.requestAnimationFrame=window._raf):(window._stopped=!0,window._raf=window.requestAnimationFrame,window.requestAnimationFrame=function(){})),13==a.keyCode&&window._stopped&&h()},M.onkeydown=function(a){J(!0,a)},M.onmousedown=function(a){K(!0,a)},M.onmouseup=function(a){K(!1,a)},M.onmousemove=function(a){qc.x=a.clientX+ab,qc.y=a.clientY+bb},M.oncontextmenu=function(){return!1}};