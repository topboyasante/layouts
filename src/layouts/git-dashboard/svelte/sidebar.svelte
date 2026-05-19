<script lang="ts">
  import {
    House,
    Folder,
    UsersThree,
    CheckSquare,
    GitMerge,
    ListChecks,
    Diamond,
    Code,
    Activity,
    ClockCounterClockwise,
    Desktop,
    Globe,
    Gear,
    Shield,
    Sparkle,
    Question,
    CaretLeft,
    CaretRight,
  } from '@phosphor-icons/svelte'

  let collapsed = $state(false)
</script>

{#snippet navItem(icon, label, active, hasChildren)}
  <button
    class="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] rounded-md transition-colors text-left
      {active
        ? 'bg-[#6b6cce] dark:bg-[#5b5cc0] text-white font-medium'
        : 'text-[#3c3c43] dark:text-white/65 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white'}"
  >
    <span class="shrink-0">{@render icon()}</span>
    <span class="flex-1">{label}</span>
    {#if hasChildren}<CaretRight size={11} class={active ? 'text-white/70' : 'opacity-35'} />{/if}
  </button>
{/snippet}

<!-- Icon snippets -->
{#snippet iconHouse()}<House size={15} />{/snippet}
{#snippet iconFolder()}<Folder size={15} />{/snippet}
{#snippet iconUsersThree()}<UsersThree size={15} />{/snippet}
{#snippet iconCheckSquare()}<CheckSquare size={15} />{/snippet}
{#snippet iconGitMerge()}<GitMerge size={15} />{/snippet}
{#snippet iconListChecks()}<ListChecks size={15} />{/snippet}
{#snippet iconDiamond()}<Diamond size={15} />{/snippet}
{#snippet iconCode()}<Code size={15} />{/snippet}
{#snippet iconActivity()}<Activity size={15} />{/snippet}
{#snippet iconClock()}<ClockCounterClockwise size={15} />{/snippet}
{#snippet iconDesktop()}<Desktop size={15} />{/snippet}
{#snippet iconGlobe()}<Globe size={15} />{/snippet}
{#snippet iconGear()}<Gear size={15} />{/snippet}
{#snippet iconShield()}<Shield size={15} />{/snippet}
{#snippet iconSparkle()}<Sparkle size={15} />{/snippet}
{#snippet iconQuestion()}<Question size={15} />{/snippet}

{#if collapsed}
  <aside class="hidden md:flex flex-col w-12 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e] items-center py-4">
    <button onclick={() => (collapsed = false)} class="p-2 rounded-md text-black/40 dark:text-white/40 hover:bg-black/8 dark:hover:bg-white/8">
      <CaretRight size={14} />
    </button>
  </aside>
{:else}
  <aside class="hidden md:flex flex-col w-52 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e]">
    <div class="px-3 pt-4 pb-2">
      <p class="text-[13px] font-semibold text-black dark:text-white">Your work</p>
    </div>

    <nav class="flex-1 overflow-y-auto px-2 space-y-0.5">
      {@render navItem(iconHouse, 'Home', true, false)}
      {@render navItem(iconFolder, 'Projects', false, false)}
      {@render navItem(iconUsersThree, 'Groups', false, false)}
      {@render navItem(iconCheckSquare, 'Work items', false, false)}
      {@render navItem(iconGitMerge, 'Merge requests', false, false)}
      {@render navItem(iconListChecks, 'To-Do List', false, false)}
      {@render navItem(iconDiamond, 'Milestones', false, false)}
      {@render navItem(iconCode, 'Snippets', false, false)}
      {@render navItem(iconActivity, 'Activity', false, false)}
      {@render navItem(iconClock, 'Import history', false, false)}
      {@render navItem(iconDesktop, 'Workspaces', false, false)}
      {@render navItem(iconGlobe, 'Environments', false, false)}
      {@render navItem(iconGear, 'Operations', false, false)}
      {@render navItem(iconShield, 'Security', false, true)}
    </nav>

    <div class="px-2 py-3 space-y-0.5">
      {@render navItem(iconSparkle, "What's new", false, false)}
      {@render navItem(iconQuestion, 'Help', false, false)}
      <button
        onclick={() => (collapsed = true)}
        class="w-full flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#3c3c43] dark:text-white/50 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white rounded-md transition-colors"
      >
        <CaretLeft size={13} />
        Collapse sidebar
      </button>
    </div>
  </aside>
{/if}
