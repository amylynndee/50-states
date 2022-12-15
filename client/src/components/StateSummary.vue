<!--  this is part 2 in lab 14 - this will display all visited states -->

<template>
    <div>
        <p>There are a total of {{ states.length }} states and the District of Columbia</p> 
        <p>You have visited {{ totalVisited }} {{ units }} </p>      
        <p id="all-visited-message" v-if="AreAllVisited">You have visited all of the states and the District of Columbia</p>

        
  </div> 

</template>

<script>
export default {
    name: 'StateSummary',
    props: {                        // props - you list the data type, which is Arrays
        states: Array,

    },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach( state => { 
               if (state.visited) {
                    visitedCount++                      // this counts the total states visited
               }
            })
            return visitedCount
        },
        units() {
            if (this.totalVisited == 1) {
                return 'state'
            } else {
                return 'states'
            }
        },
        AreAllVisited() {
            return this.totalVisited === this.states.length             // this will return true if all states have been visited
        }
    }
}

</script>

<style>

#all-visited-message {
    color: purple;
    font-weight: 600;
}
</style>