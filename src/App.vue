<template lang="pug">
  .dashboard.layout
    .header__nav.row
      .header__nav--right.column.show-for-large
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
        form.aside__form.active.hide-for-large     
          input.aside__form--input(placeholder="Buscar")
          i.fas.fa-search.px-2

        .aside__slider--content
          span.aside__slider-boxIcon
            i.fas.fa-star.aside__box--icon
          span         
            | Planner Board

        p.px-5 Filter by Board:

        .aside__slider--content(v-for="item in asideFilters")        
          input(type="checkbox", :id="item.id")         
          label(:for="item.id") {{ item.value }} 

    .main.column
      .row
        .column
          .aside__slider--content
            span.aside__slider-boxIcon
              i.fas.fa-star.aside__box--icon
            span         
              | Planner Board - Summary
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Rosa',
      showAsideMenu: false,
      asideFilters: [
        {
          id: 'first_filter',
          value: 'Planner Board'
        },
        {
          id: 'second_filter',
          value: 'Summary Board'
        },
        {
          id: 'third_filter',
          value: 'Internal Board'
        },
      ]
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
  @import '../static/css/form.css'; 

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

  .header__nav--left, 
  .header__nav--right  {
    padding: 5px 0;
  }

  .header__nav--input,
  .aside__form--input {    
    border: none;
    padding: 0;
  }

  .aside__form--input {
    width: 80%;
  }

  .header__nav--input {
    width: 90%;
  }

  .header__nav--form,
  .aside__form {
    border: 2px solid #f0f0f0;
    border-radius: 5px;
    padding: 5px;
  }
  
  .aside__form {
    min-width: 80%;
    margin: 5px;
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
    position: fixed;
    z-index: 10000;
    margin-top: 24px;
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

    .header__nav--rightText {
      padding: 5px 2px;
    }

    .header__nav--icon,
    .header__nav--text {
      font-size: 1.2em;
    }

    .aside__slider {
      min-width: 250px;
      min-height: 90vh;
      position: relative;
      margin-top: 0;
    }

    .main {
      min-height: 90vh;
    }
  }

  
</style>
