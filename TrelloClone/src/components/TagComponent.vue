<script setup>
import { computed } from 'vue'
import convert, { hsl } from 'color-convert'

const props = defineProps({
    color: {
        type: String,
        default: '#579dff'
    },
    content: {
        type: String,
        default: 'This is content'
    }
})

const textColor = computed(() =>{
    // remove # from the hex code for the converter 
    const color = props.color.replace('#', "");
    let hslColor = convert.hex.hsl(color)

    // If the color is to dark, makes the text white
    if(hslColor[2] < 40){
        return "#ffffff"
    }

    // HSL is hue, saturation, lightness. The converter returns an array of 3 integers. corresponding to hue, saturation and lightness. Reducing [1] and [2] makes the color darker
    hslColor[1] -= 15;
    hslColor[2] -= 40;
    return "#" + convert.hsl.hex(hslColor)
    
})

const styleObject = {
    backgroundColor: props.color,
    color: textColor.value
}


</script>

<template>
    <div :style="styleObject">
        <p>{{ content }}</p>
    </div>
</template>

<style scoped>
p {
    margin: 0;
}
div {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    min-width: 48px;
    max-width: 100%;
    margin-bottom: 0;
    padding: 0 12px;
    overflow: hidden;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>