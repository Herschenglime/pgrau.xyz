```js
// source: https://www.geeksforgeeks.org/how-to-convert-tsv-to-json-file-having-comma-separated-values-in-node-js/
// Reading the file using default fs npm package
const fs = require("fs");

tsv_files = []
tsv_files.push(fs.readFileSync("../TSV Files/008-034.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/035-040.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/041-053.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/054-076.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/077-083.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/084-093.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/094-098.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/099-110.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/111-118.tsv"))
tsv_files.push(fs.readFileSync("../TSV Files/119-128.tsv"))

var wordlists = {}

//go through each file and put into wordlists object
for (tsv of tsv_files) {
  // Convert the data to String and split it in an array
  let lines = tsv.toString().split("\r\n"); //each line is a row?

  // The array[0] contains all the header columns so we store them
  // in headers array
  //// console.log(`unsplit header: ${array[0]}`)

  let headers = lines[0].split("\t")
  let subheadings = lines[1].split("\t")
  //// console.log(`split header: ${lessons}`)

  //// console.log(`headers 1 by 1:`)
  // for (lesson of lessons) {
  ////   console.log(lesson)
  // }

  let wordArray = [];
  //make split array of words
  for (let i = 2; i < lines.length; i++) {
    wordArray.push(lines[i].split("\t"))
  }

  //console.log(wordArray);

  //we want to go down each column and get all of the words until the end
  // some lessons have multiple columns
  let currHeaderIndex = 0;
  let nextHeaderIndex = 1;

  while (currHeaderIndex < headers.length) {
    let currHeader = headers[currHeaderIndex];
    let nextHeader = headers[nextHeaderIndex];

    //only runs if next header has nothing, i.e there is a multi column lesson
    while (nextHeader == "") {
      nextHeader = headers[++nextHeaderIndex];
    }

    //console.log(`curr header: ${currHeader} with index: ${currHeaderIndex}`)
    //console.log(`next header: ${nextHeader} with index: ${nextHeaderIndex}\n`)

    //create default wordlist
    wordlists[`lesson${currHeader}`] = {
      default: [],
    }

    //get words from each column
    for (let i = currHeaderIndex; i < nextHeaderIndex; i++) {

      let subheading = subheadings[i]

      //if there's a subheading at the current index
      if (subheading) {
        //push every word of that row into a property of the current lesson
        wordlists[`lesson${currHeader}`][subheading] = [];

        for (let wordRow of wordArray) {
          //// console.log("word row: " + wordRow)
          if (wordRow[i]) {
            wordlists[`lesson${currHeader}`][subheading].push(wordRow[i]);
          }
        }
      }

      //otherwise just push the words to the default list
      else {
        for (let wordRow of wordArray) {
          //// console.log("word row: " + wordRow)
          if (wordRow[i]) {
            wordlists[`lesson${currHeader}`].default.push(wordRow[i]);
          }
        }

      }


    }

    //if the default list is empty, remove it
    if (wordlists[`lesson${currHeader}`].default.length === 0) {
      delete wordlists[`lesson${currHeader}`].default
    }

    currHeaderIndex = nextHeaderIndex++; //update headers
  }
}

//also get heart words
{
  heartWords = fs.readFileSync("../TSV Files/Heart Words.tsv")
  let lines = heartWords.toString().split("\n"); //each line is a row

  // console.log("lines: ")
  // console.log(lines)

  for (line of lines) {
    let [lessonNum, heartWord] = line.split("\t")

    //create lesson and heart property if it doesn't yet exist
    if (!wordlists[`lesson${lessonNum}`]) {
      wordlists[`lesson${lessonNum}`] = {};
    }

    if (!wordlists[`lesson${lessonNum}`].heart) {
      wordlists[`lesson${lessonNum}`].heart = [heartWord]
    }

    else {
      wordlists[`lesson${lessonNum}`].heart.push(heartWord)
    }
  }

  //delete extraneous newline lesson
  delete wordlists.lesson
}
//print wordlists object
console.log(wordlists)

// Convert the resultant array to json and
// generate the JSON output file.
let json = JSON.stringify(wordlists);
fs.writeFileSync('../wordlists.json', json);

//restructure to do this:
/*
 * lesson[“18”].words
 * lesson[“18”].heart
 *
 * put class in js that loads json in and has getters for different things
 * can do sublists
 * make api for wordlist so that we can use it from other programs
 *
 *
 * what we need:
 * put categories back, make final json
 * need a simple set of getters through a light api
 *
 * am, an in 38a - fix up
 * also 41a, 49 - will need to change how I handle stuff
 */
```
