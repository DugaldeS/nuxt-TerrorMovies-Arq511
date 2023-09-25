<!-- pages/peliculas_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Informacion de peliculas</h3>
   <p>Esta seccion presenta la informacion de las peliculas</p>
   <ul>
     <ContentList path="/peliculas" v-slot="{ list }">
        <li v-for="pelicula in list" :key="pelicula._path">
         <NuxtLink :to="pelicula._path">{{ pelicula.titulo }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
  <FooterView />
 </div>
</template>