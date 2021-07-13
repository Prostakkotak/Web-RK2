<template>
  <div v-bind:class="{ wrapper: true, black: isBlack }">
    <header class="header">
      <div class="header__logo">
        <img src="" alt="logo" />
      </div>
      <nav>
        <ul class="header__menu">
          <li class="header__item"><a href="#">Главная</a></li>
          <li class="header__item"><a href="#">Страница</a></li>
          <li class="header__item"><a href="#">Ещё что-то</a></li>
        </ul>
      </nav>
      <button
        class="header__theme-switch"
        id="theme-switch"
        @click="isBlack = !isBlack"
      >
        Сменить тему
      </button>
    </header>

    <main class="main">
      <h1 class="main__title">Рецепты</h1>
      <div class="main__list-settings">
        <ul class="main__tags-list">
          <li class="main__tags-list-title"><h2>Категории</h2></li>
          <li class="main__tag hoverable">Мясо</li>
          <li class="main__tag hoverable">Рыба</li>
          <li class="main__tag hoverable">Курица</li>
        </ul>
        <ReceiptForm @receipt-added="addReceipt" :receipts="receipts" />
        <div class="main__sort-setting">
          <a class="active" href="#">По дате</a> /
          <a href="#">По популярности</a>
        </div>
      </div>
      <ReceiptList
        @receipt-completed="completeReceipt"
        @receipt-delete="deleteReceipt"
        v-bind:receipts="receipts"
      />
    </main>

    <footer class="footer">
      Васьковский Сергей Павлович, 201-322, 01.06.2021
    </footer>
  </div>
</template>

<script>
import ReceiptList from "./components/ReceiptList.vue";
import ReceiptForm from "./components/ReceiptForm.vue";
import store from "./store";

export default {
  name: "App",
  store: store,
  components: { ReceiptList, ReceiptForm },
  data() {
    return {
      isBlack: true,
      receipts: [
        {
          id: 1,
          description: "Описание блюда",
          ingredients: "Ингридиенты",
          image: "",
        },
      ],
    };
  },
  methods: {
    addReceipt(newReceipt) {
      this.receipts.push(newReceipt);
    },
    deleteReceipt(id) {
      for (let i = 0; i < this.receipts.length; i++) {
        if (id == this.receipts[i].id) {
          this.receipts.splice(i, 1);
        }
      }
    },
    completeReceipt(id) {
      for (let i = 0; i < this.receipts.length; i++) {
        if (id == this.receipts[i].id) {
          this.receipts[i].completed = !this.receipts[i].completed;
        }
      }
    },
  },
};
</script>

<style lang="scss">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.wrapper {
  background-color: var(--main-white);

  * {
    background-color: var(--main-white);
    color: var(--green-1);
    transition: 200ms;
  }
  *.hoverable:hover {
    color: var(--main-white);
    background-color: var(--green-1);
  }
}

.wrapper.black {
  background-color: var(--green-1);
  color: var(--main-white);
  border-color: var(--main-white);
  transition: 200ms;

  * {
    background-color: var(--green-1);
    color: var(--main-white);
    border-color: var(--main-white);
    transition: 200ms;
  }
  *.hoverable:hover {
    color: var(--green-1);
    background-color: var(--main-white);
  }
  .header__theme-switch:hover {
    background-color: var(--main-white);
    color: var(--green-1);
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --green-1: #1a535c;
  --green-2: #4ecdc4;
  --main-white: #f7fff7;
  --main-red: #ff6b6b;
  --main-yellow: #ffe66d;
}
 
@-webkit-keyframes flash {
  0% {  opacity: .3;  }
  100% { opacity: 1; }
}
@keyframes flash {
  0% { opacity: .3; }
  100% { opacity: 1;  }
}

.header {
  max-width: 1440px;
  padding: 0 2vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  &__item a {
    display: block;
    font-size: 1.2rem;
    padding: 10px 15px;
    text-decoration: none;
    color: var(--green-1);
    transition: 200ms;

    &:hover {
      background-color: var(--green-1);
      color: var(--main-white);
    }
  }

  &__menu {
    display: flex;
  }
}

.wrapper.black .header__item a:hover {
  color: var(--green-1);
  background-color: var(--main-white);
}

.header__theme-switch {
  padding: 5px;
  color: var(--green-1);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border: 1px solid var(--green-1);
  border-radius: 4px;
  background-color: transparent;
  text-transform: uppercase;
  transition: 200ms;
  cursor: pointer;
}

.header__theme-switch:hover {
  color: var(--main-white);
  background-color: var(--green-1);
  transition: 200ms;
}

.main {
  margin: 0 auto;
  max-width: 1440px;
  min-height: 89vh;
}

.main__title {
  padding: 20px 0;
  font-size: 2rem;
  text-align: center;
}

.main__list-settings {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main__tags-list {
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 2vw;
  width: 49%;
}

.main__tags-list h2,
.form__title {
  padding-bottom: 20px;
  font-size: 1.5rem;
  width: 100%;
}

.form {
  box-sizing: border-box;
  padding: 2vw;
  width: 50%;
  text-align: right;
  input {
    border-radius: 4px;
    padding: 5px;
    border: 1px solid;
  }
  label {
    margin-right: 10px;
  }
}

.main__tags-list-title {
  width: 100%;
}

.form__input-block {
  margin: 10px 0;
}

.form__input-block.image {
  input {
    border: 0;
  }
}

.form__submit {
  cursor: pointer;
  max-width: 250px;
  width: 100%;
}

.main__tag {
  margin: 3px;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
}

.main__sort-setting {
  padding: 0 2vw;
}

.main__sort-setting a.active {
  text-decoration: none;
}

.main__receipts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 20px 2vw 100px 2vw;
}

.receipt {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: inherit;
  margin: 10px 0;
  padding: 32px 5px 5px 5px;
  border: 1px solid;
  border-radius: 4px;

  &_completed {
    animation: flash 1s;
  }

  &__image {
    width: 90%;
    padding: 0;
    margin-bottom: 20px;
  }

  &__description {
    text-align: center;
  }

  &__delete {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    border-bottom: 1px solid var(--green-1);
    border-left: 1px solid var(--green-1);
    transition: 200ms;
    cursor: pointer;

    &:hover {
      background-color: transparent;
    }
  }

  &__complete-switcher {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  &__completed {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
  }
}

.receipt__image {
  display: block;
  padding-right: 20px;
  max-width: 300px;
}

.receipt {
  p {
    margin-bottom: 20px;
  }
}

.receipt__ingredients li {
  display: inline-block;
}

.receipt__ingredients li::after {
  content: ",";
}

.footer {
  padding: 50px 0;
  border-top: 1px solid;
  text-align: center;
}

@media screen and (max-width: 640px) {
  .header__menu {
    flex-direction: column;
    text-align: center;
  }

  .main__list-settings {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main__tags-list {
    width: 100%;
    margin-bottom: 50px;
    justify-content: center;

    &-title {
      text-align: center;
    }
  }

  .form {
    margin-bottom: 100px;
    text-align: center;
    width: 100%;
  }

  .form__input-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      margin-bottom: 10px;
    }
  }

  .header {
    flex-direction: column;
    border-bottom: 1px solid rgba(#fff, 0.2);
    padding-bottom: 10px;

    nav {
      margin: 20px 0;
    }
  }

  .main {
    padding-top: 40px;
  }

  .main__receipts {
    display: block;
  }
}
</style>
