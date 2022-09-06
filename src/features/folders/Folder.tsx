import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../common/api";
import { CardT, FolderT } from "../../common/types";
import CardsTable from "./CardsTable";
import Header from "../header/Header";
import SecondaryButton from "../utils/SecondaryButton";
import { PrimaryButton } from "../utils/PrimaryButton";
import { CardModal } from "../cards/CardModal";

function Folder() {
  const location = useLocation();
  const { id, title: FolderTitle } = location.state as FolderT;

  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  /* TODO refactor component - to not fetch data every time */
  /* TODO refactor to async await */
  /* TODO add loading status and error */
  useEffect(() => {
    Api.getFolderCards(id)
      .then(({ data }: any) => {
        setCards(data);
      })
      .catch((e: { response: { data: any } }) => alert(e.response.data));
  }, [id]);

  const deleteAction = async (cardId: number) => {
    /* TODO add error handling */
    await Api.deleteCard(cardId);
    setCards((cards) => cards.filter((card: CardT) => card.id !== cardId));
  };

  /* TODO add use callbacks */

  const createCardHandler = () => {
    /* TODO rethink */
    navigate(`/folder/${id}/card/new`, { state: { id } });
  };

  const nextHandler = () => {
    setShowContent(false);
    setCardIndex((cardIndex) =>
      cardIndex + 1 < cards.length ? cardIndex + 1 : cardIndex
    );
  };

  const prevHandler = () => {
    setShowContent(false);
    setCardIndex((cardIndex) => (cardIndex > 0 ? cardIndex - 1 : 0));
  };

  const closeHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const showContentHandler = () => {
    setShowContent((showContent) => !showContent);
  };

  return (
    <>
      <Header backRoute="/main" pageName={FolderTitle} />
      <div className="container flex flex-col justify-center folder">
        <div className="button space-x-4 mt-4 mb-4">
          <PrimaryButton
            className="max-w-xs"
            text="Repeat"
            onClick={() => {
              setShowModal(true);
            }}
          />
          <SecondaryButton text="Create Card" onClick={createCardHandler} />
        </div>
        <CardsTable cards={cards} deleteAction={deleteAction} folderId={id} />
      </div>
      {showModal && (
        <CardModal
          cardIndex={cardIndex}
          cardsCount={cards.length}
          closeHandler={closeHandler}
          currentCard={cards[cardIndex]}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          showContent={showContent}
          showContentHandler={showContentHandler}
        />
      )}
    </>
  );
}

export default Folder;
