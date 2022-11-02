import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  )

  const sectionHeader = {
    title: 'Creating a path for future growth and sustainable value',
    paragraph:
      'Over the past four decades, CGI has grown into one of the world’s largest business and strategic IT consulting companies. In rapidly changing times, we help our clients boldly set their ambitions and clearly drive their future course with confidence. We bring insights you can act on based on facts not hype, creating a path for future growth and sustainable value.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className='mt-0 mb-12'>
                  The value our consultants deliver
                </h3>
                <p className='m-0'>
                  Our consulting differentiators accelerate the journey to your
                  desired state. We help you choose the best path for your
                  transformation, and we work with you every step of the way.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/consultant_deliver.jpg')}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-right'
                data-reveal-container='.split-item'
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className='mt-0 mb-12'>
                  In-depth industry knowledge and experience
                </h3>
                <p className='m-0'>
                  With in-depth industry knowledge and experience, our business
                  consultants understand your unique market opportunities and
                  collaborate closely with you to design a meaningful strategy
                  that combines your long-term corporate purpose with agile
                  decision-making and action. We help you to solve your business
                  challenges and achieve your business goals.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/meeting.png')}
                  alt='Features split 02'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className='mt-0 mb-12'>End-to-end capabilities</h3>
                <p className='m-0'>
                  Taking full advantage of our end-to-end capabilities, we help
                  decision-makers decipher emerging technology trends, drive
                  actionable innovation and create competitive advantage as
                  digital leaders.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/endtoend.jpg')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className='mt-0 mb-12'>Close collaboration</h3>
                <p className='m-0'>
                  We work side-by-side with you to understand and unlock the
                  full potential of your organization and talent. Our business
                  consultants help you to design and build flexible and
                  resilient business and operating models. We also deliver
                  critical change management that enables your digital success.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/collabration.jpg')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit.propTypes = propTypes
FeaturesSplit.defaultProps = defaultProps

export default FeaturesSplit
