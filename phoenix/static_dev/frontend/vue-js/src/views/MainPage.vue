<template>
    <AppHeader />
    <BlockAchievements />
    <AppFooter />
</template>

<script>

import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader';
import BlockAchievements from '@/components/BlockAchievements'

export default {
name: 'MainPage',
components: {
    AppHeader,
    BlockAchievements,
    AppFooter,
}
};
</script>

<style>
</style>
