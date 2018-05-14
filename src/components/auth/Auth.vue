<template>
<div id="Auth">
  <div class="section section-signup page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4 ml-auto mr-auto">
          <div class="card card-signup">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>

</style>
