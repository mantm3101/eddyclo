<template>
<!-- Phi: class="btn btn-link dim cursor-pointer text-80 ml-auto mr-6" -->
  <a
    @click="$router.back()"
    tabindex="0"
    class="btn btn-default btn-outline cursor-pointer inline-flex items-center relative ml-auto mr-6"
  >
    {{ __('Cancel') }}
  </a>
</template>

<script>
export default {
  //
}
</script>
