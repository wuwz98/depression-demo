<template>

  <div class="BasicLayout">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>节点管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/disease/list">disease</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/symptom/list">symptom</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/medication/list">medication</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/treatment/list">treatment</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>统计中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>admin</span>
        </el-header>
        
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
  export default {
    name: 'BasicLayout'
  };
</script>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
