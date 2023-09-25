<!-- pages/productores_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Informacion de los productores</h3>
     <p>Esta seccion muestra informacion de los productores</p>
   <ul>
     <ContentList path="/productores" v-slot="{ list }">
        <li v-for="productor in list" :key="productor._path">
         <NuxtLink :to="productor._path">{{ productor.nombre }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
