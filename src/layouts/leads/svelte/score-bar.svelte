<script lang="ts">
  export let score: number // 0-10

  function colorFor(s: number): string {
    if (s >= 8) return 'bg-emerald-500'
    if (s >= 6) return 'bg-yellow-400'
    if (s >= 4) return 'bg-amber-500'
    return 'bg-rose-500'
  }

  $: fill = colorFor(score)
</script>

<div class="flex items-center gap-2">
  <div class="flex items-center gap-[2px]">
    {#each Array(10) as _, i}
      <span
        class="block w-[3px] h-3.5 rounded-[1px] {i < score ? fill : 'bg-black/[0.08] dark:bg-white/[0.1]'}"
      />
    {/each}
  </div>
  <span class="text-[12px] text-black/45 dark:text-white/45 tabular-nums">{score}/10</span>
</div>
