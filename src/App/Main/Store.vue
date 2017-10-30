<template>
  <div>
    <Row class="block">
      <Col span="24" class="title">
        主编推荐<a href="#">查看更多 <Icon type="ios-arrow-forward"></Icon></a>
      </Col>
      <Col span="24" class="body">
        <Row :gutter="12" id="store-head-book">
          <Col span="8">
            <img src="http://m.i890.net/files/article/image/2/2728/2728s.jpg">
            <div>厚爱成婚</div>
          </Col>
          <Col span="8">
            <img src="http://m.i890.net/files/article/image/2/2728/2728s.jpg">
            <div>厚爱成婚</div>
          </Col>
          <Col span="8">
            <img src="http://m.i890.net/files/article/image/2/2728/2728s.jpg">
            <div>厚爱成婚</div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Store extends Vue {
  }

</script>