<template>
  <div class="home-view">
    <p class=intro>Hello and welcome! I am Malin, a front-end web developer with over 8 years of experience working in digital marketing. You can find some of my work below, download my resumé <a href="#" target="_blank">here</a>, find me on <a href="https://www.linkedin.com/in/malinenestrom/" target="_blank">Linkedin</a> or <a href="#" target="_blank">get in touch</a>. Originally from Sweden, I've had the pleasure to live and work in both London and New York, and currently live in Los Angeles since 2017, soaking up the sun. Something something roller skates.</p>

    <div class="home__contact--linkedin">
      <a href="https://www.linkedin.com/in/malinenestrom/" target="_blank">
        <svg height="43.3492mm" width="43.3492mm" xml:space="preserve" viewBox="0 0 488 488">
          <g id="Layer_x0020_1">
            <g id="_445027624">
              <rect class="fil0" height="488" rx="53" ry="53" width="488"/>
              <path class="fil1" d="M329 389l61 0 0 0 0 -114c1,-15 -4,-39 -10,-52 -7,-14 -17,-23 -33,-28 -16,-5 -38,-6 -54,0 -12,4 -19,10 -27,19 -1,1 -2,2 -3,4 -1,1 -1,2 -2,2 -1,3 1,2 -2,2l0 -27 -57 0c-1,3 -1,192 0,195l59 0c1,-4 1,-80 1,-90 0,-30 3,-55 34,-56 33,-2 33,27 33,56 0,7 1,84 0,89zm-200 -290c-18,3 -33,18 -30,40 2,18 19,33 40,30 17,-3 32,-19 29,-40 -2,-17 -19,-33 -39,-30zm-25 291l59 0c1,-5 1,-41 1,-49 0,-47 0,-98 0,-145l-60 0 0 0 0 194z"/>
              <path class="fil2" d="M261 390l-59 0c-1,-3 -1,-192 0,-195l54 0 -98 -86c6,5 9,12 10,20 3,21 -12,37 -29,40 -10,1 -19,-2 -26,-7l33 34 18 0c0,47 0,98 0,145 0,8 0,44 -1,49l-59 0 99 98 233 0 52 -52 0 -108 -116 -117c3,4 6,8 8,12 6,13 11,37 10,52l0 114 0 0 -61 0c1,-5 0,-82 0,-89 0,-29 0,-58 -33,-56 -31,1 -34,26 -34,56 0,10 0,86 -1,90z"/>
              <path class="fil2" d="M270 210l-11 -11 0 23c3,0 1,1 2,-2l2 -2 3 -4c1,-2 2,-3 4,-4z"/>
            </g>
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style lang="scss">

  .home-view {
    background-color: #f0f0f0;
    padding: 3em 0;
  }

  .intro {
    width: 60%;
    margin: 1em auto;
  }
  .home__contact--linkedin {
    /* border: 1px solid red; */
    display: inline-block;
    transition: all 0.2s;

    svg {
      width: 2em;
      height: 2em;
    }
    .fil2 {
      fill: #2c3e50; //#025E91
    }
    .fil0 {
      fill: #34495e; //#0273B3;
    }
    .fil1 {
      fill: white;
    }

    &:hover {
      opacity: 0.75;

      .fil2 {
        fill: #025E91
      }
      .fil0 {
        fill: #0273B3;
      }
    }
  }

</style>
