import Modal from "..";
import Image from "next/future/image";

const SuccessModal = ({ setOpenModal, openModal }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title=""
      addStyle={"sm:my-8 w-full md:w-5/12 sm:p-6"}
    >
      <div className="p-2 md:p-4">
        <div className="flex justify-center">
        <Image src='/success.gif' alt="" width={200} height={200} />
        </div>
        <p className="text-center text-sm text-[#1D319A]">You have successfully joined our waitlist. Be rest assured to get notified when we officially launch the platform.</p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
