"use strict";(self.webpackChunktest_movies=self.webpackChunktest_movies||[]).push([[76],{6076:(M,d,c)=>{c.r(d),c.d(d,{DetailsMovieModule:()=>p});var a=c(6895),s=c(9299),n=c(4650),r=c(2788);function l(t,i){if(1&t&&(n.TgZ(0,"div",4)(1,"div",5),n._UZ(2,"img",6),n.TgZ(3,"h1"),n._uU(4),n.qZA(),n.TgZ(5,"h4"),n._uU(6),n.ALo(7,"date"),n.qZA(),n.TgZ(8,"span",7),n._uU(9),n.qZA(),n.TgZ(10,"div",8)(11,"p",9),n._uU(12),n.qZA()()()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("src","https://test-api.storexweb.com/"+(null==e.detailsMovie?null:e.detailsMovie.image),n.LSH),n.xp6(2),n.Oqu(e.detailsMovie.name),n.xp6(2),n.Oqu(n.xi3(7,5,e.detailsMovie.created_at,"yyyy/mm/dd")),n.xp6(3),n.Oqu(e.detailsMovie.category.name),n.xp6(3),n.hij(" ",e.detailsMovie.description," ")}}function g(t,i){if(1&t&&n._UZ(0,"div",10),2&t){const e=n.oxw();n.Akn("background : url(https://test-api.storexweb.com/"+(null==e.detailsMovie?null:e.detailsMovie.image)+")")}}const _=[{path:"",component:(()=>{class t{constructor(e,o){this._ActivatedRoute=e,this._MovieService=o}ngOnInit(){this.getDetails()}getDetails(){this._ActivatedRoute.params.subscribe(e=>{this._MovieService.detailsMovie(e.id).subscribe({next:o=>{console.log(o),this.detailsMovie=o.message},error:o=>{console.log(o)}})})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.gz),n.Y36(r.u))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-details"]],decls:4,vars:2,consts:[[1,"page"],["id","bright",1,"movie_card"],["class","info_section",4,"ngIf"],["class","blur_back",3,"style",4,"ngIf"],[1,"info_section"],[1,"movie_header"],[1,"locandina",3,"src"],[1,"minutes"],[1,"movie_desc"],[1,"text",2,"max-width","60%"],[1,"blur_back"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,l,13,8,"div",2),n.YNc(3,g,1,2,"div",3),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("ngIf",o.detailsMovie),n.xp6(1),n.Q6J("ngIf",o.detailsMovie))},dependencies:[a.O5,a.uU],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800";*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;background:black;font-family:Montserrat,helvetica,arial,sans-serif;font-size:14px;font-weight:400}.movie_card[_ngcontent-%COMP%]{position:relative;display:block;width:100%;height:max-content;overflow:hidden;transition:all .4s}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]{position:relative;width:100%;min-height:80vh;background-blend-mode:multiply;z-index:2;display:flex;flex-direction:column;justify-content:center;padding-left:100px}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]{position:relative;padding:25px;height:40%}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-weight:400}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#9ac7fa;font-weight:400}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%]{display:inline-block;margin-top:10px;color:#fff;padding:5px;border-radius:5px;border:1px solid rgba(255,255,255,.13)}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{display:inline-block;color:#cee4fd;margin-left:10px}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .locandina[_ngcontent-%COMP%]{position:relative;float:left;margin-right:20px;height:400px;max-width:300px;box-shadow:0 0 20px -10px #00000080;border-radius:10px}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_desc[_ngcontent-%COMP%]{padding:25px;height:50%}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_desc[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#cfd6e1}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]{height:10%;padding-left:15px;padding-bottom:20px}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;color:#fff6;transition:color .3s;transition-delay:.15s;margin:0 10px}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:color .3s;color:#fffc}.movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:19px;cursor:pointer}.movie_card[_ngcontent-%COMP%]   .blur_back[_ngcontent-%COMP%]{position:absolute;top:0;z-index:1;height:100%;right:0;background-size:cover!important;background-repeat:no-repeat!important}@media screen and (min-width: 768px){.blur_back[_ngcontent-%COMP%]{width:100%;background-position:50% 50%!important}.movie_header[_ngcontent-%COMP%]{width:100%;margin-top:85px}.movie_desc[_ngcontent-%COMP%]{width:100%}.info_section[_ngcontent-%COMP%]{background:linear-gradient(to top,#6b57ff 50%,transparent 100%);display:inline-grid}}@media screen and (max-width: 768px){.blur_back[_ngcontent-%COMP%]{width:100%;background-position:50% 50%!important}.movie_header[_ngcontent-%COMP%]{width:100%;margin-top:85px}.movie_desc[_ngcontent-%COMP%]{width:100%}.info_section[_ngcontent-%COMP%]{background:linear-gradient(to top,#6b57ff 50%,transparent 100%);display:inline-grid}}']}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.ez,m]}),t})()}}]);