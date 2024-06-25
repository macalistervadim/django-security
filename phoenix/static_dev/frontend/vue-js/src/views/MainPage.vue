<template>
    <AppHeader />
    <BlockAchievements />
    <BlockFeedback />
    <AppFooter />
</template>

<script>

import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader';
import BlockAchievements from '@/components/BlockAchievements'
import BlockFeedback from '@/components/BlockFeedback.vue'

export default {
name: 'MainPage',
components: {
    AppHeader,
    BlockAchievements,
    BlockFeedback,
    AppFooter,
}
};
</script>

<style>
</style>
