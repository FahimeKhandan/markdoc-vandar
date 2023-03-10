// import vue from "@vitejs/plugin-vue";
// import MarkdocVue from "./markdocVue";
// import { sourceTransform } from "@baleada/rollup-plugin-source-transform";
// import Markdoc from "@markdoc/markdoc";
// import AutoImport from "unplugin-auto-import/vite";

// import {
//   renderCodeToHTML,
//   runTwoSlash,
//   createShikiHighlighter,
// } from "shiki-twoslash";
// import { v4 as uuid } from "uuid";
// import matter from "gray-matter";



// export default defineNuxtPlugin(nuxtApp => {
//     sourceTransform({
//         test: ({ id }) => id.endsWith(".md"),
//         transform: async ({ source }) => {
//           console.log('sdjfdkjdsfndkj');
          
//           const { data: frontmatter } = matter(source);
//           const ast = Markdoc.parse(source);
//           const replacers: Record<string, string> = {};
  
//           const highlighter = await createShikiHighlighter({
//             themes: ["monokai","solarized-dark","nord","solarized-light","min-light","dark-plus"],
//           });
//           const content = Markdoc.transform(ast, {
//             tags: {
//               A2aStorTable: {
//                 render: "A2aStorTable",
//                 attributes: {},
//               },
//               Attributes: {
//                 render: "Attributes",
//                 attributes: {
//                   title: {
//                     type: String,
//                     required: true,
//                   },
//                   details: {
//                     type: String,
//                   },
//                   importantInfo: {
//                     type: String,
//                   },
//                 },
//               },
//               collapsibleItem:{
//                 render:'CollapsibleItem',
//                 attributes: {
//                   title:{
//                     type:String,
//                     required:true
//                   },
//                   details: {
//                     type: String,
//                   },
//                   importantInfo: {
//                     type: String,
//                   },
//                 },
//               },
//               collapsibleParent:{
//                 render:'CollapsibleParent',
//                 attributes: {
//                 },
//               }
//             },
//             variables: {
//               frontmatter,
//             },
//             nodes: {
//               fence: {
//                 transform(node) {
//                   const twoslash = runTwoSlash(
//                     node.attributes.content,
//                     node.attributes.language,
//                     {}
//                   );
  
//                   const html = renderCodeToHTML(
//                     twoslash.code,
//                     node.attributes.language,
//                     { twoslash: true },
//                     { themeName: "min-light" },
//                     highlighter,
//                     twoslash
//                   );
  
//                   const id = uuid();
//                   replacers[id] = html;
  
//                   return id;
//                 },
//               },
//             },
//           });
  
//           const contentStr = JSON.stringify(content);
//           const replacerJson = JSON.stringify(replacers);
  
//           let sfc = `
//             <script setup>
//             import VueRenderer from 'vue-markdoc'
//             import { h, createApp, inject } from "vue";
        
  
//             const dd= ${contentStr} 
//             const replace= ${replacerJson} 
            
//             const props = defineProps(['components'])
//             const SFC = VueRenderer(dd, { components: props.components })
  
  
//             var ComponentApp = createApp({ 
//               setup () {
//                 return () => h(SFC, {})
//               }
//             })
  
//             const wrapper = document.createElement("div")
//             const myHtml= ComponentApp.mount(wrapper)
  
//             const withUnescapedHtml = (() => {
//               let withUnescapedHtml = wrapper.outerHTML;
    
//               for (const id in replace) {
//                 withUnescapedHtml = withUnescapedHtml.replace(id, replace[id]);
//               }
    
//               return withUnescapedHtml;
//             })();
  
//             </script>
        
//             <template>
//               <div v-html='withUnescapedHtml'></div>
//             </template>
//           `;
  
//           return sfc;
//         },
//       }),
//       vue({
//         include: [/\.vue$/, /\.md$/],
//       }),
//       MarkdocVue({
//         tags: {
//           callout: {
//             render: "Callout",
//             attributes: {},
//           },
//           A2aStorTable: {
//             render: "A2aStorTable",
//             attributes: {
//               title: {
//                 type: String,
//               },
//             },
//           },
//           Attributes: {
//             render: "Attributes",
//             attributes: {},
//           },
//         },
//       }),
//       AutoImport({
//         // targets to transform
//         include: [
//           /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
//           /\.vue$/,
//           /\.vue\?vue/, // .vue
//           /\.md$/ // .md
//         ],
  
//         // global imports to register
//         imports: [
//           // presets
//           "vue",
//           "vue-router",
//         ],
//         // Enable auto import by filename for default module exports under directories
//         defaultExportByFilename: false,
  
//         // Auto import for module exports under directories
//         // by default it only scan one level of modules under the directory
//         dirs: [
//           // './hooks',
//           // './composables' // only root modules
//           // './composables/**', // all nested modules
//           // ...
//         ],
  
//         // Filepath to generate corresponding .d.ts file.
//         // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
//         // Set `false` to disable.
//         dts: "./auto-imports.d.ts",
  
//         // Auto import inside Vue template
//         // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
//         vueTemplate: false,
  
//         // Custom resolvers, compatible with `unplugin-vue-components`
//         // see https://github.com/antfu/unplugin-auto-import/pull/23/
//         resolvers: [
//           /* ... */
//         ],
  
//         // Generate corresponding .eslintrc-auto-import.json file.
//         // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
//         eslintrc: {
//           enabled: false, // Default `false`
//           filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
//           globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
//         }
//       })
//   })