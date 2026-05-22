<script lang="ts">
  export let data: number[]
  export let extraClass = ''

  const W = 110
  const H = 32

  $: min = Math.min(...data)
  $: max = Math.max(...data)
  $: range = (max - min) || 1
  $: step = W / (data.length - 1)
  $: points = data
    .map((v, i) => `${i * step},${H - ((v - min) / range) * H}`)
    .join(' ')
</script>

{#if data.length > 0}
  <svg viewBox="0 0 {W} {H}" preserveAspectRatio="none" class="w-full h-full {extraClass}">
    <polyline {points} fill="none" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{/if}
