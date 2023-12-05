<script setup lang="ts">
const posts = useDocuments('~/pages')
</script>

<template>
  <h1>Posts</h1>
  <article v-for="post of posts">
    <h2>
      <a :href="post.href">{{ post.title }}</a>
    </h2>
    <time v-if="post.date" :datetime="post.date.toISOString()">{{ post.date }}</time>
    <code>{{ post }}</code>
  </article>
</template>
