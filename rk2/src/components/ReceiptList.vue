<template>
  <ul class="main__receipts">
    <Receipt @receipt-completed="onReceiptCompleted" @receipt-delete="onReceiptDelete" v-for="receipt in receipts" v-bind:data="receipt" :key="receipt" />
  </ul>
</template>

<script>
import Receipt from './Receipt.vue'

export default {
  props: ["receipts"],
  name: "ReceiptList",
  components: {Receipt},
  methods: {
      onReceiptDelete(id) {
          console.log(id)
          this.$emit('receipt-delete', id)
      },
      onReceiptCompleted(id) {
          this.$emit('receipt-completed', id)
      }
  }
};
</script>

<style>
</style>