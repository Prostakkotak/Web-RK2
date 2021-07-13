<template>
  <li :class="{receipt: true, 'receipt_completed': data.completed}">
      <img class="receipt__image" :src="data.image" alt="Фото" />
      <div class="receipt__description">
        <p>{{data.description}}</p>

        <div class="receipt__ingredients">
          {{data.ingredients}}
        </div>
      </div>

      <div class="receipt__delete" @click="$emit('receipt-delete', data.id)">Удалить</div>
      <div class="receipt__completed" v-if="data.completed"> (Уже был приготовлен)</div>
      <div class="receipt__complete-switcher" @click="$emit('receipt-completed', data.id)">&check;</div>
    </li>
</template>

<script>
export default {
    props: ['data'],
    name: 'Receipt',
}
</script>

<style>

</style>