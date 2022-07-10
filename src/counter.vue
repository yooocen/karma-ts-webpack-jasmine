<template>
<div>
 <div>{{counter}}</div> 
 <button @click="onClick">按钮</button>
</div>
</template>

<script lang='ts'>
export default {
    name: 'Counter',
    data() {
        return {
            num: 0,
            onClick: ()=>{
                this.num ++
            }
        }
    }
}
</script>

<style>

</style>