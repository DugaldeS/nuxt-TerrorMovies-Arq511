<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de Directores</h3>
     <p>Esta Seccion muestra la informacion de los directores</p>
   <ul>
     <ContentList path="/directores" v-slot="{ list }">
        <li v-for="director in list" :key="director._path">
         <NuxtLink :to="director._path">{{ director.nombre }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>