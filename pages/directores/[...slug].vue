<!-- pages/directores/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <ContentDoc v-slot="{doc}">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+doc.image">
     </div>
     <div class="six columns">
       <h4>{{doc.nombre}}</h4>
       Nacionalidad: {{doc.nacionalidad}}; Nacimiento: {{doc.nacimiento}};
       Activo: {{doc.activo}}; residencia: {{doc.residencia}};
       otros: {{doc.otros}}
       <pre></pre>
       <h5>Biografia</h5>
       <ContentRenderer :value="doc" />
			 <h5>Pelicula</h5>
			  <ul>
		   <ContentQuery path="/peliculas" :where="{ directorId: doc.directorId }" v-slot="{ data }">
		         <li v-for="pelicula in data" :key="pelicula._path">
		           <NuxtLink :to="pelicula._path">{{ pelicula.titulo }}</NuxtLink>
		         </li>
		   </ContentQuery>
			 </ul>
			</div>
     </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>