import React from 'react'

import { Chevron } from '../Chevron'

import classes from './index.module.scss'

export const Pagination: React.FC<{
  page: number
  totalPages: number
  onClick: (page: number) => void
  className?: string
}> = props => {
  const { page, totalPages, onClick, className } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return (
    <div className={[classes.pagination, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={classes.button}
        disabled={!hasPrevPage}
        onClick={() => {
          onClick(page - 1)
        }}
      >
        <Chevron rotate={90} className={classes.icon} />
        <span className="ml-3  text-[#044864] text-base font-outfit font-semibold leading-6 tracking-[0.08px]">
          Previous
        </span>
      </button>
      <div className={classes.pageRange}>
        <span className={classes.pageRangeLabel}>
          Page <span className={classes.currentPage}>{page} </span> of{' '}
          <span className={classes.totalPages}>{totalPages}</span>
        </span>
      </div>
      <button
        type="button"
        className={classes.button}
        disabled={!hasNextPage}
        onClick={() => {
          onClick(page + 1)
        }}
      >
        <span className="ml-r text-[#044864] text-base font-outfit font-semibold leading-6 tracking-[0.08px]">
          Next
        </span>
        <Chevron rotate={-90} className={classes.icon} />
      </button>
    </div>
  )
}
