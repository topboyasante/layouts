<script lang="ts">
  import {
    Bell,
    Envelope,
    RocketLaunch,
    User,
    CreditCard,
    BookOpen,
    Sparkle,
    ChartBar,
    Globe,
    Archive,
    PaintBrush,
    MagnifyingGlass,
    Folder,
    CaretRight,
  } from '@phosphor-icons/svelte'
</script>

{#snippet navItem(icon, label, hasChildren)}
  <button class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] text-black/65 dark:text-white/55 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors text-left">
    <span class="shrink-0 text-black/40 dark:text-white/35">{@render icon()}</span>
    <span class="flex-1">{label}</span>
    {#if hasChildren}<CaretRight size={11} class="opacity-35 shrink-0" />{/if}
  </button>
{/snippet}

{#snippet sectionHeader(icon, title)}
  <div class="flex items-center gap-2 px-3 mb-1">
    <span class="text-black/35 dark:text-white/30">{@render icon()}</span>
    <span class="text-[11px] font-semibold tracking-wider text-black/40 dark:text-white/35 uppercase">{title}</span>
  </div>
{/snippet}

<!-- Icon snippets -->
{#snippet iconBell()}<Bell size={14} />{/snippet}
{#snippet iconEnvelope()}<Envelope size={14} />{/snippet}
{#snippet iconRocket()}<RocketLaunch size={14} />{/snippet}
{#snippet iconRocketSm()}<RocketLaunch size={13} />{/snippet}
{#snippet iconUser()}<User size={14} />{/snippet}
{#snippet iconCreditCard()}<CreditCard size={14} />{/snippet}
{#snippet iconBookSm()}<BookOpen size={13} />{/snippet}
{#snippet iconSparkle()}<Sparkle size={14} />{/snippet}
{#snippet iconChartBar()}<ChartBar size={14} />{/snippet}
{#snippet iconGlobe()}<Globe size={14} />{/snippet}
{#snippet iconArchive()}<Archive size={14} />{/snippet}
{#snippet iconPaintBrush()}<PaintBrush size={14} />{/snippet}
{#snippet iconMagnifyingGlass()}<MagnifyingGlass size={14} />{/snippet}
{#snippet iconFolder()}<Folder size={14} />{/snippet}

<aside class="hidden md:flex flex-col w-56 shrink-0 border-r border-black/8 dark:border-white/8 bg-white dark:bg-[#0f0f0f] overflow-y-auto">
  <div class="px-2 pt-4 pb-6">
    <!-- Top links -->
    {@render navItem(iconBell, 'Changelog', false)}
    {@render navItem(iconEnvelope, 'Contact support', false)}

    <div class="my-3 border-t border-black/6 dark:border-white/6"></div>

    <div class="mt-5">
      {@render sectionHeader(iconRocketSm, 'Get Started')}
      {@render navItem(iconRocket, 'Quickstart', true)}
      {@render navItem(iconUser, 'Team members', true)}
      {@render navItem(iconCreditCard, 'Billing & plans', true)}
    </div>

    <div class="mt-5">
      {@render sectionHeader(iconBookSm, 'Guides')}
      {@render navItem(iconSparkle, 'Writing with AI', true)}
      {@render navItem(iconSparkle, 'Smart suggestions', true)}
      {@render navItem(iconChartBar, 'Analytics', true)}
    </div>

    <div class="mt-5">
      {@render sectionHeader(iconBookSm, 'Configuration')}
      {@render navItem(iconGlobe, 'Custom domains', true)}
      {@render navItem(iconArchive, 'Content management', true)}
      {@render navItem(iconPaintBrush, 'Appearance', true)}
      {@render navItem(iconMagnifyingGlass, 'Search settings', true)}
      {@render navItem(iconFolder, 'Collections', true)}
    </div>
  </div>
</aside>
