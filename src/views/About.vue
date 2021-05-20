<template>
    <div class="text-center align-middle">
        <div class="row">
            <div class="col-2"></div>
            <div class="card col-8">
                <div class="card-body">
                    <h4 class="text-uppercase">About Us</h4>
                    <p class="">"Shilpa" is an academic institute in Mahiyanganaya. It is a registered academic institute. It consists 300 students, 20 academic staff and 3-5 non - academic staff. Students from grade 1-13 are learned. We were opportunity to learn several courses.​ The owner of institute is ​Mr. V.P.A. Vidanapathirana, who is a government teacher.</p>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        
        <div class="row">
            <div class="col-2"></div>
            <credits class="col-8 my-3 p-3"/>
            <div class="col-2"></div>
        </div>
        
    </div>
</template>

<script>
import Credits from '../components/Credits'
export default {
    components: {
        'credits': Credits
    }
}
</script>
