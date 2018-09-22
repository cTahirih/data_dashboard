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
          p.header__nav--text.my-0.column.small-8.text-right
            i.far.fa-user.px-2
            | Hola {{ name }}
          p.header__nav--icon.my-0.column.small-2.text-right
            i.far.fa-bell
          p.header__nav--icon.my-0.column.small-2.text-right
            i.fas.fa-bars.px-2
    .main.row
      | First page
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Rosa'
    }
  },

  mounted() {

  }
}
</script>

<style>
  @import '../static/css/layout.css'; 

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

  @media print, screen and (min-width: 40em) {
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


  }

  
</style>
