<template>
    <div :class="['tao-border']" :style="borderStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tao-border',
    props: {
        color: {
            type: String,
            default: '#000'
        },
        width: {
            type: [Number , String],
            default: 1
        },
        borderType: {
            type: String,
            default: 'solid'
        },
        radius: {
            type: [Number , String],
            default: 0
        }
    },
    computed: {
        borderStyle() {
            return {
                borderColor: this.color,
                borderWidth: `${this.width}px`,
                borderStyle: this.borderType,
                borderRadius: `${this.radius}px`
            };
        }
    }
}
</script>

<style scoped>
.tao-border{
    padding: 8px;
    display: inline-block;
}
</style>