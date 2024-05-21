import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function f(e){const r="https://pixabay.com",i="/api/",a="43980241-153c3487497bc06835a433946",t=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${r}${i}?${t}`;return fetch(o).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function p(e){return`<div class="gallery-item">
  <a href="${e.largeImageURL}">
    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
  </a>
  <ul class="block-info">
    <li>
      <p style="font-weight: 600">Likes</p>
      <p>${e.likes}</p>
    </li>

    <li>
      <p style="font-weight: 600">Views</p>
      <p>${e.views}</p>
    </li>

    <li>
      <p style="font-weight: 600">Comments</p>
      <p>${e.comments}</p>
    </li>

    <li>
      <p style="font-weight: 600">Downloads</p>
      <p>${e.downloads}</p>
    </li>
  </ul>
</div>`}function m(e){return e.map(p).join("")}const h="/goit-js-hw-11/assets/icon-error-9956cb73.svg",s={form:document.querySelector(".js-form"),containerImg:document.querySelector(".js-container-images"),body:document.body,cssLoader:document.querySelector(".js-loader")},d=new c(".js-container-images a",{captionsData:"alt",captionPosition:"bottom",captionClass:"caption-text"});s.form.addEventListener("submit",g);function g(e){e.preventDefault(),s.body.style.height="100vh",s.containerImg.innerHTML="";let r=e.target.elements.query.value.trim();if(r===""){l("Fill in the field!");return}r=r.replaceAll(" ","+"),y(),f(r).then(i=>{if(i.hits.length===0)l("Sorry, there are no images matching your<br> search query. Please, try again!");else{const a=m(i.hits);s.containerImg.innerHTML=a,i.hits.length<4?s.body.style.height="100vh":s.body.style.height="100%",d.refresh()}}).catch(i=>{console.error("Error fetching data:",i),l("An error occurred. Please try again later.")}).finally(()=>{L()}),e.target.reset()}function y(){s.cssLoader.style.display="block"}function L(){s.cssLoader.style.display="none"}function l(e){u.error({message:e,backgroundColor:"#EF4040",iconUrl:h,timeout:5e3,closeOnEscape:!0,transitionIn:"fadeInLeft",transitionOut:"fadeOutUp",titleSize:"16",titleLineHeight:"24",messageSize:"16",messageLineHeight:"24",titleColor:"#FFF",messageColor:"#FFF",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
