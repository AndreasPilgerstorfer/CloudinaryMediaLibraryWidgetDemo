const cloudName = "ENTER-CLOUD-NAME-HERE";
const apiKeyVD = "ENTER-API-KEY-HERE";

// Open Widget
document.getElementById("openWidget").addEventListener("click", () => {
  const ml = cloudinary.createMediaLibrary(
    {
      cloud_name: cloudName,
      api_key: apiKey,
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


/*
 Generate Media Entities based on the JSON reponse. 
 @return = Array(Object)
 */
function generateMediaEntities(assets) {
  const assetArray = assets.map((asset) => {
    const altText = asset?.context?.custom?.alt || "Image";

    return {
      id: asset.id,
      public_id: asset.public_id,
      url: asset.secure_url || asset.url,
      resource_type: asset.resource_type,
      alt: altText,
    };
  });

  console.log("Asset Array mit Alt-Texten:", assetArray);
  displayImages(assetArray);
}


/*
 Display images on the page 
 */
function displayImages(assetArray) {
  const container = document.querySelector(".image-container");
  container.innerHTML = "";

  assetArray.forEach(({ url, alt }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    img.style.maxWidth = "300px";
    img.style.margin = "10px";
    container.appendChild(img);
  });
}
