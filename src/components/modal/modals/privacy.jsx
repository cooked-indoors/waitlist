import Modal from "..";

const PrivacyModal = ({ setOpenModal, openModal, data }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title="Privacy Policy"
      addStyle={"sm:my-8 w-full md:w-8/12 sm:p-6"}
    >
      <div className="p-2 md:p-4">

        <div className="h-[24rem] overflow-auto text-sm">
        <p className=' text-gray-600'>
          At <span className='text-[#1D319A]'>Cooked Indoors, </span> we are
          committed to protecting your privacy and personal information. This
          privacy policy outlines how we collect, use, and protect your
          information when you use our platform.
        </p>
          <div className="my-4">
          <h1 className='mb-4 mt-10 text-[#1D319A]'>
            Collection of Information
          </h1>
          <p className='font-light text-gray-600'>
            When you use our platform, we may collect certain information from
            you, including your name, contact information, dietary preferences,
            and payment information. We may also collect information about your
            device, browser, and usage of our platform through cookies and other
            tracking technologies.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Use of Information</h1>
          <p className='font-light text-gray-600'>
            We use the information we collect to provide you with our services,
            including processing orders, communicating with you, and
            personalizing your experience on our platform. We may also use your
            information to improve our platform and develop new products and
            services.
          </p>
          </div>
          <div className="my-4">
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Sharing of Information</h1>
          <p className='font-light text-gray-600'>
            We may share your information with third-party service providers who
            help us to provide our services, such as payment processors and
            delivery partners. We may also share your information with
            healthcare organizations that use our platform to provide meals to
            their users. We will never sell your information to third parties.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Security of Information</h1>
          <p className='font-light text-gray-600'>
            We take the security of your information seriously and have
            implemented measures to protect it from unauthorized access,
            disclosure, or modification. However, no method of transmission over
            the internet or electronic storage is 100% secure, and we cannot
            guarantee the absolute security of your information.
          </p>
          </div>
          <div className="my-4">
          <h1 className='mb-4 mt-10 text-[#1D319A]'>
            Retention of Information
          </h1>
          <p className='font-light text-gray-600'>
            We will retain your information for as long as necessary to provide
            our services to you and to comply with our legal obligations.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Links to Other Websites</h1>
          <p className='font-light text-gray-600'>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites, and
            such sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>
            Changes to Privacy Policy
          </h1>
          <p className='font-light text-gray-600'>
            We may update this privacy policy from time to time. If we make any
            material changes, we will notify you by email or through our
            platform.
          </p>
          </div>
          </div>
        <hr className="my-2" />
        <p className="text-center text-sm text-gray-800">
        If you have any questions or concerns about our privacy policy or
            the handling of your information, please contact us via{" "}
          <span className="font-semibold text-blue-600">admin@cookedindoors.com</span>
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
