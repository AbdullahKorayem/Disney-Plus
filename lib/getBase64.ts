import { getPlaiceholder } from "Plaiceholder";



export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const { base64 } = await getPlaiceholder(Buffer.from(buffer))

  

    return base64

  } catch (e) {
    if (e instanceof Error) console.log(e.stack)
  }
}


// export async function addBlurredDataUrls(images: ImagesResults): Promise<Photo[]> {
//   const base64Promise = images.photos.map(photo => getBase64(photo.src.large))
//   const base64Promis = await Promise.all(base64Promise)
//   const photoWithBlur: Photo[] = images.photos.map((photo, i) => { photo.blurDataURL = base64Promis[i]; return photo })
//   return photoWithBlur
// }