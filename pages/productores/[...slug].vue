<!-- pages/productores/[...slug].vue -->
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
       Sede: {{doc.sede}}; Fundacion: {{doc.fundacion}}; 
       Tipo: {{doc.tipo}}
       <pre></pre>
       <h5>History</h5>
       <ContentRenderer :value="doc" />
			 <h5>Peliculas</h5>
			  <ul>
		   <ContentQuery path="/peliculas" :where="{ productorId: doc.productorId }" v-slot="{ data }">
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