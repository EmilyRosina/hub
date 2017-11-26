<template>
  <main-layout id="Skills">
    <sl-row flex noGutters class="points-row">
      <sl-col col="2" flex class="points-col" align="center" justify="end" v-for="point in treehouse.points" :key="point.skill">
        <p class="skill">{{point.skill}}</p>
        <p :class="['points', { 'high': highPoints(point.points) }, { 'mid': midPoints(point.points) }, { 'low': lowPoints(point.points) }]">{{point.points}}</p>
      </sl-col>
    </sl-row>
    <sl-row flex noGutters class="wrapper-badges">
      <sl-col flex col="2" justify="center" align="center" style="height: 5rem; padding: 0.5em; margin: 0.5em; border: 2px solid black; background-color: rgba(0,0,0,0.9); border-radius: 0.5em;" v-for="badge in treehouse.badges" :key="badge.id">
          <sl-row flex noGutters style="width: 100%;">
            <sl-col noGutters col="4"><a :href="badge.url"><img :src="badge.icon_url" style="max-height: 62.5px; max-width: 62.5px;" /></a></sl-col>
            <sl-col noGutters col="8" align="center"><a :href="badge.url"><span style="display: inline-block; font-size: 0.8rem; color: #eee;">{{ badge.name }}</span></a></sl-col>
          </sl-row>
      </sl-col>
    </sl-row>
  </main-layout>
</template>

<script>
  import mainLayout from '@/layouts/MainLayout'
  export default {
    components: {
      mainLayout
    },
    methods: {
      highPoints (points) {
        return points >= 1500
      },
      midPoints (points) {
        return points >= 500 && points < 1500
      },
      lowPoints (points) {
        return points >= 80 && points < 500
      }
    },
    computed: {
      treehouse () {
        return {
          badges: this.$store.state.treehouse.badges,
          points: this.$store.state.treehouse.points !== null ? this.$store.state.treehouse.points.filter(x => x.skill !== 'total') : null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .points-row {
   width: 100%;
   margin: 4em;
 }
  .points-col {
    color: white;
    text-align: center;
    height: 5em;
    justify-content: space-between;
  }

  .skill {
    font-size: 0.75rem;
    font-weight: 600;
    text-shadow: 3px 3px 10px rgba(0,0,0,0.9);
    color: skyblue;
    margin-bottom: 0.25rem;
    align-self: flex-start;
    text-align: left;
  }
  .points {
    font-size: 1.75rem;
    font-weight: 200;
    margin-top: auto;
    background-color: rgba(0,0,0,0.25);
    width: 100%;
    border-radius: 1em;
    &.high {
      color: lime;
    }
    &.mid {
      color: lightseagreen;
    }
    &.low {
      color: palegoldenrod;
    }
  }

  .wrapper-badges {
    justify-content: center;
  }
</style>
