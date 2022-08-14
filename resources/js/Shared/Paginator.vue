<template>
     <div class="card-footer d-flex align-items-center">
        
        <p class="m-0 text-muted">
            Prikazano 
            <span v-text="dataSet.from"></span> 
            do 
            <span v-text="dataSet.to"></span>
             od 
             <span v-text="dataSet.total"></span> 
            stavki
        </p>

        <ul class="pagination m-0 ms-auto" v-if="isPagination">
           
            <li v-for="link in links" class="page-item" :class="{ 'active': link.active, 'disabled': ! link.url }">
                <a href="#" @click.prevent="changePage(link.url)" tabindex="-1" :aria-disabled="link.url ? 'false' : 'true' " class="page-link">
                    <span v-html="link.label"></span>
                </a>
            </li>
        </ul>
    </div> 
</template>

<script setup>
    import { computed } from "vue";

    let props = defineProps({
        dataSet: {
            type: Object, 
            default: {}
        },
        form: Object,
    });

    const emit = defineEmits(['page_changed']);

    let links = computed(() => {
        return props.dataSet.links;
    });

    let isPagination = computed(() => {
        return props.dataSet.per_page < props.dataSet.total;
    })

    let changePage = (url) => {
        url = new URL(url);
        props.form.page = (new URLSearchParams(url.search)).get('page');
        emit('page_changed');
    }

</script>
