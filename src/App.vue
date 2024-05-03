<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProfileCard from '@/components/ProfileCard.vue';
import ResumeCard from '@/components/ResumeCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import LanguageCard from './components/LanguageCard.vue';
import AboutCard from './components/AboutCard.vue';

import { useThemeStore } from '@/stores/ThemeStore';
import { useResumeStore } from '@/stores/ResumeStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

onMounted(() => {
  const theme = useThemeStore();
  theme.loadTheme();
  const resume = useResumeStore();
  resume.loadResume();
  if ('locale' in localStorage) {
    locale.value = localStorage.locale;
  }
});
</script>

<template>
  <main class="container mx-auto max-w-6xl px-4 py-4">
    <div class="gap-5 sm:grid lg:grid-cols-3">
      <div class="space-y-5">
        <ProfileCard />
        <ResumeCard />
        <InfoCard />
        <SkillCard />
        <LanguageCard />
      </div>
      <div class="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
        <AboutCard />
        <RouterView />
      </div>
    </div>
  </main>
</template>
