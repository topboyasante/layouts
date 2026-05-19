<script setup lang="ts">
import NavItem from './nav-item.vue'
import Section from './section.vue'
import {
  PhBell,
  PhEnvelope,
  PhRocketLaunch,
  PhUser,
  PhCreditCard,
  PhBookOpen,
  PhSparkle,
  PhChartBar,
  PhGlobe,
  PhArchive,
  PhPaintBrush,
  PhMagnifyingGlass,
  PhFolder,
} from '@phosphor-icons/vue'
</script>

<template>
  <aside class="hidden md:flex flex-col w-56 shrink-0 border-r border-black/8 dark:border-white/8 bg-white dark:bg-[#0f0f0f] overflow-y-auto">
    <div class="px-2 pt-4 pb-6">
      <!-- Top links -->
      <NavItem label="Changelog"><PhBell :size="14" /></NavItem>
      <NavItem label="Contact support"><PhEnvelope :size="14" /></NavItem>

      <div class="my-3 border-t border-black/6 dark:border-white/6" />

      <Section title="Get Started">
        <template #icon><PhRocketLaunch :size="13" /></template>
        <NavItem label="Quickstart" :has-children="true"><PhRocketLaunch :size="14" /></NavItem>
        <NavItem label="Team members" :has-children="true"><PhUser :size="14" /></NavItem>
        <NavItem label="Billing & plans" :has-children="true"><PhCreditCard :size="14" /></NavItem>
      </Section>

      <Section title="Guides">
        <template #icon><PhBookOpen :size="13" /></template>
        <NavItem label="Writing with AI" :has-children="true"><PhSparkle :size="14" /></NavItem>
        <NavItem label="Smart suggestions" :has-children="true"><PhSparkle :size="14" /></NavItem>
        <NavItem label="Analytics" :has-children="true"><PhChartBar :size="14" /></NavItem>
      </Section>

      <Section title="Configuration">
        <template #icon><PhBookOpen :size="13" /></template>
        <NavItem label="Custom domains" :has-children="true"><PhGlobe :size="14" /></NavItem>
        <NavItem label="Content management" :has-children="true"><PhArchive :size="14" /></NavItem>
        <NavItem label="Appearance" :has-children="true"><PhPaintBrush :size="14" /></NavItem>
        <NavItem label="Search settings" :has-children="true"><PhMagnifyingGlass :size="14" /></NavItem>
        <NavItem label="Collections" :has-children="true"><PhFolder :size="14" /></NavItem>
      </Section>
    </div>
  </aside>
</template>
