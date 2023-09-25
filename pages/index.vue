<!-- pages/index.vue -->
<template>
  <div class="container">
    <HeaderView />
    <h2 style="margin-top: 15px">Peliculas de Terror</h2>
     <p>Esta pagina Web presenta informacion relevante sobre peliculas de Terror, Directores and Productores.</p>
     <ul>
       <li> <NuxtLink to="/peliculas_index">Informacion de Peliculas</NuxtLink></li>
       <li> <NuxtLink to="/directores_index">Informacion de Directores</NuxtLink></li>
       <li> <NuxtLink to="/productores_index">Informacion de Productores</NuxtLink></li>
     </ul>
    <FooterView />
  </div>
 </template>