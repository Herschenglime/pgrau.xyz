<script lang="ts">
  import ImageCard from '$lib/components/ImageCard.svelte';
  import CodeSnip from '$lib/components/CodeSnip.svelte';
  import TsvParse from './tsv-parse.md';
</script>

# Research Experience

## op.n Lab

### Apps for Good Cure Course

Working under the Digital Worlds Institute and in partnership with the University of Florida Literacy Institute (UFLI), my team created a number of web-based literacy games for use with the UFLI Foundations Curriculum for the use of K-2 Students. The working site can be seen here:

<ImageCard
    title="UFLI Games"
    alt="UFLI Games screenshot"
    img='$lib/content/e-portfolio/research-experience/ufli-games.png'
    link='https://research.dwi.ufl.edu/op.n/file/pd7py49630t41lba/'
>
Click the image to be taken to the site.
</ImageCard>

The project was entirely written in the **op.n** framework, a custom JavaScript-based web UI used for making apps for the Digital Worlds Institute and partner researchers.

In particular, I focused on extracting the data from an existing excel sheet of all of the words in the curriculum into our program and making them accessible to the other games. I also made the "Select Words" GUI that lets teachers mix and match words from different lessons, as well as provide their own custom word lists.

The code for extracting the word lists from the original excel sheet (downloaded as a .tsv file) and converting them to json is as follows:

<CodeSnip><TsvParse/></CodeSnip>

To see the source code for any component on the website, including that of the Select Words interface, navigate to the Help > About > Software developers and click the "Source Code" button, like so:

![Menu path]($lib/content/e-portfolio/research-experience/menu-path.png)
![Source code button]($lib/content/e-portfolio/research-experience/source-code-view.png)
