<!-- pages/peliculas/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <ContentDoc v-slot="{doc}">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+doc.image">
     </div>
     <div class="six columns">
       <h4>{{doc.titulo}}</h4>
       dirigido por <NuxtLink :to="'/directores/'+doc.directorId">{{doc.director}}</NuxtLink>
       año: {{doc.año}}; guion: {{doc.guion}};
       musica: {{doc.musica}}; Fotografia: {{doc.fotografia}}
       Producido por <NuxtLink :to="'/productores/'+doc.productorId">
       {{doc.productora}}</NuxtLink>
        <pre></pre>
       <h5>Descripcion/Historia</h5>
        <ContentRenderer :value="doc" />
     </div>
     <div class="two columns"></div>
    </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>