const imageKitUrl = "https://ik.imagekit.io/devngp/student-management"
const localImageUrl = "http://localhost:5173/src/assets"

let imageUrl = ''

if(window.location.hostname === "localhost") {
  imageUrl = localImageUrl
} else {
   imageUrl = imageKitUrl
}

export const getImageLink = (imagePath) => {
  return imageUrl + `${imagePath}`  
}
