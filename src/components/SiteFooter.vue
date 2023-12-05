<script setup lang="ts">
  import site from '@/site'
  const footerPages = [
    "about",
    "contact",
    "impress",
    "privacy",
  ]

  const docs = useDocuments('~/pages')
  console.log(docs)
  var pages = {}
  for (const page in docs) {
    console.log(page)
    // if (footerPages.includes(page.slug)) {
      pages[page.href] = page
    // }
  }
  
</script>

<template>

<footer class="px-4 py-16 sm:px-6 lg:px-8 bg-white">

  {{ pages }}

    <div class="mt-8 border-t border-gray-200 pt-8">
      <div class="sm:flex sm:justify-between">
        <p class="text-xs text-gray-500">
          {{ site.title }} – {{ site.description }}
        </p>

        <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="/impress" class="text-gray-500 transition hover:opacity-75">
              Impress 
            </a>
          </li>
          <li>
            <a href="/privacy" class="text-gray-500 transition hover:opacity-75">
              Privacy
            </a>
          </li>
        </ul>

      </div>
    </div>
</footer>
</template>
