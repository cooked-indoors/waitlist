import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'next-share'

function ShareButtons({ shareUrl, title, desc }) {
  return (
    <div className='flex '>
      <p className='ml text-white text-sm'>Share:</p>
      <div className='ml-2 flex space-x-1'>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          hashtag={'#cookedindoors'}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={24} round />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={24} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator=':: '>
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={24} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareUrl} subject={title} body={desc}>
          <EmailIcon size={24} round />
        </EmailShareButton>
      </div>
    </div>
  )
}

export default ShareButtons
