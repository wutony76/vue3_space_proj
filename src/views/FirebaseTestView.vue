<template>
  <div class="firebase-test">
    <h1>Firebase 測試</h1>
    <section class="test-section">
      <h2>連線狀態</h2>
      <p :class="{ success: hasFirebase, error: statusError }">{{ statusMessage }}</p>
    </section>
    <section class="test-section">
      <h2>測試區</h2>
      <p>在此頁面可加入 Firebase Auth、Firestore、Realtime Database 等測試功能。</p>
      <p v-if="!hasFirebase && !statusError" class="hint">
        請在專案根目錄建立 <code>.env</code> 或 <code>.env.local</code>，並設定
        <code>VUE_APP_FIREBASE_*</code> 環境變數（見 <code>src/firebase.js</code>）。
      </p>
    </section>
  </div>
</template>

<script>
import { getApps } from 'firebase/app'
import '@/firebase'

export default {
  name: 'FirebaseTestView',
  data() {
    return {
      statusMessage: '檢查中…',
      hasFirebase: false,
      statusError: false
    }
  },
  mounted() {
    this.checkFirebase()
  },
  methods: {
    checkFirebase() {
      try {
        const apps = getApps()
        if (apps.length > 0) {
          this.hasFirebase = true
          this.statusMessage = 'Firebase 已初始化（已連線）'
        } else {
          this.statusMessage = '尚未設定 Firebase 設定檔（請設定 .env 中的 VUE_APP_FIREBASE_*）'
        }
      } catch (e) {
        this.statusError = true
        this.statusMessage = 'Firebase 載入失敗：' + (e.message || e)
      }
    }
  }
}
</script>

<style scoped>
.firebase-test {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.test-section {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.test-section h2 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.hint {
  color: #666;
  font-size: 0.9rem;
}

code {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 4px;
}

.success {
  color: #42b983;
  font-weight: 500;
}

.error {
  color: #e74c3c;
}
</style>
