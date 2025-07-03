// Utility to check if images exist and provide fallbacks
export const checkImageExists = (imagePath) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = imagePath
  })
}

export const getImageWithFallback = (primaryPath, fallbackPath = "/placeholder.svg") => {
  return checkImageExists(primaryPath).then((exists) => (exists ? primaryPath : fallbackPath))
}

// Helper function to generate image paths
export const getProductImagePath = (category, imageName) => {
  const basePath = "/images/"
  const categoryPaths = {
    jewelry: "jewelry/",
    wigs: "wigs/",
    perfumes: "perfumes/",
    skincare: "skincare/",
    owner: "",
  }

  return basePath + (categoryPaths[category] || "") + imageName
}

// Batch check for missing images (useful for development)
export const checkAllImages = async () => {
  const imagesToCheck = [
    // Owner image
    "/images/owner.jpg",

    // Jewelry images
    ...Array.from({ length: 29 }, (_, i) => `/images/jewelry/necklace${i + 1}.jpg`),
    ...Array.from({ length: 7 }, (_, i) => `/images/jewelry/watch${i + 1}.jpg`),

    // Wig images
    ...Array.from({ length: 7 }, (_, i) => `/images/wigs/wig${i + 1}.jpg`),

    // Perfume images
    ...Array.from({ length: 6 }, (_, i) => `/images/perfumes/perfume${i + 1}.jpg`),

    // Skincare images
    ...Array.from({ length: 8 }, (_, i) => `/images/skincare/skincare${i + 1}.jpg`),
  ]

  const results = await Promise.all(
    imagesToCheck.map(async (path) => ({
      path,
      exists: await checkImageExists(path),
    })),
  )

  const missing = results.filter((result) => !result.exists)

  if (missing.length > 0) {
    console.log(
      "Missing images:",
      missing.map((item) => item.path),
    )
  } else {
    console.log("All images are present!")
  }

  return results
}
