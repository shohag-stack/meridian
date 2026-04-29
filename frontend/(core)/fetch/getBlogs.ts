import { BlogPost } from '@/types';
import {client} from "@/(core)/sanity/lib/client"
import { isSanityConfigured } from "@/(core)/sanity/lib/client"
import { BLOG_POSTS } from "@/data/data"
import { POST_QUERIES, SINGLE_POST_QUERY } from "../sanity/queries/postQueries"


export async function getBlogs(): Promise<BlogPost[]> {

    if(!isSanityConfigured || !client) return BLOG_POSTS

    try {
        const posts =  await client.fetch(POST_QUERIES)
        return posts.map((post: BlogPost)=> ({
          ...post,
          excerpt: post.excerpt.slice(0, 160)
        }))

    }
    catch(err){
        console.log("error fetching blog post from sanity", err)
        return BLOG_POSTS
    }

}




export async function getBlogBySlug({slug}: {slug:string}): Promise<BlogPost | null> {

    if(!isSanityConfigured || !client) return BLOG_POSTS.find((item)=> item.slug === slug) || null

    try {
        const post =  await client.fetch(SINGLE_POST_QUERY, {slug})
        return post

    }
    catch(err){
        console.log("error fetching blog post from sanity", err)
        return null
    }

}