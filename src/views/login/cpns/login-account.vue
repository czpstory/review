<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="number">
        <el-input v-model="account.number"> </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import { rules } from '../config/login-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const account = reactive({
      number: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccount = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    }
    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
