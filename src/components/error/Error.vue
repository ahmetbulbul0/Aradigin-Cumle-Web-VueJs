<template>
    <div class="outError">
        <div class="inError">
            <div class="outCode">
                <span>{{ code }}</span>
            </div>
            <div class="outInformation">
                <span>{{ text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["code", "text"]);

</script>