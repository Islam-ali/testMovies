"use strict";(self.webpackChunktest_movies=self.webpackChunktest_movies||[]).push([[592],{2788:(h,s,e)=>{e.d(s,{u:()=>l});var o=e(262),n=e(2843),a=e(9019),i=e(4650),_=e(529);let l=(()=>{class r{constructor(t){this._HttpClient=t,this.domain=a.N.domain}listMovies(){return this._HttpClient.get(`${this.domain}/api/movies`).pipe((0,o.K)(this.handleError))}listCategory(){return this._HttpClient.get(`${this.domain}/api/category`).pipe((0,o.K)(this.handleError))}listByCategory(t){return this._HttpClient.get(`${this.domain}/api/moviesByCategory/${t}`).pipe((0,o.K)(this.handleError))}detailsMovie(t){return this._HttpClient.get(`${this.domain}/api/movies/${t}`).pipe((0,o.K)(this.handleError))}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),(0,n._)(()=>t.error.message)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(_.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);