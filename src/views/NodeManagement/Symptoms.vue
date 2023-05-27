<template>
  <div>
    <h1>symptoms</h1>
    <el-table :data="localData">
      <el-table-column v-for="key in Object.keys(localData[0])" :prop="key" :label="key" :key="key">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    name: "SymptomList",
    data: function () {
    return { localData: [], } 
  },
    beforeRouteEnter: (to, from, next) => {
      console.log("enter SymptomList");
      next(vm => {
        vm.getSymptomList();
      })
    },
    methods:{
      getSymptomList: function() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8001/wwz/symptomController/all',
        }).then((resp) => {
          console.log(resp)
          this.localData = resp.data.data
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style></style>