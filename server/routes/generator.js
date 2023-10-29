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
    with vanilla HTML and Tailwind CSS, and you are to design a blog page
    according to the user's specifications.

    You will write a HTML component with the appropriate Tailwind CSS that
    represents a simple but beautiful blog.

    The layout of the page is a 3x3 grid, and you will write the components
    that conform to this 3x3 grid layout. You must return the HTML code in a
    single component.

    DO NOT EXPLAIN YOUR DESIGN DECISIONS.

    ADD SHORT COMMENTS AND FRIENDLY WHITESPACING TO EXPLAIN TO SOMEONE WITH LITTLE EXPERIENCE WHAT EACH BLOCK OF HTML DOES.

    MOST IMPORTANTLY, YOU WILL ONLY GIVE THE CODE AS A SINGLE COMPONENT IN ONE FILE.
  `

  // res.send(`
  //   <div class="grid grid-cols-3 gap-4">
  //     <!-- Article Title -->
  //     <div class="col-span-3 sm:col-span-2">
  //       <h1 class="text-4xl font-bold mb-4">Convex Optimization: Introduction and Applications</h1>
  //     </div>
  //     <!-- Article Meta -->
  //     <div class="col-span-3 sm:col-span-1">
  //       <div class="flex items-center mb-4">
  //         <img class="w-8 h-8 rounded-full mr-2" src="author-avatar.jpg" alt="Author Avatar">
  //         <span class="text-gray-600 text-sm">Written by <span class="font-medium">John Doe</span></span>
  //       </div>
  //       <div class="flex items-center">
  //         <svg class="w-4 h-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
  //         </svg>
  //         <span class="text-gray-600 text-sm">Published on <span class="font-medium">April 12, 2022</span></span>
  //       </div>
  //     </div>
  //     <!-- Article Image -->
  //     <div class="col-span-3">
  //       <img class="w-full rounded-lg mb-6" src="article-image.jpg" alt="Article Image">
  //     </div>
      
  //     <!-- Article Content -->
  //     <div class="col-span-3">
  //       <p class="text-lg leading-relaxed mb-6">
  //         Convex optimization is a subfield of mathematical optimization focusing on the optimization problem in convex form. It deals with finding the optimal solution for convex problems, where the objective function and constraint functions are convex. Convex optimization has applications in various fields such as machine learning, computer vision, economics, and engineering.
  //       </p>
  //       <p class="text-lg leading-relaxed mb-6">
  //         In convex optimization, the objective is typically to minimize a convex function subject to convex constraints. The convexity of the problem allows for the efficient solution using various optimization algorithms, such as gradient descent, interior point methods, or quadratic programming methods. These algorithms exploit the properties of convex functions to find the global optimal solution.
  //       </p>
  //       <p class="text-lg leading-relaxed mb-6">
  //         Convex optimization has wide-ranging applications. In machine learning, convex optimization is used for training models, such as logistic regression, support vector machines, and neural networks. In computer vision, convex optimization is used for image reconstruction, edge detection, and image segmentation. In economics, convex optimization is used for resource allocation and portfolio optimization. In engineering, convex optimization is used for control systems design, signal processing, and signal reconstruction.
  //       </p>
  //       <p class="text-lg leading-relaxed mb-6">
  //         Understanding convex optimization is crucial for researchers and practitioners in various fields, as it provides a powerful tool for solving complex optimization problems efficiently. By leveraging the convexity of the problem, one can achieve reliable and scalable solutions in a wide range of applications.
  //       </p>
  //     </div>
      
  //     <!-- Call to Action -->
  //     <div class="col-span-3">
  //       <div class="bg-gray-100 rounded-lg p-6 text-center">
  //         <h2 class="text-2xl font-bold mb-4">Ready to learn more about convex optimization?</h2>
  //         <p class="text-lg mb-4">Check out our comprehensive guide on convex optimization and its applications.</p>
  //         <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Learn More</a>
  //       </div>
  //     </div>
  //   </div>
  // `)
  // return;

  console.log("REQUESTED");
  axios.post(process.env.OPENAI_API_URL, {
      "model": "gpt-4-0613",
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
    // console.log(response.data)
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
