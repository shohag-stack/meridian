import { SanityImage } from '@/types'
import {client} from "./client"
import {createImageUrlBuilder} from '@sanity/image-url'

const builder = createImageUrlBuilder(client!)

export default function urlFor(source: SanityImage) {
  return builder.image(source)
}