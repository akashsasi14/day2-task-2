function fetchdefinition() {
    var word = document.getElementById("input").value;
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    if (!word) {
      alert("Please enter a word");
      return; // Return early to prevent further execution
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var meanings = data[0].meanings;

        // Extracting definition
        var definition = meanings[0].definitions[0].definition;
        document.getElementById("definition").innerHTML = "<b>Definition: <i>" + definition + "</i></b>";
      })
      .catch(error => {
        console.error("Error fetching definition:", error);
        document.getElementById("definition").innerText = "Failed to fetch definition. Please try again later.";
      });
  }