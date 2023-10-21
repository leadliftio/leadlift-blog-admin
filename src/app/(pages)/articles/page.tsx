'use client'

/* eslint-disable no-console */
import React from 'react'
import axios from 'axios'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Page, Post } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Card } from '../../_components/Card'
import { Media } from '../../_components/Media'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'

function FeaturedArticles() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [posts, setPosts] = React.useState([])
  const [isError, setIsError] = React.useState(false)

  // let page: Page | null = null
  let page: any

  // try {
  //   page = await fetchDoc<Page>({
  //     collection: 'posts',
  //     draft: isDraftMode,
  //   })
  // } catch (error) {
  //   // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
  //   // so swallow the error here and simply render the page with fallback data where necessary
  //   // in production you may want to redirect to a 404  page or at least log the error somewhere
  //   // console.error(error)
  // }

  // eslint-disable-next-line no-console
  // console.log(page?.slug)

  React.useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://blog.leadlift.io/api/posts/')
      .then(res => {
        console.log(res)
        setPosts(res.data?.docs)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  if (isLoading) {
    return <span>Fetching...</span>
  }

  if (isError) {
    return <span className="font-outift text-base font-medium">Failed to fetch</span>
  }

  console.log(posts)

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto lg:py-[100px] py-[50px] px-[20px] lg:px-0">
          <div className="mb-[40px] text-white font-poppins text-[21px] lg:text-[30px] font-semibold lg:tracking-[-1.8px] leading-[32px] rounded-[12px] bg-[#6060AF] p-[20px] w-fit">
            Featured Articles
          </div>
        </div>
      </div>
      <div className={classes.purpleGradientBg}>
        <div className="max-w-[1200px] mx-auto lg:py-[44px] py-[32px] px-[20px] lg:px-0">
          <div className="flex justify-between items-center lg:mb-[40px] mb-[20px]">
            <div className="text-white font-poppins text-[21px] lg:text-[30px] font-semibold lg:tracking-[-1.8px] leading-[32px] rounded-[12px] bg-[#6060AF] w-fit p-[20px]">
              Featured Articles
            </div>
            <Link href={'/posts'} className={classes.seeMore}>
              See more{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                  stroke="#50CE78"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#50CE78"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] gap-[25px]">
              {posts &&
                posts.length > 1 &&
                (posts.slice(1, 5) || []).map((post, i) => (
                  <div key={i} className={classes.card}>
                    <Link href={`/posts/${post.slug}`} className={classes.mediaWrapper}>
                      {!post?.meta?.image?.url && (
                        <div className={classes.placeholder}>No image</div>
                      )}
                      {post?.meta?.image?.url && (
                        // <Media
                        //   imgClassName={classes.image}
                        //   resource={`https://blog.leadlift.io/media/${posts[0]?.meta?.image?.filename}`}
                        //   fill
                        // />
                        <Image
                          src={`https://blog.leadlift.io/media/${posts[0]?.meta?.image?.filename}`}
                          className="w-full h-[270px] object-cover rounded-[12px] lg:rounded-[17px]"
                          alt={post?.title}
                        />
                      )}
                    </Link>
                    <div className={classes.content}>
                      {post?.title && (
                        <h4 className={classes.title}>
                          <Link href={`/posts/${post.slug}`} className={classes.titleLink}>
                            {post?.title}
                          </Link>
                        </h4>
                      )}
                      {post?.meta?.description && (
                        <div className={classes.body}>
                          {post?.meta?.description && (
                            <p className={classes.description}>
                              {post?.meta?.description.slice(0, 35)}
                              {post?.meta?.description.length >= 35 && '...'}
                            </p>
                          )}
                        </div>
                      )}
                      <div className={classes.actionBar}>
                        <div className="text-white font-outfit text-[10.246px] font-medium  leading-[120%] lg:tracking-[-0.32px] rounded-[8px] p-[11.7px] bg-[#9C9C9C]">
                          <span className="mr-1"></span> {posts[0]?.populatedAuthors[0]?.name}
                        </div>
                        <Link href={`/posts/${post.slug}`} className={classes.linkToArticle}>
                          Read article
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                          >
                            <path
                              d="M15.6737 14.0686C15.5842 14.1582 15.4616 14.2147 15.3202 14.2147C15.0468 14.2147 14.8205 13.9885 14.8205 13.715L14.8205 8.49188L9.59733 8.49188C9.32391 8.49188 9.09764 8.2656 9.09764 7.99219C9.09764 7.71877 9.32391 7.4925 9.59733 7.4925L15.3202 7.4925C15.5936 7.4925 15.8199 7.71877 15.8199 7.99219L15.8199 13.715C15.8199 13.8565 15.7633 13.979 15.6737 14.0686Z"
                              fill="white"
                            />
                            <path
                              d="M15.594 8.42763L7.66027 16.3614C7.46699 16.5546 7.14644 16.5546 6.95316 16.3614C6.75989 16.1681 6.75989 15.8475 6.95316 15.6543L14.8869 7.72052C15.0802 7.52724 15.4007 7.52725 15.594 7.72052C15.7873 7.9138 15.7873 8.23435 15.594 8.42763Z"
                              fill="white"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticles
