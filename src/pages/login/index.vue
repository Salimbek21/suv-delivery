<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface IUserForm {
  username: string
  password: string
}

const router = useRouter()
const store = useLoginStoreWithOut()

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<IUserForm>({
  username: '',
  password: ''
})

const rules = reactive<FormRules<IUserForm>>({
  username: [{ required: true, message: 'Логин обязательно', trigger: 'blur' }],
  password: [{ required: true, message: 'Пароль обязательно', trigger: 'change' }]
})

function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      await store.setUser(ruleForm)
      await router.push('/')
    } else {
      return false
    }
  })
}

function forceLower(event: any) {
  ruleForm.username = event.target.value.toLowerCase()
}

onMounted(() => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) router.push('/')
})
</script>

<template>
  <div class="login">
    <div class="loginLeftBlock">
      <div class="loginCopyright">
      </div>
    </div>

    <div class="loginRightBlock">
      <div class="loginLogo" />

      <div class="loginBox">
        <div class="loginBoxTitle">Suv-Delivery Dashboard</div>

        <div class="loginBoxWelcome">Добро пожаловать!</div>

        <div class="loginBoxSystemText">Войти в систему</div>

        <ElForm
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-position="top"
          class="w-full max-w-[425px]"
        >
          <ElFormItem class="!mb-[20px]" label="Логин" prop="username">
            <TheInput
              v-model="ruleForm.username"
              class="gray"
              placeholder="admin"
              type="text"
              autocomplete="on"
              @keyup="forceLower"
            />
          </ElFormItem>

          <ElFormItem class="!mb-[30px]" label="Пароль" prop="password">
            <TheInput
              v-model="ruleForm.password"
              class="gray"
              placeholder="••••••••••••"
              type="password"
              autocomplete="on"
              show-password
              @keydown.enter="submitForm(ruleFormRef)"
            />
          </ElFormItem>

          <ElFormItem>
            <TheButton
              class="w-full"
              type="primary"
              @click="submitForm(ruleFormRef)"
              :loading="store.loading"
            >
              Войти
            </TheButton>
          </ElFormItem>
        </ElForm>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.loginLogo {
  mask: url('/src/assets/OQ-logo.svg') no-repeat center / 100%;
  -webkit-mask: url('/src/assets/OQ-logo.svg') no-repeat center / 100%;
  background-color: #000000;
  position: absolute;
  width: 94px;
  height: 50px;
  top: 50px;
  left: 50px;
}

.loginLeftBlock {
  background: url('/src/assets/login-bg.svg') no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginRightBlock {
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.loginBoxTitle {
  font-size: 24px;
  color: #000000;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 17px;
}

.loginBoxWelcome {
  color: #000000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 25px;
}

.loginBoxSystemText {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 40px;
}

.loginCopyright {
  position: absolute;
  bottom: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

@media screen and (max-width: 991px) {
  .login {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 24px;
  }
  .loginLeftBlock {
    display: none;
  }

  .loginLogo {
    left: 0;
    right: 0;
    top: 80px;
    margin: auto;
  }
}
</style>
