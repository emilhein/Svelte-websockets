
<script>
import store from './../store.js'
import { onMount } from 'svelte';

let eventsFromServer = []

onMount(async () => {
  store.subscribe(currentMessages => {
    eventsFromServer = [...eventsFromServer, currentMessages]
  })
})


</script>
<div>
<button on:click="{store.start}">
    Click me
  </button>
	{#each eventsFromServer as event}
 <div
    id="slider"
    class="slide-in orange"
    v-for="event in eventsFromServer"
    :key="event.time"
  >
    <ul>
      <p>
        { new Date(event.time).toISOString() }
      </p>
      <li>
        { event.data }
      </li>
    </ul>
  </div>
  	{/each}
</div>

