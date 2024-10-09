import Modal from "..";

const TermsModal = ({ setOpenModal, openModal, data }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title="Terms & Conditions"
      addStyle={"sm:my-8 w-full md:w-8/12 sm:p-6"}
    >
      <div className="p-2 md:p-4">

        <div className="h-[24rem] overflow-auto text-sm">
          <div className="my-4">
          <p className=' text-gray-600'>
          Welcome to <span className='text-[#1D319A]'>Cooked Indoors! </span>{' '}
          These terms and conditions (&#34;Terms&#34;) govern your use of our
          platform and the services we provide. By using our platform, you agree
          to be bound by these Terms.
        </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Use of Platform</h1>
          <p className='font-light text-gray-600'>
            You may use our platform only for lawful purposes and following
            these Terms. You agree not to use our platform in any way that
            violates any applicable federal, state, local, or international law
            or regulation.
          </p>
          </div>
          <div className="my-4">
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Registration</h1>
          <p className='font-light text-gray-600'>
            To use our platform, you may be required to register for an account.
            You agree to provide accurate and complete information when you
            register, and to update your information as necessary. You are
            responsible for maintaining the confidentiality of your account
            information and for any activity that occurs under your account.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Payment & Fees</h1>
          <p className='font-light text-gray-600'>
            You agree to pay all fees associated with the use of our platform
            and the services we provide. We may change our fees at any time, and
            we will notify you in advance of any changes.
          </p>
          </div>
          <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Intellectual Property </h1>
          <p className='font-light text-gray-600'>
            All content on our platform, including text, graphics, logos,
            images, and software, is the property of Cooked Indoors or its
            licensors and is protected by copyright, trademark, and other
            intellectual property laws. You may not copy, modify, distribute, or
            otherwise use any content on our platform without our express
            written permission.
          </p>
        </div>
        <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>
            Disclaimer of Warranties
          </h1>
          <p className='font-light text-gray-600'>
            We make no representations or warranties about the suitability,
            reliability, availability, timeliness, or accuracy of our platform
            or the services we provide. We do not warrant that our platform will
            be error-free or uninterrupted, or that any defects will be
            corrected.
          </p>
        </div>
        <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Limitation of Liability</h1>
          <p className='font-light text-gray-600'>
            In no event shall Cooked Indoors be liable for any indirect,
            incidental, special, or consequential damages arising out of or in
            connection with your use of our platform or the services we provide.
            Our liability to you for any direct damages shall be limited to the
            fees you paid to us in the 12 months preceding the claim.
          </p>
        </div>
        <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Indemnification</h1>
          <p className='font-light text-gray-600'>
            You agree to indemnify and hold harmless Cooked Indoors, its
            affiliates, and their respective officers, directors, employees, and
            agents, from any claims, damages, losses, liabilities, and expenses
            arising out of or in connection with your use of our platform or the
            services we provide.
          </p>
        </div>
        <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>Governing Law</h1>
          <p className='font-light text-gray-600'>
            These Terms shall be governed by and construed by the Laws of Lagos
            State of Nigeria, without giving effect to any principles of
            conflicts of law.
          </p>
        </div>
        <div>
          <h1 className='mb-4 mt-10 text-[#1D319A]'>
            Changes to Terms & Conditions
          </h1>
          <p className='font-light text-gray-600'>
            We may update these Terms from time to time. If we make any material
            changes, we will notify you by email or through our platform.
          </p>
        </div>
          </div>
        <hr className="my-2" />
        <p className="text-center text-sm text-gray-800">
        If you have any questions or concerns about these Terms or your use
            of our platform, please contact us via {" "}
          <span className="font-semibold text-blue-600">admin@cookedindoors.com</span>
        </p>
      </div>
    </Modal>
  );
};

export default TermsModal;
