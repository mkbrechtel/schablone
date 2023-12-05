<template>
  <SiteHeader />
  <div class="block md:flex">
    <nav id="md:flex-none">
      <SiteNavigation />
    </nav>
    <div class="w-full">
      <main class="container mx-auto prose px-6 py-4">
        <slot />
      </main>
    </div>
  </div>
  <SiteFooter />
</template>
