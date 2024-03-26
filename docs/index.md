---
# https://vitepress.dev/reference/default-theme-home-page
theme: page
title: UniTech_Blog Archive
prev: false
next: false
---

<script setup>
  import {data as posts } from "./.vitepress/theme/posts.data.ts"
</script>

# ブログ記事アーカイブ

<br>

<article v-for="post of posts" class="home-posts-article">
  <p>
    <a :href="'/vitepress-myblog' + post.url" class="home-posts-article-title">{{ post.frontmatter.title }}</a>
  </p>
<div class="flex">
  <p>
    <a :href="'/vitepress-myblog' + post.url" >続きを読む</a>
  </p>
    <p class="home-posts-date">最新更新日:{{ post.frontmatter.date }}</p>
  </div>
</article>

<style>
.flex{
  display: flex;
  justify-content: space-between;
}
.home-posts-date{
  font-size: 12px;
}
.home-posts-article {
  border-top: 1px solid var(--vp-c-divider);
  justify-content: space-between;
  padding: 10px 0;
}

.home-posts-article p {
  margin: 10px 0;
}

.home-posts-article .home-posts-article-title {
  color: var(--vp-c-text-1);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none !important;
}
</style>
