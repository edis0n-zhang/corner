<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import ResponseBox from "$lib/components/gpt_response.svelte";

    let editorContainer;
    let editor;
    $: response = "Your custom website will show up here!";

    onMount(async () => {
      const monaco = await import('monaco-editor');
      editor = monaco.editor.create(
        editorContainer,
        {
          value: response,
          language: 'javascript',
          theme: 'vs-dark'
        }
      );

      editor.onDidChangeModelContent(() => {
        response = editor.getValue();
      });

    });

    $: if (editor) editor.setValue(response);

    let formData = {
        user_prompt: '',
    };

    async function handleSubmit() {
      try {
        axios.post(
          'http://localhost:3000/generator/generate',
          formData,
          { headers: { 'Content-Type': 'application/json', } }
        )
          .then((res) => {
            response = res.data.choices[0].message.content.split('\n').slice(1, -1).join('\n')
            console.log(response)
          })
          .catch((err) => console.error(err))
      } catch (err) {
        console.error('Error submitting form:', err);
      }
    }

    let userData = {
        username: '',
    };

    function handlePost() {

    }
</script>

<div class="flex justify-center h-screen">
  <div class="w-1/2">
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <textarea class="w-full p-2 my-2 border-2 border-black rounded-sm" type="text" id="name" bind:value={formData.user_prompt} placeholder='How do you want your site designed?' />
      </div>
      <button type="submit" class="p-2 bg-green-400 rounded-sm">Generate Page</button>
    </form>

    <ResponseBox bind:data={response} />
    <div bind:this={editorContainer} class="my-5 rounded-sm h-1/2 editor-container"></div>

    <form on:submit|preventDefault={handlePost}>
      <input class="p-2 m-2 border-2 border-black rounded-sm" type="text" id="name" bind:value={userData.username} placeholder='Username' />
      
      <button type="submit" class="p-2 bg-green-400 rounded-sm">Post</button>
    </form>
  </div>
</div>


