<script setup>
// import Markdoc from '@markdoc/markdoc'
// import render from 'vue-markdoc'

import Markdoc from '@markdoc/markdoc'
import Content from '../content/Content.md'

const html = Markdoc.renderers.html(Content)
</script>

<template >
  <div v-html="html" />
  <p class="bg-orange-600">sda</p>
</template>


<!-- 
<script setup>
import Markdoc from '@markdoc/markdoc'
import render from 'vue-markdoc'

const doc = `
# Getting started

Run this command to install the Markdoc library:
`

const ast = Markdoc.parse(doc)
const content = Markdoc.transform(ast)

const ContentComponent = render(content)
</script>

<template>
  <ContentComponent />
</template> -->