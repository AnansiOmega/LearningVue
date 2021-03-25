<template>
    <h1>Yo ho hello</h1>
    <h1>Counter: {{count}}</h1>
    <h1>Doubled Count: {{doubleCount}}</h1>
    <button @click='incrementCount'>Increment</button>
    <button @click='decrementCount'>Decrement</button>
    <ul :key='photo.id' v-for="photo in photos">
        <img :src='`http://localhost:3000${photo.image}`'>
        <li>{{photo.title}}</li>
        <li>{{photo.likes}}</li>
        <button @click="() => addLike(photo.id)">like</button>
    </ul>
</template>


<script>
///// This is kinda the 'Hooks' way of doing it ///// 
// import { defineComponent, ref } from 'vue'
// export default defineComponent({
//     setup: () => {
// // ///     const [count, setCount] = useState(0)
//         const count = ref(0);
// // ////    const incrememntCount = () => setCount(count + 1)
//         const incrementCount = () => count.value ++
// // ////    const decrementCount = () => setCount(count - 1)
//         const decrementCount = () => count.value --

//         return {
//             count,
//             incrementCount,
//             decrementCount
//         }
//     },
// })

import { defineComponent } from 'vue'
import useCounter from '../features/counter';
export default defineComponent({
    setup: () => {
        const counterState = useCounter();

        return {
            ...counterState
        }
    }
})
</script>


<style scoped>
ul {
    list-style: none;
}
img{
    border-radius: 50%;
    height:50vh;
    width: auto;
}

</style>