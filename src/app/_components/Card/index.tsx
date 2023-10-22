/* eslint-disable simple-import-sort/imports */
import Link from 'next/link'
import React, { Fragment } from 'react'

import { Post, Project } from '../../../payload/payload-types'
import { Media } from '../Media'
import classes from './index.module.scss'

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'projects' | 'posts'
  doc?: Project | Post
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const {
    relationTo,
    showCategories,
    title: titleFromProps,
    doc,
    className,
    orientation = 'vertical',
  } = props

  const { slug, title, categories, meta, populatedAuthors } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <div
      className={[classes.card, className, orientation && classes[orientation]]
        .filter(Boolean)
        .join(' ')}
    >
      <Link href={href} className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>
      <div className={classes.content}>
        {titleToUse && (
          <h4 className={classes.title}>
            <Link href={href} className={classes.titleLink}>
              {titleToUse}
            </Link>
          </h4>
        )}
        {description && (
          <div className={classes.body}>
            {description && <p className={classes.description}>{sanitizedDescription}</p>}
          </div>
        )}
        <div className={classes.actionBar}>
          <div className="text-white font-outfit text-[10.246px] font-medium  leading-[120%] lg:tracking-[-0.32px] rounded-[6px] p-[11.7px] bg-[#9C9C9C] h-[40px] flex justify-center items-center">
            <span className="mr-1"></span> {populatedAuthors[0]?.name}
          </div>
          <Link href={href} className={classes.linkToArticle}>
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
  )
}
