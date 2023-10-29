<script>
    export let data;
</script>

<div class="response-box">
  {@html data}
  <section class="blog-grid">
  </section>

  <style>
    .blog-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    
    .grid-item {
      background: #f2f2f2;
      padding: 20px;
    }
    
    h2, h3 {
      color: #333;
    }
    
    ul {
      list-style: disc;
      padding-left: 20px;
    }
  </style>
</div>

<style>
.response-box {
    border: 1px solid black;
    padding: 10px;
    margin-top: 20px;
}
</style>

