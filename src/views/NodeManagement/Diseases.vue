<template>
  <div>
    <h1>diseases</h1>
    <el-table :data="localData">
      <el-table-column v-for="key in Object.keys(localData[0])" :prop="key" :label="key" :key="key">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DiseaseList",
  data: function () {
    return { localData: [], } 
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("enter diseaselist");
    next((vm) => {
      vm.getDiesaseList();
    })
  },
  methods: {
    getDiesaseList: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8001/wwz/diseaseController/all',
      }).then( (resp) => {
        console.log(resp)
        this.localData = resp.data.data
        console.log(this.localData)
      }).catch( (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style></style>