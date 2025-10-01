let mediaLibrary = cloudinary.createMediaLibrary({
    cloud_name: cloudName,
    api_key: apiKey,
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
