<template>
  <div class="animated-back shadow-sm rounded">
      <h4 class="text-white text-uppercase">Developer Team</h4>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.animated-back {
    background: linear-gradient(271deg, #7f1220, #d75100);
    background-size: 400% 400%;

    -webkit-animation: gradientAnimator 7s ease infinite;
    -moz-animation: gradientAnimator 7s ease infinite;
    animation: gradientAnimator 7s ease infinite;
}

@-webkit-keyframes gradientAnimator {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@-moz-keyframes gradientAnimator {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@keyframes gradientAnimator {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
</style>