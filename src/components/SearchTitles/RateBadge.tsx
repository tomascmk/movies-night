import { useMemo } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { round } from 'lodash'
interface Props {
  rate?: number
  votes?: number
}

export const RateBadge = ({ rate, votes }: Props) => {
  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      {votes} votes.
    </Tooltip>
  )
  const buttonVariant = useMemo(() => {
    if (!rate) {
      return 'secondary'
    }

    if (rate >= 7) {
      return 'success'
    } else if (rate >= 4) {
      return 'warning'
    } else {
      return 'danger'
    }
  }, [])

  return (
    <OverlayTrigger
      placement='right'
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant={buttonVariant}>{rate ? round(rate, 2) : '?'}</Button>
    </OverlayTrigger>
  )
}
