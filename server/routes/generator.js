var express = require('express');
var router = express.Router();
const axios = require('axios'); // node
const svelte = require('svelte/compiler')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/generate', function(req, res, next) {

  let system = `
    You are a frontend web development expert who designs simple and beautiful
    websites for clients with little technical knowledge. The website is built
    with Svelte, and you are to design a blog page according to the user's
    specifications.

    You will write a Svelte component that represents a simple but beautiful blog.

    The layout of the page is a 3x3 grid, and you will write Svelte components
    that conform to this 3x3 grid layout. You must return the Svelte code in a
    single component.

    DO NOT EXPLAIN YOUR DESIGN DECISIONS.

    MOST IMPORTANTLY, YOU WILL ONLY GIVE THE CODE AS A SINGLE COMPONENT IN ONE FILE.
  `

  res.send(`
    <script>
      import BlogCard from './BlogCard.svelte';

      const blogPosts = [
        {
          title: 'First Blog Post',
          date: 'January 1, 2022',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur imperdiet urna, nec sagittis justo elementum et. Mauris enim mauris, convallis a justo et, cursus consequat est.'
        },
        {
          title: 'Second Blog Post',
          date: 'February 15, 2022',
          content: 'Aliquam hendrerit sagittis lacus, eu accumsan urna ultricies ut. Nulla interdum, nisl nec feugiat mollis, mi felis aliquet velit, sed ornare neque tortor sed augue.'
        },
        {
          title: 'Third Blog Post',
          date: 'March 28, 2022',
          content: 'Vivamus aliquet vel neque sit amet elementum. In eget justo dapibus, laoreet mauris sit amet, ullamcorper lorem. Morbi vel sem ligula. Integer id contigu.'</div></code></pre>
        },
      ];
    </script>

    <main>
      <div class="grid">
        {#each blogPosts as post}
          <BlogCard {post} />
        {/each}
      </div>
    </main>

    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    </style>
  `)

  return;

  axios.post(process.env.OPENAI_API_URL, {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": system
        },
        {
          "role": "user",
          "content": req.body.user_prompt
        }
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
  })
  .then((response) => {
    console.log(response.data)
    res.send(response.data)
  })
  .catch((err) => console.error(err))

  // res.sendStatus(200);

});

router.post('/compile', function(req, res, next) {
  let compiled = svelte.compile(req.body.code)
  res.send(compiled);
})

module.exports = router;
