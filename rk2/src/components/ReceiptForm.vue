<template>
  <form name="create-receipt" class="form" @submit.prevent="onSubmit()">
    <h2 class="form__title">Добавление рецепта</h2>
    <div class="form__input-block">
      <label for="description">Описание</label>
      <input v-model="description" type="text" id="description" ref="description" required/>
    </div>
    <div class="form__input-block">
      <label for="ingredients">Ингридиенты</label>
      <input v-model="ingredients" type="text" id="ingredients" ref="ingredients" required />
    </div>
    <div class="form__input-block image">
      <label for="image">Фото</label>
      <input type="file" id="image" ref="image" accept="image/jpeg" required @change=uploadImage />
    </div>

    <input type="submit" class="form__submit hoverable" />
  </form>
</template>

<script>
export default {
  props: ["receipts"],
  name: "ReceiptForm",
  methods: {
    onSubmit() {
      let newReceipt = {
          description: this.description,
          ingredients: this.ingredients,
          image: this.previewImage,
          id: this.receipts.length+1
      }

      this.$refs["description"].value = "";
      this.$refs["ingredients"].value = "";
      this.$refs["image"].value = "";

      this.$emit('receipt-added', newReceipt)
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },
  },
  data() {
    return {
        previewImage: null,
    };
  },
};
</script>

<style>
</style>