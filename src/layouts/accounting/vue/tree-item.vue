<script setup lang="ts">
import { ref } from 'vue'
import { PhCaretDown, PhCaretRight } from '@phosphor-icons/vue'

const props = defineProps<{
  label: string
  active?: boolean
  badge?: number
  hasChildren?: boolean
  defaultOpen?: boolean
}>()

const open = ref(props.defaultOpen ?? false)
</script>

<template>
  <div>
    <button
      @click="hasChildren && (open = !open)"
      :class="[
        'w-full flex items-center gap-1.5 px-2 py-1.25 rounded-md text-[13px] transition-colors text-left group',
        active
          ? 'text-black dark:text-white font-semibold'
          : 'text-black/65 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white',
      ]"
    >
      <template v-if="hasChildren">
        <PhCaretDown v-if="open" :size="11" class="shrink-0 text-black/30 dark:text-white/30" />
        <PhCaretRight v-else :size="11" class="shrink-0 text-black/30 dark:text-white/30" />
      </template>
      <span v-else class="w-2.75 shrink-0" />
      <span class="shrink-0 text-black/40 dark:text-white/30">
        <slot name="icon" />
      </span>
      <span class="flex-1 truncate">{{ label }}</span>
      <span
        v-if="badge !== undefined"
        class="ml-auto shrink-0 min-w-4.5 h-4.5 px-1 rounded-full bg-orange-500 text-white text-[10px] font-medium flex items-center justify-center"
      >
        {{ badge }}
      </span>
    </button>
    <div v-if="hasChildren && open" class="mt-0.5 ml-3">
      <slot />
    </div>
  </div>
</template>
