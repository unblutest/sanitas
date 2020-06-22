

startPinConversation = () => {

  var pin = document.getElementById("pin").value;

  if (!unblu.api.isInitialized()) {
    unblu.api.configure({serverUrl: "https://services6.unblu.com", apiKey: "e5OkYOwVTo27IqZvcGMaxg"}).initialize().then(api => {
      // use the api
      console.log("API initialized successfully!");


      api.isAgentAvailable().then(agent => {
        console.log("Agent is present: ", agent);
        if (agent) {
          api.joinConversation(pin).then(conversation => {
            conversation.on("end", function() {
              console.log("Conversation ended.");
            });
            conversation.on("close", function() {
              console.log("Conversation closed.");
            });
          }).catch(e => {
            console.log("error on start conversation: ", e);
          });


        } else {
          console.log("Agent is not present.");
          // Do something
        }


      }).catch(e => {
        console.log("Error on isAgentAvailable: ", e);
      });


    }).catch(e => {
      if(e.type === 'INITIALIZATION_TIMEOUT') {
        //retry
      } else if(e.type === 'UNSUPPORTED_BROWSER') {
        // display unsupported browser dialog
      } else {
        // show generic error message
      }
    });
  } else {
    var api = unblu.api.initializedApi;
    // use the api
    console.log("API initialized successfully!");


    api.isAgentAvailable().then(agent => {
      console.log("Agent is present: ", agent);
      if (agent) {
        api.joinConversation(pin).then(conversation => {
          conversation.on("end", function() {
            console.log("Conversation ended.");
          });
          conversation.on("close", function() {
            console.log("Conversation closed.");
          });
        }).catch(e => {
          console.log("error on start conversation: ", e);
        });


      } else {
        console.log("Agent is not present.");
        // Do something
      }


    }).catch(e => {
      console.log("Error on isAgentAvailable: ", e);
    });

  }

}



openVisitorUI = () => {
  if (unblu.api.isConfigurationNeeded()) {
    unblu.api.configure({serverUrl: "https://services6.unblu.com", apiKey: "e5OkYOwVTo27IqZvcGMaxg"}).initialize().then(api => {
      // use the api
      console.log("API initialized successfully!");
      api.ui.openPinEntryUi().then(() => {

      }).catch();
    }).catch(e => {
      if(e.type === 'INITIALIZATION_TIMEOUT') {
        //retry
      } else if(e.type === 'UNSUPPORTED_BROWSER') {
        // display unsupported browser dialog
      } else {
        // show generic error message
        console.log("Error in loading script.");
      }
    });
  } else if (unblu.api.isInitialized()) {
    var api = unblu.api.initializedApi;
    api.ui.openPinEntryUi().then(() => {

    }).catch();
  } else {
    unblu.api.initialize().then(api => {
      // use the api
      console.log("API initialized successfully!");

      api.ui.openPinEntryUi().then(() => {

      }).catch();
    }).catch(e => {
      if(e.type === 'INITIALIZATION_TIMEOUT') {
        //retry
      } else if(e.type === 'UNSUPPORTED_BROWSER') {
        // display unsupported browser dialog
      } else {
        // show generic error message
      }
    });
  }
}

startNewChat = () => {

  unblu.api.configure({serverUrl: "https://unblu.cloud", apiKey: "WMM3hhDISfKT762iItkdAw"}).initialize().then(api => {
    // use the api
    console.log("API initialized successfully!");

    api.isAgentAvailable().then(agent => {
        console.log("Agent is present: ", agent);
        if (agent) {
        api.startConversation("CHAT_REQUEST", "John").then(conversation => {
        conversation.on("end", function() {
        console.log("Conversation ended.");
      });
      conversation.on("close", function() {
      console.log("Conversation closed.");
    });
    }).catch(e => {
    console.log("error on start conversation: ", e);
    });


    } else {
    console.log("Agent is not present.");
    // Do something
    }


  }).catch(e => {
  console.log("Error on isAgentAvailable: ", e);
  });


  }).catch(e => {
    if(e.type === 'INITIALIZATION_TIMEOUT') {
      //retry
    } else if(e.type === 'UNSUPPORTED_BROWSER') {
      // display unsupported browser dialog
    } else {
      // show generic error message
    }
  });

}

loadUnblu = () => {
  if (!unblu.api.isInitialized()) {
    //loadScript("https://unblu.cloud/unblu/visitor.js?x-unblu-apikey=WMM3hhDISfKT762iItkdAw");
    loadScript("http://localhost:8080/unblu/visitor.js?x-unblu-apikey=MZsy5sFESYqU7MawXZgR_w");
  }

}

//window.onload = loadUnblu();

function loadScript(location) {
    // Check for existing script element and delete it if it exists
    var js = document.getElementById("unbluScript");
    if(js) {
        document.body.removeChild(js);
        console.info("---------- Script refreshed ----------");
    }

    // Create new script element and load a script into it
    js = document.createElement("script");
    js.src = location;
    js.type = "text/javascript"
    js.id = "unbluScript";
    document.body.appendChild(js);
}
