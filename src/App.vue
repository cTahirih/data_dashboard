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

      .row.main__header
        .main__header--box.row.small-6.medium-2(v-for="item in overview")
          .icon
            i(:class="`${item.iconClass}`")
          .info
            p.main__header--title.my-0 {{ item.title }}
            span.main__header--span {{ item.date }}
            p.main__header--textLarge.text-center.my-0 {{ item.total }}
      .row
        .column.small-12.medium-4
          .main__card.text-center
            i.fas.fa-3x.fa-chart-line
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
        .column.small-12.medium-4
          .main__card.text-center
            i.fas.fa-3x.fa-dollar-sign
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
        .column.small-12.medium-4
          .main__card.text-center
            i.fas.fa-3x.fa-chart-line
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.       
      .row
        .column.small-12.medium-4
          .main__card
            DonChart

        .column.small-12.medium-8
          .main__card
            LineChart          
</template>

<script>
import LineChart from "./components/LineChart.js"
import DonChart from "./components/DonutChart.js"

export default {
  name: 'App',
  components: {
    LineChart,
    DonChart
  }, 
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
      ],

      overview: [
        {
          id: 1,
          title: 'TOTAL CUSTOMERS',
          date: 'Last 7 days',
          iconClass: 'far fa-user px-2',
          total: 35
        },
        {
          id: 2,
          title: 'NEW QUOTES',
          date: 'Last 5 days',
          iconClass: 'far fa-user px-2',
          total: 23
        },
        {
          id: 3,
          title: 'WORK ORDERS',
          date: 'Last 2 days',
          iconClass: 'far fa-user px-2',
          total: 13
        },
        {
          id: 4,
          title: 'NEW INVOICES',
          date: 'Last 7 hours',
          iconClass: 'far fa-user px-2',
          total: 78
        },
        {
          id: 5,
          title: 'OPEN CASES',
          date: 'Last 7 days',
          iconClass: 'far fa-user px-2',
          total: 12
        },
        {
          id: 6,
          title: 'NEW CASES',
          date: 'Last 1 day',
          iconClass: 'far fa-user px-2',
          total: 10
        }                
      ],
      dataUpdates: ''
    }
  },
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
    top: 46px;
  }

  .aside__slider--content {
    padding: 15px 4px;
  }

  .main {
    min-height: 100vh;
  }

  .main__header {
    background-color: #44accf;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    color: white;    
  }

  .main__header--box {
    justify-content: center;
  }

  .main__header--title {
    font-weight: bold;
    font-size: 12px;
  }

  .main__header--span {
    font-size: 10px;
  }

  .main__header--textLarge {
    font-size: 45px;
  }

  .main__card {
    background: white;
    border-radius: 5px;
    padding: 4px 10px;
    margin: 2px;
  }

  .main__card--list {
    border-radius: 5px;
    border: 1px solid orange;
    margin: 3px 0;
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
      top: 0;
    }

    .main {
      min-height: 90vh;
    }
  }

  
</style>
