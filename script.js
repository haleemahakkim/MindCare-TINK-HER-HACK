function analyze() {
  let mood = parseInt(document.getElementById("mood").value);
  let sleep = parseInt(document.getElementById("sleep").value);
  let anxiety = parseInt(document.getElementById("anxiety").value);
  let focus = parseInt(document.getElementById("focus").value);
  let motivation = parseInt(document.getElementById("motivation").value);
  let social = parseInt(document.getElementById("social").value);
  let selfharm = parseInt(document.getElementById("selfharm").value);

  let score = mood + sleep + anxiety + focus + motivation + social;

  let resultBox = document.getElementById("result");
  let helpBox = document.getElementById("help");
  helpBox.classList.add("hidden");

  if (selfharm === 3) {
    resultBox.innerHTML =
      "<h3>🚨 Immediate Support Recommended</h3>" +
      "<p>You are not alone. Talking to someone can really help.</p>";
    helpBox.classList.remove("hidden");
  }
  else if (score <= 4) {
    resultBox.innerHTML =
      "<h3>😊 You seem to be doing okay</h3>" +
      "<p>Keep maintaining healthy habits.</p>";
  }
  else if (score <= 8) {
    resultBox.innerHTML =
      "<h3>🙂 Mild Stress Detected</h3>" +
      "<p>Try relaxation and talk to friends.</p>";
  }
  else {
    resultBox.innerHTML =
      "<h3>😟 High Stress Level</h3>" +
      "<p>Professional support may be helpful.</p>";
  }
}

 async function sendToAi() {

  // 🔴 STATIC DATA FROM YOUR FILE
  const staticText = "Give one simple mental health self-care tip for students.";

  const API_KEY = "AIzaSyBhMElmTIw7ZR7ZbLIRvxoxPF3k5YVSQKU";

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key="
    + API_KEY;


  const requestData = {
    contents: [
      {
        parts: [
          { text: staticText }
        ]
      }
    ]
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  });

  const data = await response.json();

  // Get AI text
  const aiText =
    data.candidates[0].content.parts[0].text;

  document.getElementById("response").innerText = aiText;
}
