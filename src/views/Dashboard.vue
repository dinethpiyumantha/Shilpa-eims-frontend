<template>
    <fullscreen ref="fullscreen" @change="fullscreenChange">
    <div class="h-100">
        <!-- <topbar/> -->
        <div class="d-flex dashboad p-0 bg-light">
            <sidebar/>
            <dash-content/>
        </div>
    </div>
    </fullscreen>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import SideBar from '../components/SideBar.vue';
import DashContent from './DashContent.vue';

export default {
    components: {
        'topbar':TopBar,
        'sidebar':SideBar,
        'dash-content':DashContent
    }
}
</script>


<style scoped>
    .dashboad{
        height: calc(100vh);
    }
</style>
