<script setup lang="ts">
import {computed, ref} from 'vue';
import ExperienceCardItem from './ExperienceCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
import MyPaginate from "@/components/MyPaginate.vue";

const itemsPerPage = 2;
const currentPage = ref(1);
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const total = computed(() => {
  return resume.value.externalExperience.length;
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return resume.value.externalExperience.slice(start, end);
});

function onPageChange(page: number) {
  currentPage.value = page;
}
</script>
<template>
  <div class="card">
    <h2 class="mb-5 text-lg font-semibold dark:text-night-50">{{ $t('externalExperience') }}</h2>
    <ExperienceCardItem
      v-for="(item, index) in paginatedItems"
      :key="index"
      :item="item"
      :separator="paginatedItems.length > index + 1">
    </ExperienceCardItem>
    <!-- Paginate  -->
    <MyPaginate :totalItems="total" :itemsPerPage="itemsPerPage" :maxVisibleButtons="3" @pagechanged="onPageChange" />
  </div>
</template>
