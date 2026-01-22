class Main {
constructor() {
this.a=1;
this.b='foo';
this.c=[1,2,3];
this.d={x:5};
this.e=null;
this.f=undefined;
this.g=true;
this.h=false;
this.i=()=>42;
this.j=Math.random();
this.k=new Date();
this.l=Symbol('l');
this.m=NaN;
this.n=Infinity;
this.o=-Infinity;
this.p=0;
this.q='bar';
this.r=[4,5,6];
this.s={y:10};
this.t=null;
this.u=undefined;
this.v=true;
this.w=false;
this.x=()=>24;
this.y=Math.PI;
this.z=new RegExp('a');
this.aa=Object.create(null);
this.ab=Object.freeze({});
this.ac=Object.seal({});
this.ad=Object.assign({},this.d);
this.ae=Object.keys(this.d);
this.af=Object.values(this.d);
this.ag=Object.entries(this.d);
this.ah=JSON.stringify(this.d);
this.ai=JSON.parse('{"x":5}');
this.aj=Array.isArray(this.c);
this.ak=this.c.map(x=>x*2);
this.al=this.c.filter(x=>x>1);
this.am=this.c.reduce((a,b)=>a+b,0);
this.an=this.c.find(x=>x===2);
this.ao=this.c.includes(3);
this.ap=this.q.toUpperCase();
this.aq=this.q.split('');
this.ar=this.q.replace('b','B');
this.as=this.q.concat('baz');
this.at=this.q.charAt(0);
this.au=this.q.indexOf('a');
this.av=this.q.substring(0,2);
this.aw=this.q.slice(-1);
this.ax=this.q.repeat(2);
this.ay=this.q.padStart(5,'x');
this.az=this.q.padEnd(5,'y');
this.ba=this.q.trim();
this.bb=this.q.startsWith('b');
this.bc=this.q.endsWith('r');
this.bd=this.q.localeCompare('baz');
this.be=this.q.match(/a/);
this.bf=this.q.search('a');
this.bg=this.q.lastIndexOf('a');
this.bh=this.q.normalize();
this.bi=Math.sqrt(bh);
this.bj=bi > 2;
this.bk=bj ? 10 : 5;
this.bl=[ba, bb, bc, bd, be];
this.bm=bl.map(x => x * 2);
this.bn=bm.filter(x => x > 3);
this.bo=bn.reduce((acc, val) => acc + val, 0);
this.bp={x: ba, y: bb, z: bc};
this.bq=Object.keys(bp);
this.br=Object.values(bp);
this.bs=bq.join("-");
this.bt=br.join(",");
this.bu=bs.split("-");
this.bv=bt.split(",");
this.bw=bu.concat(bv);
this.bx=bw.reverse();
this.by=bx.slice(1, 3);
this.bz=by.includes("1");
this.baa=typeof bz;
this.bab=Number("42");
this.bac=String(bab);
this.bad=Boolean(bac);
this.bae=new Date();
this.baf=bae.getFullYear();
this.bag=bae.getMonth();
this.bah=bae.getDate();
this.bai=bae.getHours();
this.baj=bae.getMinutes();
this.bak=bae.getSeconds();
this.bal=bae.toISOString();
this.bam=bal.substring(0, 10);
this.ban=bam.replace("-", "/");
this.bao=ban.toUpperCase();
this.bap=bao.toLowerCase();
this.baq=bap.charAt(0);
this.bar=bap.charCodeAt(0);
this.bas=bar.toString(16);
this.bat=parseInt(bas, 16);
this.bau=isNaN(bat);
this.bav=ba + bb;
this.baw=Math.pow(bg, 3);
this.bay=2;
}
foo(){return this.a+this.b.length;}
bar(x){return this.c[x%this.c.length];}
baz(){this.d.x++;return this.d.x;}
qux(){this.e=!!this.e;return this.e;}
quux(){this.f=typeof this.f;return this.f;}
corge(){this.g=!this.g;return this.g;}
grault(){this.h=!!this.h;return this.h;}
garply(){this.i=()=>this.a+this.b.length;return this.i();}
waldo(){this.j+=1;return this.j;}
fred(){this.k.setFullYear(2000);return this.k;}
plugh(){this.l=Symbol('new');return this.l;}
xyzzy(){this.m=0/0;return isNaN(this.m);}
thud(){this.n=1/0;return this.n;}
}
