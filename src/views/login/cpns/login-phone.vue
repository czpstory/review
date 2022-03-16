<template>
  <div class="login-phone">
    <el-form>
      <el-form-item label="手机号">
        <el-input v-model="phone.cellnumber"> </el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="phone.verification"> </el-input>
          <el-button type="primary" class="get-auth"> 获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue'
export default defineComponent({
  setup() {
    const phone = reactive({
      cellnumber: '',
      verification: ''
    })
    return { phone }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  justify-content: center;
  .get-auth {
    margin-left: 10px;
  }
}
</style>
