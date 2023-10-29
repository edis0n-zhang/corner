<script>
    import axios from 'axios';
    import ResponseBox from "$lib/components/gpt_response.svelte";

    let formData = {
        user_prompt: '',
    };

    $: response = "Your custom website will show up here!";

    async function handleSubmit() {
      try {
        axios.post(
          'http://localhost:3000/generator/generate',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
          .then((res) => {
            let content = res.data.choices[0].message.content
            axios.post(
              'http://localhost:3000/generator/compile',
              { code: content },
              { headers: { 'Content-Type': 'application/json', } }
            )
              .then((res) =>{
                console.log(res.data)
                response = res.data
                response = "<h1> hello world </h1>"
              })
            .catch((err) => console.error(error))
          })
          .catch((err) => console.error(error))
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
</script>

<div class="flex justify-center h-screen">
  <div class="w-1/2">
    <form on:submit|preventDefault={handleSubmit}>
      <label for="user_prompt">Design your site</label>
      <input class="p-2 m-2 border-2 border-black rounded-sm" type="text" id="name" bind:value={formData.user_prompt} />
      
      <button type="submit" class="p-2 bg-green-400 rounded-sm">Submit</button>
    </form>

      <ResponseBox data={response} />
  </div>
</div>


