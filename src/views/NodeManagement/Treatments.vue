<template>
  <div>
    <h1>treatments</h1>
    <el-table :data="localData">
      <el-table-column v-for="key in Object.keys(localData[0])" :prop="key" :label="key" :key="key">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    name: "TreatmentList",
    data: function () {
    return { localData: [], } 
  },
    beforeRouteEnter: (to, from, next) => {
      console.log("enter TreatmentList");
      next(vm => {
        vm.getTreatmentList();
      })
    },
    methods:{
      getTreatmentList: function() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8001/wwz/treatmentController/all',
        }).then((resp) => {
          console.log(resp)
          this.localData = resp.data.data
        }).catch( (error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style></style>