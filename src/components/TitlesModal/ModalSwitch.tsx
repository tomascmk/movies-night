import ListGroup from 'react-bootstrap/ListGroup'

interface Props {
  canShowDescription: boolean
  onOptionChange(option: boolean): void
}
export const ModalSwitch = ({ canShowDescription, onOptionChange }: Props) => {
  return (
    <ListGroup horizontal={'sm'}>
      <ListGroup.Item
        variant={canShowDescription ? 'info' : 'dark'}
        action
        onClick={() => onOptionChange(true)}
      >
        Title description
      </ListGroup.Item>
      <ListGroup.Item
        variant={!canShowDescription ? 'info' : 'dark'}
        action
        onClick={() => onOptionChange(false)}
      >
        Where to see
      </ListGroup.Item>
    </ListGroup>
  )
}
