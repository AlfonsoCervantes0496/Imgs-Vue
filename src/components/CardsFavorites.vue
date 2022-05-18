<template>
  <div class="card   bg-transparent text-dark img">
  <img :src="image" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Author: {{author}}</h5>
    <p class="card-text">Likes: {{likes}}</p>
    <button 
    class="btn btn-danger"
    @click="deleteitem"> Borrar</button>
  </div>
</div>

</template>

<script>
import {useStore}from"vuex"
export default {
  
    name:"Favorites",
    props:{
      author:String,
      likes:Number,
      image:String,
      id:String

    },
    setup(props){
      const {image} = props
      const store = useStore()
      const deleteitem = () =>
{
 store.dispatch("deteleitem",image)
}
  return {deleteitem}
    }

    
    



}
</script>

<style scoped>
.img{
    width: 20%;
    margin: 2rem;
    height: 1rem;
    padding-bottom: 20vh;
    
}
img{
  width: 110%;
  margin-left:-5%;
  height: 22vh;
}
@media(max-width: 720px){
  .img{
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    height: 1rem;
    
  }

}
</style>>
