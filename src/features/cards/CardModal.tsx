import Modal from '../utils/Modal';
import { CardT } from '../../common/types';
import { PrimaryButton } from '../utils/PrimaryButton';
import SecondaryButton from '../utils/SecondaryButton';

/* TODO add teleport for modal */

export function CardModal({
  cardIndex,
  currentCard,
  showContent,
  showContentHandler,
  cardsCount,
  nextHandler,
  prevHandler,
  closeHandler }: {
  cardIndex: number,
  currentCard: CardT,
  showContent: boolean,
  showContentHandler: () => void,
  cardsCount: number,
  nextHandler: () => void,
  prevHandler: () => void,
  closeHandler: () => void }) {


  const { title, content } = currentCard;

  /* TODO work with pagination better */
  return (
    <>
      <Modal>
        <div>
          { cardIndex + 1}
          /
          { cardsCount }
        </div>
        <div className="flex flex-col">
          <span>{title}</span>
          { showContent && <span>{content}</span>}
        </div>
        <PrimaryButton text='Show' onClick={showContentHandler} />
        <div className='pagination space-x-4'>
          <SecondaryButton text="<" onClick={prevHandler}/>
          <SecondaryButton text=">" onClick={nextHandler}/>
        </div>
        <SecondaryButton text="Close" onClick={closeHandler}/>
      </Modal>
    </>
  );
}
