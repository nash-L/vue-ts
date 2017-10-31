<template>
  <div>
    <Row class="block">
      <Col span="24" class="title">
        主编推荐<a href="#">查看更多 <Icon type="ios-arrow-forward"></Icon></a>
      </Col>
      <Col span="24" class="body">
        <Row :gutter="12" class="store-head-book">
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
    <Row class="block">
      <Col span="24" class="title">
        书城精选
      </Col>
      <Col span="24" class="body">
        <Row :gutter="12" class="store-main-book">
          <Col span="6">
            <img src="http://m.hongchenbook.com/files/article/image/2/2176/2176s.jpg">
          </Col>
          <Col span="18">
            <h4>女神情衷</h4>
            <small>挣脱婚枷异乡职场去竞争 誓纾母忧到底逆袭上巅峰 冥冥之中疑有伟人牵丝红 茫茫人海旷世奇缘演绎中...</small>
          </Col>
        </Row>
        <Row :gutter="12" class="store-main-book">
          <Col span="6">
            <img src="http://m.hongchenbook.com/files/article/image/2/2176/2176s.jpg">
          </Col>
          <Col span="18">
            <h4>女神情衷</h4>
            <small>挣脱婚枷异乡职场去竞争 誓纾母忧到底逆袭上巅峰 冥冥之中疑有伟人牵丝红 茫茫人海旷世奇缘演绎中...</small>
          </Col>
        </Row>
        <Row :gutter="12" class="store-main-book">
          <Col span="6">
            <img src="http://m.hongchenbook.com/files/article/image/2/2176/2176s.jpg">
          </Col>
          <Col span="18">
            <h4>女神情衷</h4>
            <small>挣脱婚枷异乡职场去竞争 誓纾母忧到底逆袭上巅峰 冥冥之中疑有伟人牵丝红 茫茫人海旷世奇缘演绎中...</small>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row class="block">
      <Col span="24" class="title">
        热门阅读
      </Col>
      <Col span="24" class="body">
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