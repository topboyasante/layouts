<script lang="ts">
  import {
    Tray,
    User,
    SquaresFour,
    Stack,
    DotsThree,
    CircleDashed,
    ArrowsClockwise,
    DownloadSimple,
    CaretDown,
    CaretRight,
    Question,
  } from '@phosphor-icons/svelte'

  let workspaceOpen = $state(true)
  let teamsOpen = $state(true)
  let teamExpanded = $state(true)
  let tryOpen = $state(false)
</script>

{#snippet navItem(icon, label, active, indent)}
  <button
    class="w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] transition-colors text-left
      {indent ? 'pl-6' : ''}
      {active
        ? 'bg-black/8 dark:bg-white/8 text-black dark:text-white'
        : 'text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}"
  >
    <span class="shrink-0 opacity-70">{@render icon()}</span>
    {label}
  </button>
{/snippet}

{#snippet sectionToggle(label, open, toggle)}
  <button
    onclick={toggle}
    class="w-full flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-black/35 dark:text-white/30 hover:text-black/60 dark:hover:text-white/50 transition-colors uppercase tracking-wide"
  >
    {#if open}<CaretDown size={10} weight="bold" />{:else}<CaretRight size={10} weight="bold" />{/if}
    {label}
  </button>
{/snippet}

<!-- Icon snippets -->
{#snippet iconTray()}<Tray size={14} />{/snippet}
{#snippet iconUser()}<User size={14} />{/snippet}
{#snippet iconSquaresFour()}<SquaresFour size={14} />{/snippet}
{#snippet iconStack()}<Stack size={14} />{/snippet}
{#snippet iconDotsThree()}<DotsThree size={14} />{/snippet}
{#snippet iconCircleDashed()}<CircleDashed size={14} />{/snippet}
{#snippet iconArrowsClockwise()}<ArrowsClockwise size={14} />{/snippet}
{#snippet iconDownloadSimple()}<DownloadSimple size={14} />{/snippet}

<aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
  <!-- Workspace header -->
  <div class="flex items-center gap-2 px-3 py-3">
    <div class="w-5 h-5 rounded bg-violet-500 flex items-center justify-center shrink-0">
      <span class="text-[9px] font-bold text-white leading-none">GO</span>
    </div>
    <span class="text-[13px] font-medium truncate flex-1">Google</span>
    <CaretDown size={12} class="shrink-0 opacity-40" />
  </div>

  <!-- Nav -->
  <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-3">
    <!-- Top-level -->
    <div class="space-y-0.5">
      {@render navItem(iconTray, 'Inbox', false, false)}
      {@render navItem(iconUser, 'My issues', true, false)}
    </div>

    <!-- Workspace -->
    <div>
      {@render sectionToggle('Workspace', workspaceOpen, () => (workspaceOpen = !workspaceOpen))}
      {#if workspaceOpen}
        <div class="mt-0.5 space-y-0.5">
          {@render navItem(iconSquaresFour, 'Projects', false, false)}
          {@render navItem(iconStack, 'Views', false, false)}
          {@render navItem(iconDotsThree, 'More', false, false)}
        </div>
      {/if}
    </div>

    <!-- Your teams -->
    <div>
      {@render sectionToggle('Your teams', teamsOpen, () => (teamsOpen = !teamsOpen))}
      {#if teamsOpen}
        <div class="mt-0.5">
          <button
            onclick={() => (teamExpanded = !teamExpanded)}
            class="w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors"
          >
            <div class="w-3.5 h-3.5 rounded-sm bg-violet-500/80 shrink-0"></div>
            <span class="flex-1 text-left">Google</span>
            {#if teamExpanded}<CaretDown size={10} class="shrink-0" />{:else}<CaretRight size={10} class="shrink-0" />{/if}
          </button>
          {#if teamExpanded}
            <div class="mt-0.5 space-y-0.5">
              {@render navItem(iconCircleDashed, 'Issues', false, true)}
              {@render navItem(iconSquaresFour, 'Projects', false, true)}
              {@render navItem(iconStack, 'Views', false, true)}
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <!-- Try -->
    <div>
      {@render sectionToggle('Try', tryOpen, () => (tryOpen = !tryOpen))}
      {#if tryOpen}
        <div class="mt-0.5 space-y-0.5">
          {@render navItem(iconDownloadSimple, 'Import issues', false, false)}
          {@render navItem(iconArrowsClockwise, 'Cycles', false, false)}
        </div>
      {/if}
    </div>
  </nav>

  <!-- Footer -->
  <div class="flex items-center gap-2 px-3 py-2">
    <button class="flex items-center justify-center w-6 h-6 rounded text-black/40 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors">
      <Question size={14} />
    </button>
    <button class="ml-auto text-[11px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5">
      Free plan
    </button>
  </div>
</aside>
