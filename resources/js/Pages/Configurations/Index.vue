<template>
    <div class="container-xl">
        <div class="row row-cards">
            <configuration-item  :values="configuration.values" :section="section" :formConfig="configuration.field_config[section]" :translation="translation[section]" :title="translation[section]['section:name']" v-for="(settings, section) in configuration.field_config" :key="section"></configuration-item>

        </div>
    </div>
</template>

<script setup>
import ConfigurationItem from "@/Shared/ConfigurationItem";

defineProps({
    configuration: Object,
    translation: Object,
})
</script>