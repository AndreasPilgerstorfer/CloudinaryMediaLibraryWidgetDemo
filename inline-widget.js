document.getElementById("openWidget").addEventListener("click", () => {
    const ml = cloudinary.createMediaLibrary(
      {
        cloud_name: cloudNameVD,
        api_key: apiKeyVD,
        multiple: true,
        use_saml: true,
      },
      {
        insertHandler: (data) => {
          console.log("Selected Assets:", data.assets);
          generateMediaEntities(data.assets);
        },
      },
    );
  
    ml.show();
  });
  

  let mediaLibrary = cloudinary.createMediaLibrary(
    {
        cloud_name: cloudNameVD,
        api_key: apiKeyVD,
        use_saml: true,
        inline_container: "#cloudinary_widget",
        multiple: false,
        // Open in Search Tab
        default_tab: "search",
    },
    {
      insertHandler: function(data) {
        // Insert doesnt do anything
        console.log("Unused Insert:", data);
      }
    }
  );

  // Open Inline Widget
  mediaLibrary.show();