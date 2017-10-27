<template>
  <div id="main">
    <Row type="flex" justify="space-between" class="nav-header">
      <Col class="nav-route">
        <router-link to="/main">书城</router-link>
        <router-link to="/main/classify">分类</router-link>
        <router-link to="/main/ranking">排行</router-link>
      </Col>
      <Col class="nav-menu">
        <router-link to="/search">
          <Icon type="search"></Icon>
        </router-link>
        <router-link to="/person">
          <Icon type="person"></Icon>
        </router-link>
      </Col>
    </Row>
    <router-view></router-view>
  </div>
</template>