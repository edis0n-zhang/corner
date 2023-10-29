<script>
 import { blogContent } from './blogContent.js';

 export let blog;
</script>

<style>
 .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
 }

 .blog-item {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 }
</style>

<div class="blog-grid">
 {#each blog as item}
 <div class="blog-item">
    <h2>{item.title}</h2>
    <p>{item.content}</p>
 </div>
 {/each}
</div>
