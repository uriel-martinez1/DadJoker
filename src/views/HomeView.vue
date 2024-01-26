<template>
    <div v-if="isLoading">
        <div>
            <Loading></Loading>
        </div>
    </div>
    <div v-else>
        <AppHeader></AppHeader>
        <JokeResult></JokeResult>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import JokeResult from '../components/JokeResult.vue'
import Loading from '../components/LoadingView.vue'

export default {
    components: {
        AppHeader,
        JokeResult,
        Loading
    },
}
</script>

<style></style>