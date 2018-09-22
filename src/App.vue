<template lang="pug">
  .dashboard.layout
    .header__nav.row
      .header__nav--right.column
        .row
          p.header__nav--rightText.header__nav--text.medium-2.my-0.px-2.text-right Board
          form.header__nav--form.medium-10       
            input.header__nav--input(placeholder="Buscar reportes")
            i.fas.fa-search.px-2
      .header__nav--left.column
        .row
          p.header__nav--text.name.my-0.column.small-8
            i.far.fa-user.px-2
            | Hola {{ name }}
          p.header__nav--icon.my-0.column.small-2.text-right
            i.far.fa-bell
          p.header__nav--icon.my-0.column.small-2.text-right
            i.fas.fa-bars.px-2(
              @click="showAsideMenu = true",
              :class="[showAsideMenu == true ? 'is-hide': '']"
            )
            i.far.fa-window-close( 
              @click="showAsideMenu = false",
              :class="[showAsideMenu == true ? '': 'is-hide']"
            )
    transition(name="fade")
      aside.aside__slider.active(v-show="showAsideMenu")
        .aside__slider--content
          span.aside__slider-boxIcon
            i.fas.fa-star.aside__box--icon
          span         
            | Planner Board
        p Filter by Board
        .aside__slider--content
          input(type="checkbox")         
          label Planner Board 
        .aside__slider--content
          input(type="checkbox")
          label Summary Board
        .aside__slider--content
          input(type="checkbox")
          label Internal Board
    .main.column
      | First page
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Rosa',
      showAsideMenu: false
    }
  },

  mounted() {
  
  },

  methods: {

  }
}
</script>

<style>
  @import '../static/css/layout.css'; 

  .active {
    display: block;
  }

  .is-hide {
    display: none;
  }

  .name {
    text-align: left;
  }

  .header__nav {
    background: #fff;
    padding: 10px;
  }

  .header__nav--right {
    display: none;
  }

  .header__nav--left, .header__nav--right  {
    padding: 5px 0;
  }
  
  .aside__slider-boxIcon {
    background-color: #0079bf;
    border-radius: 5px;
    padding: 3px;
    width: 26px;
  }

  .aside__box--icon {
    color: white;
  }

  .aside__slider {
    min-width: 100px;
    background: white;
    border-top: 2px solid orangered;
    min-height: 100vh;
  }

  .aside__slider--content {
    padding: 15px 4px;
  }

  .main {
    min-height: 100vh;
  }

  @media print, screen and (min-width: 40em) {
    .name {
      text-align: right;
    }

    .header__nav--right {
      display: block;
    }

    .header__nav--rightText {
      padding: 5px 2px;
    }

    .header__nav--icon,
    .header__nav--text {
      font-size: 1.2em;
    }

    .header__nav--form {
      border: 2px solid #f0f0f0;
      border-radius: 5px;
      padding: 5px;
    }

    .header__nav--input {
      width: 90%;
      border: none;
      padding: 0;
    }

    .aside__slider {
      min-width: 250px;
      min-height: 90vh;
    }

    .main {
      min-height: 90vh;
    }
  }

  
</style>
