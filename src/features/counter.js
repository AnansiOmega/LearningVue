import { reactive, toRefs, computed, onMounted } from 'vue'
///            VVV exporting as function makes it so that each component has its own state
export default () => {
    /// If you return it like this it will be shared state kinda like 'global state'
// export default {
    const state = reactive({
        count: 0,
        photos: [],
        // this changes the state without mutating it. aka doesn't actually change the state
        doubleCount: computed(() => state.count * 2)
    })

    onMounted(() => {
        fetch('http://localhost:3000/photos?page=1')
            .then(resp => resp.json())
            .then(photos => state.photos = photos)
    })

    const incrementCount = () => state.count++
    const decrementCount = () => state.count--
    const addLike = (id) => {
        state.photos.find(photo => {
            if(photo.id === id) photo.likes ++ 
        })
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({id})
        }
        fetch(`http://localhost:3000/likes/${id}`, reqObj)
        .then(resp => resp.json())
        .then( data => console.log(data))
    }

    return {
        ...toRefs(state),
        incrementCount,
        decrementCount,
        addLike
    }
}